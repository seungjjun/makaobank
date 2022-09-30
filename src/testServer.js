/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import config from './config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.post(`${baseUrl}/session`, async (req, res, ctx) => {
    const { accountNumber, password } = await req.json();
    if (accountNumber === '12341234' && password === 'Qwe1234!') {
      return res(ctx.json({
        accessToken: 'ACCESS.TOKEN',
        name: 'Pikachu',
        amount: 100_000,
      }));
    }
    return res(
      ctx.status(400),
    );
  }),

  rest.get(`${baseUrl}/accounts/me`, async (req, res, ctx) => res(ctx.json({
    name: 'Pikachu',
    accountNumber: '12341234',
    amount: 100_000,
  }))),

  rest.get(`${baseUrl}/transactions`, async (req, res, ctx) => res(ctx.json({
    transactions: [
      {
        id: 1, activity: '송금', name: 'Raichu', amount: 3_000,
      },
    ],
  }))),

  rest.post(`${baseUrl}/transactions`, async (req, res, ctx) => {
    const { amount } = await req.json();

    if (amount <= 0) {
      return res(
        ctx.status(400),
        ctx.json({
          code: 1002,
          message: '금액이 잘못 되었습니다.',
        }),
      );
    }

    return res(ctx.status(200));
  }),
);

export default server;

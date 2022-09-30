import styled from 'styled-components';

import useBankStore from '../hooks/useBankStore';

import numberFormat from '../utils/numberFormat';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transform: translate(0%, 100%);
  margin: auto;
  height: 100%;
  width: 50%;  
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: .15em;
  font-size: 2.5em;
  font-weight: bold;
`;

const AccountBox = styled.div`
  padding-top: 4em;
  border-top: 2px solid #ABD9FF;
`;

const Information = styled.p`
  display: flex;
  padding-bottom: 1.5em;
  font-weight: 700;
  color: #A0A0A0;

  p {
    margin-left: .5em;
    font-weight: 400;
  }
`;

export default function Account() {
  const bankStore = useBankStore();

  return (
    <Container>
      <Title>잔액확인</Title>
      <AccountBox>
        <Information>
          이름:
          {' '}
          {bankStore.name}
        </Information>
        <Information>
          계좌번호:
          {' '}
          {bankStore.accountNumber}
        </Information>
        {bankStore.amount > 0 ? (
          <Information>
            잔액:
            {' '}
            {numberFormat(bankStore.amount)}
            원
          </Information>
        ) : (
          <Information>잔액이 없습니다</Information>
        )}
      </AccountBox>
    </Container>
  );
}

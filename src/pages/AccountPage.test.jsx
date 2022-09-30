import { render, screen, waitFor } from '@testing-library/react';

import AccountPage from './AccountPage';

test('Account', async () => {
  render(<AccountPage />);

  await waitFor(() => {
    screen.getByText('이름: ');
  });
});

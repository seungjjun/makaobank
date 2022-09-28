import { Link, useNavigate } from 'react-router-dom';

import { useLocalStorage } from 'usehooks-ts';

import styled from 'styled-components';

import Button from './ui/Button';

const Container = styled.header`
  width: 100%;
  padding: 1em;
  background: ${(props) => props.theme.colors.panel};

  nav {
    ul {
      display: flex;
    }

    li {
      margin-right: .5em;
    }
  }
`;

export default function Header() {
  const navigate = useNavigate();

  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  const handleLogout = () => {
    setAccessToken('');
    navigate('/');
  };

  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {accessToken ? (
            <>
              <li>
                <Link to="/account">잔액 확인</Link>
              </li>
              <li>
                <Link to="/transfer">송금</Link>
              </li>
              <li>
                <Link to="/transactions">거래 내역 확인</Link>
              </li>
              <li>
                <Button type="button" onClick={handleLogout}>로그아웃</Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/register">회원가입</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </Container>
  );
}

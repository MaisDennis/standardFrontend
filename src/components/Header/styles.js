import styled from 'styled-components';
export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  box-shadow: 3px 3px 3px #fff;
`;
export const Content = styled.div `
  height: 100px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      height: 100px;
      width: auto;


    }
    a {
      font-weight: bold;
      color: #25415d;
    }
  }

 aside {
      display: flex;
      align-items: center;
    }
`;
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #25415d;
    }
  }
  img {
    height: 32px;
    border-radius: 50%;
  }
`;

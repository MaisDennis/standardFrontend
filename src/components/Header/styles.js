import styled from 'styled-components';
export const Container = styled.div`
*, *::before, *::after {
  box-sizing: border-box;
  font-family: Roboto, Arial, Helvetica, sans-serif;
}
  h1 {
    color: #5a79ba;
    font-family: 'Lobster', cursive;
  }

  .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.youtube-logo {
  height: 20px;
}

.search-bar {
  display: flex;
  flex-grow: 1;
  margin: 0 2rem 0 4rem;
}

.search-input {
  width: 100%;
  font-size: inherit;
  padding: .4em;
  border: 1px solid #777;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.search-btn {
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  border: 1px solid #777;
  background-color: #F8F8F8;
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
}

.search-btn:hover {
  background-color: #F0F0F0;
}

.menu-icons {
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  gap: 1.5rem;
}

.menu-channel-icon {
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: #AAA;
}
`;

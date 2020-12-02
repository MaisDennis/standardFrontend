import styled from 'styled-components';

export const Container = styled.div`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  height: 100%;
  background: linear-gradient(-90deg, #FFF, #FFF);

  body {
  margin: 0;
}

.video-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem 1rem;
  padding: 1.5rem 0;
  margin: 0 1.5rem;
  border-top: 4px solid #CCC;
}

.video-section:first-child {
  border-top: none;
}

.video-container {
  display: flex;
  flex-direction: column;
  border: 2px solid #606060;
  border-radius: .3em;
  padding: 4px;
}

.video-close {
  border: none;
  text-align: right;
  margin: 0 .3rem;
  background: none;
  padding: 0;
  font-size: 1.2rem;
  color: #555;
  cursor: pointer;
}

.thumbnail {
  position: relative;
  display: flex;
  flex-direction: column;
}

.thumbnail::before {
  content: attr(data-duration);
  position: absolute;
  background-color: yellow;
  color: #111;
  font-weight: 600;
  right: 10px;
  bottom: 10px;
  padding: .1em .3em;
  border-radius: .3em;
  font-size: .9rem;
}

.thumbnail-title {
  font-size: 18px;
  text-align: center;
  color: #606060;
  margin: 0 auto .3rem;
  width: 100%;
  /* background-color: #F00; */
}

.thumbnail-image {
  width: 98%;
  height: 100%;
  min-width: 150px;
  min-height: 50px;
  background-color: #AAA;
  border-radius: .3em;
  margin: auto;
}

.video-bottom-section {
  display: flex;
  align-items: flex-start;
  margin-top: .3rem;
}

.quote-details {
  display: flex;
  flex-direction: column;
  span.quote-span-today {
    color: #111;
    font-size: .98rem;
    font-weight: 600;
    text-align: center;
    padding: .3rem 0;
    /* background-color: #999; */

  }
  label.quote-label-today {
    color: #111;
    font-size: .74rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: .3rem;
    /* background-color: #999; */
  }
}

.video-details {
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 0.6px solid #606060;
  border-radius: .3rem;
  margin: .1rem;
}

.video-title {
  font-size: 0.9rem;
  font-weight: 700;
  margin: .2rem .1rem .3rem;
  text-decoration: none;
  text-align: center;
  color: black;
}

.video-channel-name:hover {
  color: #111;
}

.video-channel-name,
.video-metadata {
  display: flex;
  flex-direction: row;
  color: #555;
}

.video-metadata-column {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  color: #555;
  width: 50%;
  padding: .1rem;
  height: 5rem;
  /* background-color: #F5F5; */

  label {
    text-align: center;
    font-size: .7rem;
    padding: 2px;
    /* background-color: #F99; */

  }

  span {
    text-align: center;
    font-size: .7rem;
    width: 100%;
    padding: 2px;
  }

}

.video-section-title {
  grid-column: 1 / -1;
  margin: -.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .5rem;
}

.video-section-title-close {
  border: none;
  background: none;
  padding: 0;
  font-size: 2rem;
  color: #555;
  cursor: pointer;
}

.videos {
  background-color: #F9F9F9;
}

  .categories {
  padding: 1rem 2rem;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
}

.category-section {
  display: flex;
  overflow: hidden;
}

.category {
  margin-right: 1rem;
  word-wrap: none;
  white-space: nowrap;
  border: 1px solid #CCC;
  border-radius: 900px;
  background-color: #E7E7E7;
  padding: .5rem 1rem;
  font-size: inherit;
  cursor: pointer;
  transition: background-color 150ms;
}

.category:hover {
  background-color: #DDD;
}

.category.active {
  background-color: #606060;
  color: white;
  border-color: #EEE;
}

.category:last-child {
  margin-right: 0;
}
`;


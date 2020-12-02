import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '~/assets/logo.png';
import apps from '~/assets/apps.svg'
import bell from '~/assets/bell.svg'
import magnify from '~/assets/magnify.svg'
import video_plus from '~/assets/video-plus.svg'
import { Container } from './styles';
export default function Header() {
  return (
    <Container>
      <div className="header">
        <a href="#">
          <h1>Cyclops Dental</h1>
        </a>
        <form class="search-bar">
          <input class="search-input" type="search" placeholder="Search" aria-label="Search" />
          <button type="submit" class="search-btn">
            <img src={magnify} />
          </button>
        </form>

        <div class="menu-icons">
          <a href="#">
            <img src={video_plus} alt="Upload Video" />
          </a>
          <a href="#">
            <img src={apps} alt="Apps" />
          </a>
          <a href="#">
            <img src={bell} alt="Notifications" />
          </a>
          <a href="#">
            <img class="menu-channel-icon" src="http:///unsplash.it/36/36?gravity=center" alt="Your Channel" />
          </a>
        </div>
      </div>
    </Container>
  );
}

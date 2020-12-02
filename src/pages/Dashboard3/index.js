import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { Container } from './styles';
// import {data} from '../../items/item'
import cremerData from '../../items/ItemCremer.json'
import speedData from '../../items/ItemSpeed.json'
// var cremerData = require('../../items/ItemCremer.json')


export default function Dashboard() {

  const [ cremer, setCremer] = useState(cremerData);
  const [ speed, setSpeed] = useState(speedData);
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  console.log(cremer[0][4].img)

  return (
    <Container>
      <div class="categories">
        <section class="category-section">
          <button class="category active">Luvas de Procedimento</button>
          <button class="category">Sugador</button>
          <button class="category">Resina Composta</button>
          <button class="category">Bráquetes</button>
          <button class="category">Periféricos e Peças de mão</button>
        </section>
        <div className="category-aside"><h1>Cyclops Dental</h1></div>
      </div>

      <div class="videos">
        <section class="video-section">
        <h2 class="video-section-title">
            Dental Cremer
            <button class="video-section-title-close">&times;</button>
          </h2>
          {
            cremer.map((i) =>
              <article class="video-container">
                {/* <button class="video-close">&times;</button> */}
                <a href={i[3].href} class="thumbnail" data-duration={i[2].price}>
                  <h3 class="thumbnail-title">{i[0].title}</h3>
                  <img class="thumbnail-image" src={i[4] ? i[4].img : 'http://unsplash.it/250/150?gravity=center'} alt="Imagem do produto"/>
                </a>

                <div class="video-bottom-section">
                  <div class="video-details">
                    <div className="quote-details">
                      <span className="quote-span-today">{i[2].price}</span>
                      <label className="quote-label-today">Atualizada hoje<br /> às 10:33</label>
                    </div>

                    <label className="quote-description">{i[1].details}</label>
                    {/* <div className="video-metadata">
                      <div class="video-metadata-column">
                      </div>
                      <div class="video-metadata-column">
                      </div>
                    </div> */}
                  </div>
                </div>
              </article>
            )
          }
        </section>

        <section class="video-section">
        <h2 class="video-section-title">
            Dental Speed
            <button class="video-section-title-close">&times;</button>
          </h2>
          {
            speed.map((i) =>
              <article class="video-container">
                {/* <button class="video-close">&times;</button> */}
                <a href={i[3].href} class="thumbnail" data-duration={speed[0][2].price}>
                  <h3 class="thumbnail-title">{i[0].title}</h3>
                  <img class="thumbnail-image" src={i[4] ? i[4].img : 'http://unsplash.it/250/150?gravity=center'} alt="Imagem do produto" />
                </a>

                <div class="video-bottom-section">
                  <div class="video-details">
                    <div className="quote-details">
                      <span className="quote-span-today">{speed[0][2].price}</span>
                      <label className="quote-label-today">Atualizada hoje<br /> às 10:33</label>
                    </div>

          <label className="quote-description">{i[1].details}</label>
                    {/* <div className="video-metadata">
                      <div class="video-metadata-column">
                      </div>
                      <div class="video-metadata-column">
                      </div>
                    </div> */}
                  </div>
                </div>
              </article>
            )
          }
        </section>




      </div>
    </Container >
  );
}

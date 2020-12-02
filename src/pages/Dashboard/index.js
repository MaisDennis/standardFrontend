import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import {data} from '~/items/item.js'

import { Container } from './styles';

export default function Dashboard() {

  const [ items, setItems] = useState(data);
console.log(items[0][4])


// useEffect(() => {

// }, [items])

api.get('students');

  const demos = [
    1, 2, 3, 4
  ]

  return (
    <Container>
      <div class="categories">
        <section class="category-section">
          <button class="category active">Principal</button>
          <button class="category">Descartáveis</button>
          <button class="category">Ortodontia</button>
          <button class="category">Endodontia</button>
          <button class="category">Periféricos e Peças de mão</button>
        </section>
      </div>

      <div class="videos">
        <section class="video-section">
          {
            items.map((i) =>
              <article class="video-container">
                <button class="video-close">&times;</button>
                <a href="#" class="thumbnail" data-duration="R$129,99">

                  <h3 class="thumbnail-title">{i[0].title}</h3>
                  <img class="thumbnail-image" src={i[4].img} />
                </a>

                <div class="video-bottom-section">
                  <div class="video-details">
                    <a href="#" class="video-title">Dental Cremer</a>
                    <div className="quote-details">
                      <span className="quote-span-today">R$129,99</span>
                      <label className="quote-label-today">Atualizada hoje<br /> às 10:33</label>
                    </div>
                    <div className="video-metadata">
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <label>29/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>28/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>27/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>26/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>25/11/20</label>
                        </div>
                      </div>
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="video-details">
                    <a href="#" class="video-title">Dental Speed</a>

                    <div className="quote-details">
                      <span className="quote-span-today">R$129,99</span>
                      <label className="quote-label-today">Atualizada hoje<br /> às 10:33</label>

                    </div>
                    <div className="video-metadata">
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <label>29/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>28/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>27/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>26/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>25/11/20</label>
                        </div>
                      </div>
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )

          }
          <article class="video-container">
                <button class="video-close">&times;</button>
                <a href="#" class="thumbnail" data-duration="R$129,99">

                  <h3 class="thumbnail-title">{items[0][0].title}</h3>
                  <img class="thumbnail-image" src={items[0][4].img} />
                </a>

                <div class="video-bottom-section">
                  <div class="video-details">
                    <a href="#" class="video-title">Dental Cremer</a>
                    <div className="quote-details">
                      <span className="quote-span-today">{items[0][2].price}</span>
                      <label className="quote-label-today">Atualizada hoje<br /> às 10:33</label>
                    </div>
                    <div className="video-metadata">
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <label>29/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>28/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>27/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>26/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>25/11/20</label>
                        </div>
                      </div>
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="video-details">
                    <a href="#" class="video-title">Dental Speed</a>

                    <div className="quote-details">
                      <span className="quote-span-today">R$129,99</span>
                      <label className="quote-label-today">Atualizada hoje<br /> às 10:33</label>

                    </div>
                    <div className="video-metadata">
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <label>29/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>28/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>27/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>26/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>25/11/20</label>
                        </div>
                      </div>
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
        </section>

        <section class="video-section">
          <h2 class="video-section-title">
            Special Section
            <button class="video-section-title-close">&times;</button>
          </h2>
          {
            demos.map((d) =>
              <article class="video-container">
                <button class="video-close">&times;</button>
                <a href="#" class="thumbnail" data-duration="R$129,99">

                  <h3 class="thumbnail-title">Luva de Procedimento - Supermax</h3>
                  <img class="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                </a>

                <div class="video-bottom-section">
                  <div class="video-details">
                    <a href="#" class="video-title">Dental Cremer</a>
                    <div className="quote-details">
                      <span className="quote-span-today">R$129,99</span>
                      <label className="quote-label-today">Atualizada hoje<br /> às 10:33</label>
                    </div>
                    <div className="video-metadata">
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <label>29/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>28/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>27/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>26/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>25/11/20</label>
                        </div>
                      </div>
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="video-details">
                    <a href="#" class="video-title">Dental Speed</a>

                    <div className="quote-details">
                      <span className="quote-span-today">R$129,99</span>
                      <label className="quote-label-today">Atualizada hoje<br /> às 10:33</label>

                    </div>
                    <div className="video-metadata">
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <label>29/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>28/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>27/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>26/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>25/11/20</label>
                        </div>
                      </div>
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          }
        </section>

        <section class="video-section">
          {
            demos.map((d) =>
              <article class="video-container">
                <button class="video-close">&times;</button>
                <a href="#" class="thumbnail" data-duration="R$129,99">

                  <h3 class="thumbnail-title">Luva de Procedimento - Supermax</h3>
                  <img class="thumbnail-image" src="http://unsplash.it/250/150?gravity=center" />
                </a>

                <div class="video-bottom-section">
                  <div class="video-details">
                    <a href="#" class="video-title">Dental Cremer</a>
                    <div className="quote-details">
                      <span className="quote-span-today">R$129,99</span>
                      <label className="quote-label-today">Atualizada hoje<br /> às 10:33</label>
                    </div>
                    <div className="video-metadata">
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <label>29/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>28/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>27/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>26/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>25/11/20</label>
                        </div>
                      </div>
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="video-details">
                    <a href="#" class="video-title">Dental Speed</a>

                    <div className="quote-details">
                      <span className="quote-span-today">R$129,99</span>
                      <label className="quote-label-today">Atualizada hoje<br /> às 10:33</label>

                    </div>
                    <div className="video-metadata">
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <label>29/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>28/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>27/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>26/11/20</label>
                        </div>
                        <div className="quote-details">
                          <label>25/11/20</label>
                        </div>
                      </div>
                      <div class="video-metadata-column">

                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                        <div className="quote-details">
                          <span>R$129,99</span>
                        </div>
                      </div>
                    </div>
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

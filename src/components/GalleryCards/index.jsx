import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/GalleryCards.scss'
import '../../assets/bannerBackground.png'
import { datas } from '../../datas/datas'

function GalleryCards() {
  return (
    <><section className="banner">
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
    <ul id="Gallery">
        {datas.map((data) => (
          <Link key={`${data.id}`} to={`../Card/${data.id}`}>
            <li className='CardPreview' style={{ backgroundImage: `url(${data.cover})` }}> 
              <div className="shadowPreviewContainer">
                <h2 className='PreviewCardTitle'>{data.title}</h2>
              </div>
            </li>
          </Link>
        ))}
      </ul></> 
  );
}

export default GalleryCards;
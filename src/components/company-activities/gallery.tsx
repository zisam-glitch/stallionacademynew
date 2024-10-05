"use client"
import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Masonry from 'react-masonry-css';

const MasonryGallery = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const images = [
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034029/vcdd3xwcr18mdq3aqvdq.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034029/vmcjyfwsjpsuxdxgy7hz.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034030/z23lybq12x8issc6b3yy.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034030/wywmy9x7toxffbn6qamq.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034029/mdkjte9ohshqfdxjufbl.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034030/d2lfvxlypraapyvhdezw.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034029/xbns0qcjk8osf967heqv.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034029/uugjcdncflci56d93eic.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034029/clsqkn2w8u18um1lzqjp.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1726956751/rs_w_1160_h_870_2_s9btcd.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034027/iyacvqrvldg1pgjwbwwa.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034027/twzdomnlua4n7gm05p8p.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034027/zipl6bdotf01wd734gv2.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034027/zwzctnehrnamvczckp2o.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034027/omr1hnabhtb21mxi4wnp.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034027/gmbfvwarzxl7zxwqeavu.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034028/z24igxynabmgmqedjonm.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034028/z24igxynabmgmqedjonm.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034028/h58idhwuuauvqugzra2r.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034028/bpixigapcq7amxrakdad.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034028/qgp51pwghz3nju4btuey.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034028/sbayr7q7gxha7weiofm2.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034029/nabzxf7d3xkoqwuqpkta.webp",
    "https://res.cloudinary.com/db1i46uiv/image/upload/v1727034028/lxmhcikrbqbulgsdimuu.webp",
  ];

  const openLightboxOnSlide = (slideIndex: number) => { // Specify the type here
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: slideIndex,
    });
  };

  const breakpointColumnsObj = {
    default: 3, // 3 columns for large screens
    1100: 2, // 2 columns for medium screens
    700: 1, // 1 column for small screens
  };

  return (
    <section className='container mx-auto px-8 pb-[100px]'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} onClick={() => openLightboxOnSlide(index + 1)}>
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto rounded-2xl cursor-pointer"
            />
          </div>
        ))}
      </Masonry>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images}
        slide={lightboxController.slide}
      />
    </section>
  );
};

export default MasonryGallery;

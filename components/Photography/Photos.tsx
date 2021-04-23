import React from 'react'
import styled from "styled-components";

interface Props {
  
}

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
`;

const PhotoCard = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;

  img {
    min-width: 100%;
    min-height: 100%;
    max-width: 150%;
    top: 0;
    left: 0;
  }

  &:hover button {
    opacity: 1;
  }
`;

const PhotoButton = styled("button")`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 13px;
  border-radius: 0;
  background-color: #000;
  color: #fff;
  border: 0;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.35s ease;
`;

const Bestseller = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  color: #000;
  border: 0;
  width: 30%;
  text-align: center;
`;

const Photos = ({photos, addToCart}) => {
  return (
    <>
      <PhotoGrid>
        {photos.map((photo, index) => (
          <div key={index}>
            <PhotoCard>
              <img src={photo.image.src} alt={photo.image.alt} />
              {photo.bestseller && <Bestseller>Best Seller</Bestseller>}
              <PhotoButton onClick={() => addToCart(photo)}>
                ADD TO CART
              </PhotoButton>
            </PhotoCard>
            <h5 style={{ color: "#656565" }}>{photo.category}</h5>
            <h3>{photo.name}</h3>
            <p style={{ color: "#656565" }}>${photo.price}</p>
          </div>
        ))}
      </PhotoGrid>
    </>
  );
}

export default Photos

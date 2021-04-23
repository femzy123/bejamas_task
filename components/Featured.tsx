import React from 'react'
import styled from "styled-components"

const FeaturedContainer = styled.div`
  margin: 58px 18px;
  padding-bottom: 30px;
  border-bottom: 4px solid #e4e4e4;

  @media screen and (min-width: 768px) {
    margin: 58px 0;
    padding-bottom: 65px;
  }
`;

const FeaturedLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled("button")`
  background: #000;
  padding: 13px 39px;
  border: 0;
  color: #fff;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const MobileButton = styled("button")`
  background: #000;
  width: 100%;
  padding: 13px 39px;
  color: #fff;
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const FeaturedImage = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 239px;
  }

  @media screen and (min-width: 768px) {
    img {
      height: 553px;
    }
  }
`;

const FeaturedImageLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  color: #000;
  padding: 20px 50px;
  align-items: center;
  font-weight: bold;
`;

const FeaturedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Recommedation = styled.div`
  margin-top: 30px;
  img:not(:last-child) {
    margin-right: 20px;
  }

  img {
    max-width: 100px;
    max-height: 122px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: 150px;
    text-align: right;
  }
`;


function Featured({product, addToCart}) {
  return (
    <FeaturedContainer>
      <FeaturedLabel>
        <h2>{product.name}</h2>
        <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
      </FeaturedLabel>
      <FeaturedImage>
        <img src={product.image.src} alt={product.image.alt} />
        <FeaturedImageLabel>Photo of the Day</FeaturedImageLabel>
      </FeaturedImage>
      <MobileButton onClick={() => addToCart(product)}>
        ADD TO CART
      </MobileButton>
      <FeaturedInfo>
        <div>
          <h3>About {product.name}</h3>
          <h3 style={{ color: "#656565" }}>{product.category}</h3>
          <p>{product.details.description}</p>
        </div>
        <Recommedation>
          <h3>People also buy</h3>
          <div
            style={{ display: "flex", marginTop: "30px", marginBottom: "30px" }}
          >
            {product.details.recommendations.map((recommend) => (
              <img
                key={recommend.src}
                src={recommend.src}
                alt={recommend.alt}
              />
            ))}
          </div>
          <div>
            <h4
              style={{
                marginBottom: "10px",
              }}
            >
              Details
            </h4>
            <p style={{ color: "#656565" }}>
              Size: {product.details.dimensions.width} x
              {product.details.dimensions.height} pixel
            </p>
            <p style={{ color: "#656565" }}>
              Size: {Math.round(product.details.size / 1024)}mb
            </p>
          </div>
        </Recommedation>
      </FeaturedInfo>
    </FeaturedContainer>
  );
}

export default Featured;

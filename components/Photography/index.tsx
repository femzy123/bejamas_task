import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Categories from "./Categories";
import PriceRange from "./PriceRange";
import Photos from "./Photos";
import Pagination from "@material-ui/lab/Pagination";

interface Props {
  products: Array<any>;
  bestseller: Array<any>;
  addToCart: () => Array<any>;
}

const Container = styled.div`
  margin: 58px 18px;
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin: 58px 0;
    padding-bottom: 65px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    min-width: 200px;
    margin-right: 50px;
  }
`;

const Paginate = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Photography: React.FC<Props> = ({ products, bestseller, addToCart}) => {
  const [photos, setPhotos] = useState([...bestseller, ...products]);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage, setPhotosPerPage] = useState(6);

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  var numbers = [];
  for (let i = 1; i <= Math.ceil(photos.length / photosPerPage); i++) {
    numbers.push(i);
  }

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const sort = (value) => {
    const newPhotos = products.sort((a, b) =>
      a[value] > b[value] ? 1 : b[value] > a[value] ? -1 : 0
    );
    setPhotos([...bestseller, ...newPhotos])
  }

  const sortDesc = (value) => {
    const newPhotos = products.sort((a, b) =>
      a[value] < b[value] ? 1 : b[value] < a[value] ? -1 : 0
    );
    setPhotos([...bestseller, ...newPhotos]);
  };

  const priceFilter = (min, max = null) => {
    const newPhotos =
      max !== null
        ? products.filter(
            (product) => product.price > min && product.price <= max
          )
        : products.filter(
            (product) => product.price > min
          );
    setPhotos([...bestseller, ...newPhotos]);
  }

  const categoryFilter = (fns) => {
    const newPhotos = fns.reduce((products, fn) => products.filter(fn), products)
    setPhotos([...bestseller, ...newPhotos]);
  };

  const reset = () => {
    setPhotos([...bestseller, ...products]);
  }

  return (
    <Container>
      <Header sort={sort} sortDesc={sortDesc} />
      <Content>
        <Filter>
          <Categories photos={photos} categoryFilter={categoryFilter} />
          <PriceRange priceFilter={priceFilter} reset={reset} />
        </Filter>
        <div>
          <Photos photos={currentPhotos} addToCart={addToCart} />
          <Paginate>
            <Pagination count={numbers.length} onChange={handleChange} />
          </Paginate>
        </div>
      </Content>
    </Container>
  );
};

export default Photography;

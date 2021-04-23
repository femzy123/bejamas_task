import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'
import Featured from '../components/Featured'
import Photography from "../components/Photography";
import {server} from '../config'

export default function Home({products}) {
  const [featuredProduct, setFeaturedProduct] = useState(null)
  const [photoProducts, setPhotoProducts] = useState(null)
  const [bestseller, setBestseller] = useState(products.filter(product => product.bestseller))
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if(products) {
      setFeaturedProduct(products.filter(product => product.featured))
    }
  }, [])

  useEffect(() => {
    if (products) {
      var filterProducts = (products.filter((product) => !product.featured && !product.bestseller));
      setPhotoProducts(filterProducts)
    }
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const emptyCart = () => setCart([]);

  return (
    <div>
      <Head>
        <title>Bejamas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Navigation cart={cart} emptyCart={emptyCart} />
        {featuredProduct && (
          <Featured
            product={featuredProduct[0]}
            cart={cart}
            addToCart={addToCart}
          />
        )}
        {photoProducts && bestseller && (
          <Photography
            products={photoProducts}
            bestseller={bestseller}
            addToCart={addToCart}
          />
        )}
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/products`)
  const products = await res.json()

  return {
    props: {
      products,
    }
  }
}
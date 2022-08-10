import React, { Component } from 'react';
import data from '../data.json';
import Product from './Product';

export default class Main extends Component {
  render() {
    return (
      <div>
      <h1>some products can be found here</h1>
      {/*put an image here*/}
      {/*product component goes here */}
      {data.products.map(product => {
        return (
        <Product title={product.title} description={product.description} key={product.id} img={product.images[0
      ]}/>
        )
      } )} {/*function can be named anything */}
      </div>
    )
  }
}

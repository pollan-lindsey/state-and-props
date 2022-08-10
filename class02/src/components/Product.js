import React, { Component } from 'react'

import {Button, Card} from 'react-bootstrap'

export default class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      cart: 0,
    }
  }

  handleClicks(){
    //when user clicks
    //add 1
    this.setState((prev) => ({
      cart: prev.cart + 1
    })) //updates state automatically
    console.log(this.state.cart); //console is synchronous 
  }

  render() {
    return (
      <>
      {/* i will pass my data in this component so i need to use this.props here */}
     {/* { <h1>{this.props.title}</h1>
      <h3>{this.state.cart} added to cart</h3>
      <img onClick={() => this.handleClicks()} src={this.props.img} alt={this.props.title}/>
      <p>{this.props.description}</p>} */}
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.img} alt={this.props.title} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
        <Button onClick={() => this.handleClicks()} variant="primary">{this.state.cart} added to cart</Button>
      </Card.Body>
      </Card>
      </>

    )
  }
}

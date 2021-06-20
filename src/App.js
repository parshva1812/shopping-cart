
import './App.css';
import data from './data.json';
import React from 'react';
import Products from './components/Products';

class App extends React.Component {
  constructor() {
    super();
   
    this.state = {
      products: data.product,
      size: "",
      sort: ""
    }
  }
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="#">Shopping cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
            <Products products={this.state.products}></Products>

            </div>
            <div className="sidebar">
                  cart
            </div>

          </div>

        </main>
        <footer>
          All rights reserved.

        </footer>

      </div>
    );
  }
}

export default App;


import './App.css';
import data from './data.json';
import React from 'react'

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
              product

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

import React, { Component } from 'react';
import Tables from './Tables';
import Header from './Header';
import './Main.css';
class Main extends Component {

    render() {
      return (
        <div className="Main">
          <Header />
          <Tables />
        </div>
      );
    }
  }
  
  export default Main;
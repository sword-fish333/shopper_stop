import React from 'react';

import Grocery from './components/Grocery';
import ShoppingBag from './components/ShoppingBag';
import Stats from "./components/Stats";
import PocketMoney from "./components/PocketMoney";

function App() {

  return (
    <div className="container">
        <div className="jumbotron bg-dark text-white text-center col-md-12">
            <h1>Shopper Stop</h1>
        </div>
        <div className="row">
            <PocketMoney/>
            <Grocery/>
      <ShoppingBag/>
      <Stats/>
        </div>
    </div>
  );
}

export default App;

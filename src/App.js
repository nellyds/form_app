import React, { useState, useMemo }from 'react';
import './styles/App.css';

import OrderPage from './pages/OrderPage';
import CompletePage from './pages/CompletePage';
import { Route} from 'react-router-dom'
import { AppContext } from "./AppContext"
function App() {
  const [order, setOrder] = useState(null)

const value = useMemo(() =>({order, setOrder}), [order, setOrder])

  return (
    <div className="App">
      <AppContext.Provider value = {value}>
      <Route exact path="/" component = {OrderPage} />
      <Route exact path="/confirm" component = {CompletePage} />
      </AppContext.Provider>
    </div>
  );
}

export default App;

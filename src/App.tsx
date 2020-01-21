import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import BookList from './components/BookList';


const App: React.FC = () => {
  console.log(store.getState())
  return (
    <Provider  store= {store} >
      <div className="App">
        <BookList/>
      </div>
    </Provider>
  );
}

export default App;

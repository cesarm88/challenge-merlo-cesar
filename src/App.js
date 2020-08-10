import React from 'react';
import './assets/App.css';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './parts/Layout';
import Routes from './routes/Routes';

//redux store
const store = generateStore();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </Provider>
    </>
  );
}

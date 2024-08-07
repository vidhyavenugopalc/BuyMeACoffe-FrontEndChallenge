import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, 
  Routes ,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import Features from './components/pages/Features'
import Explore from './components/pages/Explore'
import FAQ from './components/pages/Faq'
// import AboutUs from './components/pages/AboutUs'
// import ContactUs from './components/pages/ContactUs'

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes >
            <Route path={'/Home'} Component={Home}></Route>
            <Route path={'/Features'} Component={Features}></Route>
            <Route path={'/Explore'} Component={Explore}></Route>
            <Route path={'/FAQ'} Component={FAQ}></Route>
            <Route path={'/'} Component={Home}></Route>
          </Routes >
        </Layout>
      </Router>
    </div>
  );
}

export default App;

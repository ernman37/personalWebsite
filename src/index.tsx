import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import reportWebVitals from './reportWebVitals';
import { Grommet, grommet, Heading } from "grommet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AppHeader} from './components/AppHeader';
import {AppFooter} from './components/AppFooter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

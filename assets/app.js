/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import React from 'react';
import './css/app.css';
import './js/custom.js';
import App from './components/About';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);


root.render(
    <BrowserRouter>
      <Header />
        <App />
      <Footer />
    </BrowserRouter>
);

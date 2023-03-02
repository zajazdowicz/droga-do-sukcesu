/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/app.css';
import Home from './components/Home';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);


root.render(
  <StrictMode>
    <Home name="Adrianie"/>
  </StrictMode>,
);
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonInlineCSS from './ButtonInlineCSS';
import ButtonUsingCSSModule from './ButtonUsingCSSModule';
import ButtonUsingStyledComponents from './ButtonUsingStyledComponents';
import Wrapper from './Wrapper';

const App = () => (
  <>
    <h1>Mina komponenter</h1>
    <h2>Button using inline CSS</h2>
    <ButtonInlineCSS />
    <h2>Button using CSS module</h2>
    <ButtonUsingCSSModule variant="primary" />
    <ButtonUsingCSSModule variant="secondary"/>
    <h2>Button using Styled Components</h2>
    <ButtonUsingStyledComponents />
    <ButtonUsingStyledComponents variant="secondary" />
    <h2>Wrapper</h2>
    <Wrapper><h1>Hej</h1><p>Hej hej</p></Wrapper>
  </>
)

export default App;

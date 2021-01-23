import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NameForm from "./componets/NameForm";
import Block from "./componets/component1";
import Check from "./componets/component.3State";
import Field from "./componets/component4Task";


ReactDOM.render(
    <React.StrictMode>

        <br/>

        <NameForm/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <Block/>
        <hr/>
       <Field/>
        <Check/>

    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demos from './Demos';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Demos />, document.getElementById('root'));
registerServiceWorker();

// import React from 'react';

const h1ReactElement  = React.createElement('h1', null, 'Hello, React!');
const h2ReactElement  = React.createElement('h2', null, 'The best framework ever!');

const App = React.createElement('div', {className: 'app-container'}, h1ReactElement, h2ReactElement);
export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import AddCategory from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddCategory />, div);
  ReactDOM.unmountComponentAtNode(div);
});

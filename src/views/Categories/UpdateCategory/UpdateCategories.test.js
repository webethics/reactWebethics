import React from 'react';
import ReactDOM from 'react-dom';
import UpdateCategory from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdateCategory />, div);
  ReactDOM.unmountComponentAtNode(div);
});

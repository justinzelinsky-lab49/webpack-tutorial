import React from 'react';

import Name from 'components/Name';

import './App.scss';

const App = () => {
  const name = 'Justin';
  return (
    <div styleName="container">
      <span styleName="greeting">
        Hello there, <Name name={name} />!
      </span>
    </div>
  );
};

export default App;

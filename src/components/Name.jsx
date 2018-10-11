import PropTypes from 'prop-types';
import React from 'react';

import './Name.scss';

const Name = ({ name }) => (
  <span styleName="name">{name}</span>
);

Name.propTypes = {
  name: PropTypes.string
};

export default Name;

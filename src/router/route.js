/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';

function RouteMaker({ ...rest }) {
  return <Route {...rest} />;
}

export default RouteMaker;

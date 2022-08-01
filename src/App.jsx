
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AbsolutePosition from './Center-Alignment/Absolute-Position/AbsolutePosition.jsx';
import Flex from './Center-Alignment/Flex/Flex.jsx';
import Grid from './Center-Alignment/Grid/Grid.jsx';
import Position from './Position/Position.jsx';

const App = () => {
  return (

    <Switch>
      <Route exact path='/' component={AbsolutePosition}/>
      <Route exact path='/flex' component={Flex}/>
      <Route exact path='/grid' component={Grid}/>
      <Route exact path='/position' component={Position}/>
    </Switch>
  )
}

export default App;

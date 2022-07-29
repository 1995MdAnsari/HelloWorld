
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AbsolutePosition from './Center-Alignment/Absolute-Position/AbsolutePosition.jsx';
import Flex from './Center-Alignment/Flex/Flex.jsx';
import Grid from './Center-Alignment/Grid/Grid.jsx'
const App = () => {
  return (

    <Switch>
      <Route exact path='/' component={AbsolutePosition}/>
      <Route exact path='/flex' component={Flex}/>
      <Route exact path='/grid' component={Grid}/>
    </Switch>
  )
}

export default App;

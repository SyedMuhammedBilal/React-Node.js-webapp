import React from 'react';
import { BrowserRouter as Router,
Switch, 
Route, } from 'react-router-dom'

import './App.css';
import Greet from './components/greet.component'
import Welcome from './components/welcome.component'
import Message from './components/message.component'
import Counter from './components/counter.component'
import FuncClick from './components/funcClick.component'
import ClassClick from './components/ClassClick.component'
import EventBind from './components/EventBind.component'
import Parent from './components/parent.component'
import UserGreeting from './components/usergreeting.component'
import NameList from './components/NameList.component'
import user from './user'

function App() {
  return (
    
      <div className="App">
        <NameList />
        {/*<Router>
          <Switch>
            <Route path='/user' exact component={user} />
          </Switch>
        </Router>*/}
        
    {/*<Link to={'/user'}>user</Link>*/}
    {/*<UserGreeting />*/}
    {/*<Parent />*/}
    {/*<EventBind />*/}
    {/*<FuncClick />
    <ClassClick />*/}
    {/*<Counter />*/}
    {/* props practice */}
      {/*<Greet name='Bilal' skills='programmer' >
        <p>this is childern props</p>
      </Greet>
      <Greet name='Mani' skills='programmer' />
      <Greet name='Wasiq' skills='buissness' />
      <Welcome name='Bilal' skills='programmer' />
      <Message />*/}
      </div>
   
  );
}


export default App;

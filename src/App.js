import React from 'react';
import './App.css';
import ItemView from './views/ItemView';
import MainView from './views/MainView';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


function App() {
  
  return (
    <div className="app">
       
         <Router>
         <Route render={({location}) => (
          <TransitionGroup>
             <CSSTransition key={location.key} timeout={550} classNames="fade">
               <Switch location={location}>
                  <Route path='/' exact component={MainView}/>
                  <Route path='/rates/:id' exact component={ItemView}/>
              </Switch>  
             </CSSTransition> 
          </TransitionGroup>

         )} />

       </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Sett from './components/Sett/Sett';
import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />  

        <Navbar sidebar={props.state.sidebar}/>

        <div className='app-wrapper-content'>
      
          <Route path='/dialogs'  render={ () => <DialogsContainer /> }/>

          <Route path='/profile'  render={ () => <Profile /> }/>

          <Route path='/users'  render={ () => <UsersContainer /> }/>

          <Route path='/news'     render={ () => <News /> }/>

          <Route path='/music'    render={ () => <Music /> }/>

          <Route path='/set'      render={ () => <Sett /> }/>

        </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;
 
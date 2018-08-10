import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Toolbar from './Components/Toolbar/Toolbar'
import Sidebar from './Components/SideBar/Sidebar';
import Backdrop from './Components/Backdrop/Backdrop';
import Home from  './Components/RoutesPages/HomePage/Home';
import Projects from './Components/RoutesPages/Projects/Projects'
import Contact from './Components/RoutesPages/ContactUs/Contact'
import Routes from './routes';

class App extends Component {
  state ={
    sideBarSlideOpen: false
  }
  toolBarClickHandler = () =>{
    this.setState((prevState) => {
      return {
        sideBarSlideOpen: !prevState.sideBarSlideOpen
      };
    });
  };

  backDropClickHandler =() => {
    this.setState({
      sideBarSlideOpen:false
    })
  }
  render() {
    let backDrop;
    if(this.state.sideBarSlideOpen) {
      backDrop=<Backdrop click={this.backDropClickHandler}/>
    }
    return (
      <BrowserRouter>
      <div className="App" style={{marginTop:'10vh'}}>
   <Toolbar sideBarClickHandler={this.toolBarClickHandler}/>
   <Sidebar show={this.state.sideBarSlideOpen}/>
   {backDrop}
   <Switch>
   <Route path="/" component={Home} exact />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />   
            </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

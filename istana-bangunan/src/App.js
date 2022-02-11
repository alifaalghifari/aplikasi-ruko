import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Admin from './pages/Admin/Admin';
import Login from './pages/Auth/Login'
import Home from './pages/Home';
import React from 'react'
import { connect } from 'react-redux'
import { userKeepLogin } from './redux/actions/user'
class App extends React.Component {

  componentDidMount(){
    const user = localStorage.getItem("user")

    if(user){
      const userData = JSON.parse(user)
      this.props.userKeepLogin(userData)
    }
  }

  render(){ 
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Admin} path="/admin" />
          <Route component={Home} path="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = () => {
  return {
  }
}

const mapStateToDispatch = {
  userKeepLogin
}

export default connect(mapStateToProps,mapStateToDispatch)(App);
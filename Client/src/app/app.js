import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from 'react-redux'

import store , {persistor} from "../../store"
import d_action from '../../Actions'

import "./style.css"
//testing components first here
import Movie from "../components/Movie";
import Header from "../components/Header";
import Searchbar from '../components/Search';

import Friends from '../components/pages/friends';
import Favorites from '../components/pages/favorites';
import SavedSearches from '../components/pages/saved_searches';
import History from '../components/pages/history';
import WatchList from '../components/pages/watch_List'
import Likes from '../components/pages/likes'
import Home from '../components/pages/home';

import SignIn from '../components/pages/SignIn'
import SignUp from '../components/pages/SignUp'

class App extends React.Component {
  constructor(props){
  super(props);

  }


    render() {

      store.dispatch(d_action.testfunc())
          return (
            <div id="testapp">
<Provider store={store}>



<SignUp/>















</Provider>

            </div>
                );
        }
};






export default App;

/*

<Router>
<Header/>

<div className="app_container">
<Route path="/" exact component={Home} />
<Route path="/watch_list" component={WatchList} />
<Route path="/friends" component={Friends} />
<Route path="/favorites" component={Favorites} />
<Route path="/history" component={History} />
<Route path="/liked" component={Likes} />
<Route path="/saved_searches" component={SavedSearches} />
</div>
</Router>



*/ 
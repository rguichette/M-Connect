import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux'

import store , {persistor} from "../../store"
import d_action from '../../Actions'

import "./style.css"
//testing components first here
import Movie from "../components/Movie";
import Header from "../components/Header";
import Searchbar from '../components/Search';

class App extends React.Component {
    render() {
      store.dispatch(d_action.testfunc())
          return (
            <div>
<Provider store={store}>
             <div>
               
                
                <Header/>
                <Movie/>
</div>
</Provider>

            </div>
                );
        }
};

export default App;

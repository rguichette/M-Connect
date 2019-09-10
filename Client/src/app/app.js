import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux'

import store , {persistor} from "../../store"
import d_action from '../../Actions'

class App extends React.Component {
    render() {
      store.dispatch(d_action.testfunc())
          return (
            <div>
<Provider store={store}>
             <div>

                hello
</div>
</Provider>

            </div>
                );
        }
};

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchBooks from "./pages/SearchBooks"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
         
            
          </ul>
        </nav>

      
        <Switch>
         
         
          <Route path="/">
            <SearchBooks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
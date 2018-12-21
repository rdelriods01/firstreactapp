import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Material theme
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Components
import Navbar from './components/layout/Navbar.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import ProjectDetails from './components/projects/ProjectDetails.jsx'
import CreateProject from './components/projects/CreateProject'
import SignIn from './components/auth/SignIn.jsx'
import SignUp from './components/auth/SignUp.jsx'

// Import CSS
import variables from "./index.scss";
import './css/dashboard.scss'
import './css/layout.scss'
import './css/projects.scss'
import './css/auth.scss'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/project/:id" component={ProjectDetails} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/create" component={CreateProject} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}




















const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      // main: "#f44336"
      main: variables.primary
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: "#0066ff",
      main: variables.secondary
      // dark: will be calculated from palette.secondary.main,
      // contrastText: "#ffcc00"
    }
    // error: will use the default color
  },
  typography: {
    useNextVariants: true
  }
});

export default App;

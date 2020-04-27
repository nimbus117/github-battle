import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';
import Nav from './components/Nav';
import { ThemeProvider } from './contexts/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Results from './components/Results';

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) =>
        theme === 'light' ? { theme: 'dark' } : { theme: 'light' },
      );
    },
  };

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/battle" component={Battle} />
                <Route path="/battle/results" component={Results} />
                <Route render={() => <h1>404</h1>} />
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));

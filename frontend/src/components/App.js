import React, { Component } from 'react';
import './App.css';
import Layout from './Layout'
import Posts from './Posts'
import Post from './Post'
import Error from './Error'
import { Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Posts} />
            <Route path="/:category" exact render={() => <Posts />} />
            <Route path="/:category/:id" render={() => <Post />} />
            <Route path="*" render={() => <Error errno="404" />} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
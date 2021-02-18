import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        {/* Warning: <BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`. */}
        {/* 위의 경고 때문에 BrowserRouter ==> Router 변경 */}
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/:id" component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

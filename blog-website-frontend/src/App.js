//import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Article';
import ArticlesList from './pages/ArticlesList';

//Components
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
    <NavBar></NavBar>
      <div className='max-w-screen-md mx-auto pt-20'>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/article/:name' component={Articles} />
          <Route exact path='/article-list' component={ArticlesList} />
       </div>
    </Router>
  );
}

export default App;

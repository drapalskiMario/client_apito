import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import JoinUs from './pages/JoinUs'

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/join-us" component={JoinUs} />
      </Switch>
    </BrowserRouter>
  )
}

export default routes

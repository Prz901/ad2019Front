import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home, Start, Confirmation, EditClient, Page404 } from './pages'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/start' component={Start} />
        <Route exact path='/confirmation' component={Confirmation} />
        <Route exact path='/edit' component={EditClient} />
        <Route exact path='*' component={Page404} />
      </Switch>
    </BrowserRouter>
  )
}

import React from "react"
import {Home, Products} from "./pages"
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import {NavBar, Footer} from "./components"

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect exact from="/" to="/Home" />
        </Route>
        <Route path={"/Home"} exact component={Home} />
        <Route path={"/Our Products"} exact component={Products} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

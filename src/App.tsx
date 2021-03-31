import React from "react"
import {Home} from "./pages"
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import {NavBar} from "./components"

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect exact from="/" to="/Home" />
        </Route>
        <Route path={"/Home"} exact component={Home} />
        {/* <Route path={"/kenanga/AMP"} exact component={AMP} />
        <Route path={"/kenanga/AMP/:AMPId"} component={SingleFundPageV2} />
        <Route path={"/kenanga/:kenangaId"} component={SingleFundPage} /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  )
}

export default App

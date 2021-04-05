import React from "react"
import {AboutUs, ContactUs, Home, Products, FAQ} from "./pages"
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import {NavBar, Footer} from "./components"

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/htm-assingment">
          <Redirect exact from="/htm-assingment" to="/htm-assingment/Home" />
        </Route>
        <Route path={"/htm-assingment/Home"} exact component={Home} />
        <Route path={"/htm-assingment/Our Products"} exact component={Products} />
        <Route path={"/htm-assingment/About Us"} exact component={AboutUs} />
        <Route path={"/htm-assingment/Contact Us"} exact component={ContactUs} />
        <Route path={"/htm-assingment/FAQ"} exact component={FAQ} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

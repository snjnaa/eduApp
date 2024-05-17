import "./App.css"
import Header from "./components/common/heading/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min"
import Home from "./components/home/Home"
import About from "./components/about/About"
import CourseHome from "./components/all courses/CourseHome"
import Price from "./components/price/Price"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"

const App=()=> {

  return ( 
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component = {Home}/>
          <Route path='/about' exact component = {About}/>
          <Route path='/courses' exact component = {CourseHome}/>
          <Route path='/pricing' exact component = {Price}/>
          <Route path='/blog' exact component = {Blog}/>
          <Route path='/contact' exact component = {Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}
export default App
  
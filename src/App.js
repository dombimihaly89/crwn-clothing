import CategoryList from "./components/category-list/category-list.component";
import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom"
import NavigationBar from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return(
    <div>
    <h1>This is the shop</h1>
  </div>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
        <Route index element={<Home/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="sign-in" element={<SignIn/>} />
      </Route>
    </Routes>
    )
}

export default App;

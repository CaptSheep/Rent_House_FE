import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import {useSelector} from "react-redux";
import HomeList from "./pages/home";
function App() {
  return (
      <Routes>
        <Route path={'/user/login'} element={<Login/>}></Route>
        <Route path={'/home'} element={<HomeList/>}></Route>
      </Routes>
  );
}
export default App;

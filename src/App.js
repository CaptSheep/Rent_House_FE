import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import {useSelector} from "react-redux";
import HomeList from "./pages/home";
import Register from "./pages/register";
import CreatePost from "./pages/createHouse";
function App() {
    let user = useSelector((state)=>{
        return state.user.userNow
    })
  return (
      <Routes>
        <Route path={'/user/login'} element={<Login/>}></Route>
        <Route  path={'/user/register'} element={<Register/>}></Route>
          {user && <Route path={'/posts/create'} element={<CreatePost/>}></Route>}
        <Route path={'/home'} element={<HomeList/>}></Route>
      </Routes>
  );
}
export default App;

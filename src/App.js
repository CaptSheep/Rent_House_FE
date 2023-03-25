import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import {useSelector} from "react-redux";
import Register from "./pages/register";
import CreatePost from "./pages/createHouse";
import HomePage from "./pages/home";
import ListHome from "./pages/listHome";
import DetailHome from "./pages/detailHome";
function App() {
    let user = useSelector((state)=>{
        return state.user.userNow
    })
  return (
      <Routes>
        <Route path={'/user/login'} element={<Login/>}></Route>
        <Route  path={'/user/register'} element={<Register/>}></Route>
          <Route path={'/listHome'} element={<ListHome/>}></Route>
              <Route path={'/home'} element={<HomePage/>}> </Route>

              <Route path={'/posts/create'} element={<CreatePost/>}>      </Route>
              <Route path={'/detail/:id'} element={<DetailHome/>}></Route>

           {/*<Route path={'/user/login'} element={<Login/>}></Route>*/}

      </Routes>
  );
}
export default App;

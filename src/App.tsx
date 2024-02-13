import {Routes, Route} from "react-router-dom"
import {useLocation} from "react-router-dom";
import style from './App.module.scss'
import Header from "./sections/header/Header.tsx";
import MainPage from "./sections/main-page/Main-page.tsx";
import Signin from "./components/auth/Signin.tsx";


export default function App() {
    const location = useLocation()
    const pathName:boolean = location.pathname === "/"
    return (
        <div className={style.app}>
            {pathName && <Header/>}

            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/signin"} element={<Signin/>}/>
            </Routes>


        </div>
    )
}




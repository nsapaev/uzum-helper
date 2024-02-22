import {Routes, Route} from "react-router-dom"
import {useLocation} from "react-router-dom";
import style from './App.module.scss'
import Header from "./sections/header/Header.tsx";
import MainPage from "./sections/main-page/Main-page.tsx";
import Signin from "./components/auth/Signin.tsx";
import MainDashboard from "./pages/dashboard/main/Main-dashboard.tsx";
import AbsAnalysis from "./pages/dashboard/abc-analysis/Abs-analysis.tsx";
import CategoryAnalysis from "./pages/dashboard/category-analysis/Category-analysis.tsx";
import ProductAnalysis from "./pages/dashboard/product-analysis/Product-analysis.tsx";
import SellerAnalysis from "./pages/dashboard/seller-analysis/Seller-analysis.tsx";
import StoreAnalysis from "./pages/dashboard/store-analysis/Store-analysis.tsx";
import UsefulTools from "./pages/dashboard/useful-tools/Useful-tools.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";


export default function App() {
    const location = useLocation()
    const pathName:boolean = location.pathname === "/"
    return (
        <div className={style.app}>
            {pathName && <Header/>}

            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/signin"} element={<Signin/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}>
                    <Route path={"main"} element={<MainDashboard/>}/>
                    <Route path={"abs-analysis"} element={<AbsAnalysis/>}/>
                    <Route path={"category-analysis"} element={<CategoryAnalysis/>}/>
                    <Route path={"product-analysis"} element={<ProductAnalysis/>}/>
                    <Route path={"seller-analysis"} element={<SellerAnalysis/>}/>
                    <Route path={"store-analysis"} element={<StoreAnalysis/>}/>
                    <Route path={"useful-tools"} element={<UsefulTools/>}/>
                </Route>
            </Routes>
        </div>
    )
}




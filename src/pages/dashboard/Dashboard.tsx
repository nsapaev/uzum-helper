import style from './Dashboard.module.scss'
import {Outlet} from "react-router-dom";
import SidebarDashboard from "./sidebar/Sidebar.tsx";

export default function Dashboard() {

    return (
        <div className={style.dashboard}>
                <header className={style.dashboard__header}> header</header>
                <nav className={style.dashboard__sidebar}>
                    <SidebarDashboard/>
                </nav>
                <main className={style.dashboard__main}> main </main>

            <Outlet/>

        </div>
    )
}
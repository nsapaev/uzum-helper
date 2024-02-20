import style from './Dashboard.module.scss'
import {Outlet} from "react-router-dom";

export default function Dashboard() {

    return (
        <div className={style.dashboard}>
                <header className={style.dashboard__header}> header</header>
                <nav className={style.dashboard__sidebar}> sidebar</nav>
                <main className={style.dashboard__main}> main </main>

            <Outlet/>

        </div>
    )
}
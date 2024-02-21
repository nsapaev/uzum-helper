import style from "./Sidebar.module.scss"
import {PiCodaLogoFill} from "react-icons/pi";

export default function SidebarDashboard(){
    return(
        <div className={style.sidebar}>
            <div className={style.sidebar__logo}>
                <PiCodaLogoFill/> Uzum-Helper
            </div>
        </div>
    )
}
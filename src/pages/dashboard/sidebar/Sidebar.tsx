import style from "./Sidebar.module.scss"
import {PiCodaLogoFill} from "react-icons/pi";
import {NavLink} from "react-router-dom";

export default function SidebarDashboard(){
    return(
        <div className={style.sidebar}>
            <div className={style.sidebar__logo}>
                <PiCodaLogoFill/> Uzum-Helper
            </div>

            <ul className={style.sidebar__list}>
                <li>
                    <NavLink to={"main"} className={({isActive})=> isActive?  `${style.sidebar__listItem} ${style.sidebar__listItem_active}`: `${style.sidebar__listItem}` }>Главнвя</NavLink>

                </li>
                <li>
                    <NavLink to={"product-analysis"} className={({isActive})=> isActive?  `${style.sidebar__listItem} ${style.sidebar__listItem_active}`: `${style.sidebar__listItem}` }>Анализ Товаров</NavLink>

                </li>
                <li>
                    <NavLink to={"store-analysis"} className={({isActive})=> isActive?  `${style.sidebar__listItem} ${style.sidebar__listItem_active}`: `${style.sidebar__listItem}` }>Анализ Магазина</NavLink>

                </li>
                <li>
                    <NavLink to={"category-analysis"} className={({isActive})=> isActive?  `${style.sidebar__listItem} ${style.sidebar__listItem_active}`: `${style.sidebar__listItem}` }>Анализ котегорий</NavLink>

                </li>
                <li>
                    <NavLink to={"seller-analysis"} className={({isActive})=> isActive?  `${style.sidebar__listItem} ${style.sidebar__listItem_active}`: `${style.sidebar__listItem}` }>Анализ продовцов</NavLink>

                </li>
                <li>
                    <NavLink to={"useful-tools"} className={({isActive})=> isActive?  `${style.sidebar__listItem} ${style.sidebar__listItem_active}`: `${style.sidebar__listItem}` }>Полезные инструменты</NavLink>

                </li>
                <li>
                    <NavLink to={"abs-analysis"} className={({isActive})=> isActive?  `${style.sidebar__listItem} ${style.sidebar__listItem_active}`: `${style.sidebar__listItem}` }>ABC анализ</NavLink>

                </li>
            </ul>
        </div>
    )
}
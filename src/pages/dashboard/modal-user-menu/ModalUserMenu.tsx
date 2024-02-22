import {FaUserCircle} from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { GrPlan } from "react-icons/gr";
import style from "./ModalUserMenu.module.scss"
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { PiTelegramLogoThin } from "react-icons/pi";

export default function ModalUserMenu(){
    return (
        <div className={style.userMenu}>
            <div className={style.userMenu__body}>
                <div className={style.userMenu__logo}>
                    <FaUserCircle/>
                </div>
                <div className={style.userMenu__balans}>
                    <div>Баланс:</div>
                    <div> 0 UZS</div>
                </div>
                <ul>
                    <li className={style.userMenu__profile}>
                        <BsBriefcaseFill/> Мой профиль
                    </li>
                    <li className={style.userMenu__extantion}>
                        <GrPlan/> Тарифы
                    </li>
                    <li className={style.userMenu__tarif}>
                        <IoExtensionPuzzleSharp/> Расширение
                    </li>
                    <li className={style.userMenu__tgbot}>
                        <PiTelegramLogoThin/> telegram-bot
                    </li>
                </ul>
            </div>

        </div>
    )
}
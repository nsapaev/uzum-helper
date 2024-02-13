import React, {useState} from "react";
import style from "./Header.module.scss";
import {PiCodaLogoFill} from "react-icons/pi";
import CustomLink from "../../ui/components/custom-link/CustomLink.js";
import {SlLogin} from "react-icons/sl";
import CustomButton from "../../ui/components/custom-button/Custom-button.js";
import {Link} from "react-router-dom";
import { useSpring, animated } from '@react-spring/web'

export default function Header() {
    const [toggleBurgerBtn, setToggleBurgerBtn] = useState(false)

    const handlerClickBtn = (bool) =>{



        setToggleBurgerBtn(bool)
    }


    return (
        <div className={style.header}>
            <div className={`header__container ${style.header__container}`}>
                <div className={style.header__content}>
                    <div className={style.header__logo}>
                        <span><PiCodaLogoFill/> </span>Logo
                    </div>
                    <div className={style.header__navigate}>
                        <CustomLink value={"Главная"}/>
                        <CustomLink value={"Купить подписку"}/>
                        <CustomLink value={"Отзывы"}/>
                    </div>
                    <div className={style.header__auth}>
                        <Link to={"signin"} className={style.header__login}>
                            <span> <SlLogin/></span>
                            Войти
                        </Link>

                        <div className={style.header__createAcc}>
                            <CustomButton disablet={false} value={"Создать аккаунт"}/>
                        </div>


                        <a className={style.header__burger}>
                            {!toggleBurgerBtn && <a onClick={() => {
                                handlerClickBtn(true)

                            }} className={style.header__burger_closed}>
                                <div></div>
                            </a>}

                            {toggleBurgerBtn && <a onClick={() => {
                                handlerClickBtn(false)

                            }} className={style.header__burger_open}>
                                <div></div>
                            </a>}
                        </a>

                    </div>
                </div>
            </div>
             <div className={`${style.header__burger_menu}  ${toggleBurgerBtn? style.header__burger_menuActive: ""}`}>
                <div>
                    <CustomLink value={"Главная"} />
                </div>
                <div>
                    <CustomLink value={"Купить подписку"}/>
                </div>
                <div>
                    <CustomLink value={"Отзывы"} />
                </div>


            </div>

        </div>


    )
}
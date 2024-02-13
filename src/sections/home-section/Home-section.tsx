import style from "./Home-section.module.scss";
import {DashSvg} from "../../assets/Dash-svg.tsx";
import {AiOutlineLine} from "react-icons/ai";
import CustomButton from "../../ui/components/custom-button/Custom-button.tsx";


export default function HomeSection(){
    return (
        <div className={style.home}>
            <div className={"home__container"}>
                <div className={style.home__content}>
                    <h1 className={style.home__title}>
                        Мы предоставляем сервис аналитики и автоматизации для <div>
                        Uzum Market <div><DashSvg/></div></div>
                    </h1>
                    <div className={style.home__infoBlock}>
                        <ul className={style.home__list}>
                            <li><span><AiOutlineLine/></span> Более 3000 клиентов</li>
                            <li><span><AiOutlineLine/></span> Бесплатный доступ на 24часа</li>
                            <li><span><AiOutlineLine/></span> Оперативная поддержка</li>
                            <li><span><AiOutlineLine/></span> Автоматизация процессов</li>
                        </ul>
                        <CustomButton disablet={false} value={"Попробовать Бесплатно"}/>
                    </div>

                </div>

            </div>

        </div>
    )
}

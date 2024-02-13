import style from "./Why-we.module.scss"
import accelerate from "../../assets/svg/why-we/accelerate-svgrepo-com.svg"
import columnChart from "../../assets/svg/why-we/column-chart-svgrepo-com.svg"
import computer from "../../assets/svg/why-we/computer-svgrepo-com.svg"
import pieChart from "../../assets/svg/why-we/pie-chart-svgrepo-com.svg"
import Title from "../../ui/components/title/title.tsx";
import {useInView} from "react-intersection-observer"

export default function WhyWeSection() {

    const {ref, inView} = useInView({
        threshold: 0.2
    });



    return (
        <div className={style.whywe}>
            <div className={"whywe__container"}>
                <div className={style.whywe__content}>
                    <Title> Почему мы <span>?</span> </Title>
                    <div ref={ref} className={`${style.whywe__body} ${inView ? style.whywe__body_animated : ""}`}>
                        <div  className={style.body__section1}>
                            <div className={style.body__block}>
                                <div>
                                    <h2 className={style.body__title}>Будьте первыми</h2>
                                    <div className={style.body__info}> Анализируйте конкурентов, выбирайте лучшие товары
                                        и повышайте свою
                                        прибыль на Uzum Market
                                    </div>
                                </div>
                                <div className={style.body__img}>
                                    <img src={columnChart}/>
                                </div>
                            </div>
                            <div className={style.body__block}>
                                <div>
                                    <h2 className={style.body__title}>Взлет продаж</h2>
                                    <div className={style.body__info}>Находите наиболее выгодные ниши и товары, кратно
                                        повышайте ваши продажи с помощью профессиональной аналитики
                                    </div>
                                </div>
                                <div className={style.body__img}><img src={accelerate}/></div>
                            </div>

                        </div>
                        <div ref={ref} className={style.body__section2 }>
                            <div className={style.body__block}>
                                <div>
                                    <h2 className={style.body__title}>Широкая выборка данных</h2>
                                    <div className={style.body__info}> Анализируйте собственный бизнес, конкурентов,
                                        ниши и
                                        товары. Удобная работа с таблицами, продвинутые графики и большой выбор
                                        аналитических
                                        метрик
                                    </div>
                                </div>
                                <div className={style.body__img}><img src={pieChart}/></div>
                            </div>
                            <div className={style.body__block}>
                                <div>
                                    <h2 className={style.body__title}>Удобный и простой интерфейс</h2>
                                    <div className={style.body__info}> Интуитивно понятный и простой интерфейс нашего
                                        сервиса создан с максимальной простотой
                                    </div>
                                </div>
                                <div className={style.body__img}><img src={computer}/></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
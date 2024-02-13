import style from "./About-us-section.module.scss"
import {IoStatsChartSharp} from "react-icons/io5";
import {ImStatsDots} from "react-icons/im";
import {TfiStatsUp} from "react-icons/tfi";
import {MdOutlineQueryStats} from "react-icons/md";
import Title from "../../ui/components/title/title.tsx";
import {useInView} from "react-intersection-observer"

export default function AboutUsSection() {
    const [ref, inView] = useInView({
        threshold: 0.2
    });


    return (
        <div ref={ref} className={style.aboutUs}>
            <div className={"aboutUs__container"}>
                <div className={style.aboutUs__content}>
                    <Title>Чем мы занимаемся </Title>
                    <div className={`${style.aboutUs__body} ${inView ? style.aboutUs__body_animated : ''}`}>
                        <div className={style.aboutUs__cart}>
                            <div className={style.cart__info}>
                                <b>Профессиональный, комплексный и мощный инструмент для бизнеса на маркетплейсе.</b>
                                Анализ товаров, анализ конкурентов, анализ категорий, анализ ниши, ценовая сегментации,
                                подборки прибыльных товаров и многое другое ждут вас.
                                Применяйте самые современные инструменты для достижения успеха в бизнесе.
                            </div>
                            <div className={style.cart__image}>
                                <IoStatsChartSharp/>
                            </div>
                        </div>
                        <div className={style.aboutUs__cart}>
                            <div className={style.cart__info}>
                                <b>Профессиональный, комплексный и мощный инструмент для бизнеса на маркетплейсе.</b>
                                Анализ товаров, анализ конкурентов, анализ категорий, анализ ниши, ценовая сегментации,
                                подборки прибыльных товаров и многое другое ждут вас.
                                Применяйте самые современные инструменты для достижения успеха в бизнесе.
                            </div>
                            <div className={style.cart__image}>
                                <ImStatsDots/>
                            </div>
                        </div>
                        <div className={style.aboutUs__cart}>
                            <div className={style.cart__info}>
                                <b>Профессиональный, комплексный и мощный инструмент для бизнеса на маркетплейсе.</b>
                                Анализ товаров, анализ конкурентов, анализ категорий, анализ ниши, ценовая сегментации,
                                подборки прибыльных товаров и многое другое ждут вас.
                                Применяйте самые современные инструменты для достижения успеха в бизнесе.
                            </div>
                            <div className={style.cart__image}>
                                <TfiStatsUp/>
                            </div>
                        </div>
                        <div className={style.aboutUs__cart}>
                            <div className={style.cart__info}>
                                <b>Профессиональный, комплексный и мощный инструмент для бизнеса на маркетплейсе.</b>
                                Анализ товаров, анализ конкурентов, анализ категорий, анализ ниши, ценовая сегментации,
                                подборки прибыльных товаров и многое другое ждут вас.
                                Применяйте самые современные инструменты для достижения успеха в бизнесе.
                            </div>
                            <div className={style.cart__image}>
                                <MdOutlineQueryStats/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
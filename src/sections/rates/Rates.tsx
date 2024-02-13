import style from "./Rates.module.scss"
import Rate from "./rate/Rate.tsx";
import {useState} from "react";

export default function Rates() {
    const [rateMonth, setRateMonth] = useState(false)

    const rates = [
        {
            rate: "Standard",
            price: rateMonth ? "750K" : "300K",
            month: rateMonth ? "3 месяца" : "1 месяц",
            info: [
                "Доступ к веб-приложению Uzum Helper на 30 календарных дней;",
                "до 100 отчетов по разным магазинам в день;",
                "до 100 отчетов по разным категориям в день;",
                "до 100 разных товаров в день;",
                "Доступ к Расширению (Плагину) для браузера Chrome;",
                "Доступ к Telergam-бот;",
                "доступ для 2 устройств."
            ]

        },
        {
            rate: "Pro",
            price: rateMonth ? "1.69М" : "600K",
            month: rateMonth ? "3 месяца" : "1 месяц",
            info: [
                "Все, что включает тариф \"Standard\" без ограничений;",
                "Выгрузка данных за 60/90 дней;",
                "Расширенный функционал анализа товаров;",
                "Расширенный функционал анализа магазинов - динамика продаж, разбивки по категориям, ценовая сегментация;",
                "Расширенный функционал анализа категорий - динамика продаж, магазины, ценовая сегментация;",
                "Анализ конкурентов;",

            ]

        }
    ]


    return (
        <section className={style.rates}>

            <div className={style.rates__switchers}>
                <button className={`${!rateMonth? style.rates__switcher_true: ''}` }  onClick={()=>{setRateMonth(false)}} >1 месяц</button>
                <button   className={`${rateMonth && style.rates__switcher_true}`} onClick={()=>{setRateMonth(true)}} >3 месяца</button>
            </div>


            <div className={"rates__container"}>
                <div className={style.rates__content}>
                    {
                        rates.map(rate => {
                            return <Rate data={rate}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
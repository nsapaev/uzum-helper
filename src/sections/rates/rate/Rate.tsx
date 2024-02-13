import style from "./Rate.module.scss"
import {MdCheck} from "react-icons/md";
import CustomButton from "../../../ui/components/custom-button/Custom-button.tsx";


export default function Rate({data}) {


    return (
        <div className={style.rate}>
            <div className={style.rate__title}>{data.rate}</div>
            <div className={style.rate__body}>
                <div className={style.rate__price}>{data.price}</div>
                <div className={style.rate__month}>{data.month}</div>
                <ul className={style.rate__info}>
                    {
                        data.info.map(peace => <li><MdCheck/> <span>{peace}</span></li>)

                    }

                </ul>
            </div>
            <CustomButton value={"Купить подписку"} disablet={''}/>

        </div>
    )
}
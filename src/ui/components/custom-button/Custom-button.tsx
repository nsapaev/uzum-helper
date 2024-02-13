import style from "./Custom-button.module.scss"

export default function CustomButton({value,disablet}){
    return(
        <button disabled={disablet} className={style.btn}>
            <span>{value}</span>
        </button>
    )
}
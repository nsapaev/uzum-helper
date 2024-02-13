import style from "./title.module.scss"

export default function Title(props){
    return (
        <h1 className={style.title}>
            {props.children}
        </h1>
    )
}
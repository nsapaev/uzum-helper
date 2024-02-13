import style from "./CustomLink.module.scss"

export default function CustomLink({value}) {
    return (
        <>
            <a className={style.btn}>
                <span>{value}</span>
            </a>
        </>
    )
}

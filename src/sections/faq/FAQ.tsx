import style from "./FAQ.module.scss"
import AccordionDemo from "../../ui/accordion/Accordion.tsx";
import Title from "../../ui/components/title/title.tsx";


export default function FAQ() {
    return (
        <section className={style.FAQ}>
            <div className={"FAQ__container"}>
                <Title>
                    Часто задаваемые вопросы
                </Title>
                <AccordionDemo/>
            </div>
        </section>
    )
}
import "./Accordion.scss"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionDemo() {
    return (
        <div >
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography><span className={"accordion__title"}>Что такое сервис внешней аналитики ?</span> </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Сервис внешней аналитики маркетплейса.
                        Это мощный инструмент, который собирает, анализирует и интерпретирует данные, связанные с
                        деятельностью и процессами на маркетплейсе UZUM. Наш сервис предназначен для продавцов,
                        владельцев бизнеса и всех, кто активно работает с маркетплейсами. Statbook предоставляет ценную
                        информацию, необходимую для принятия обоснованных решений и достижения успеха. У нас вы сможете
                        получить подробные данные о продажах, выручке, спросе на товары и других важных аспектах вашего
                        бизнеса на маркетплейсе.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography><span className={"accordion__title"}> Какая аналитика доступна на сервисе ?</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>На нашем сервисе вы можете воспользоваться следующими инструментами аналитики для
                        маркетплейса UZUM.
                        * Анализ товаров на UZUM: * Аналитика товара: получение справочных данных и отслеживание
                        динамики показателей для конкретного товара за выбранный период. * Позиции в категориях:
                        отслеживание динамики позиций товара в рамках категории и подкатегорий. * Анализ категорий на
                        UZUM: * Категории: анализ статистики по конкретной категории и ее составляющим с использованием
                        различных метрик для понимания текущей ситуации на рынке и трендов. * Обзор категории: изучение
                        статистики и данных о популярных товарных позициях в выбранной категории. * Анализ магазинов на
                        UZUM: * Обзор магазина: изучение доступных товаров и аналитических данных по ним за выбранный
                        период для конкретного магазина. * Сводный анализ: получение сводной статистики по выбранному
                        магазину по запросу.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography><span className={"accordion__title"}>Как начать пользоваться нашим сервисом ?</span> </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>Регистрация. Пополнение баланса. Покупка подписки.
                        Чтобы начать пользоваться нашим сервисом, вам необходимо зарегистрироваться. Для этого введите
                        свой адрес электронной почты и пароль на странице регистрации. Затем подтвердите свой адрес
                        электронной почты, открыв письмо от statbook.uz с ссылкой для подтверждения (проверьте папку
                        "Входящие" или "Спам", если письмо не найдено). Вы также можете использовать быструю регистрацию
                        через аккаунт Google, Facebook или по номеру телефона.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography><span className={"accordion__title"}> Как пополнить баланс ?</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Пополняйте баланс легко и просто.
                        Чтобы пополнить баланс, авторизуйтесь в Личном кабинете и перейдите в раздел "Пополнить баланс"
                        на странице "Мой Профиль". Введите сумму для пополнения и выберите предпочтительный метод
                        платежа. Затем вы будете перенаправлены на страницу платежного сервиса для завершения платежа.
                        После успешной оплаты вы вернетесь в Личный кабинет. Мы принимаем платежи через платежные
                        системы Payme, Click.uz, Uzum bank, а также онлайн-платежи с использованием карт Uzcard, Humo,
                        Visa и MasterCard.</Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}
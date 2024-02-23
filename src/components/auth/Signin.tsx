import {useForm, SubmitHandler} from "react-hook-form"
import {useNavigate} from "react-router-dom";
import style from "./Signin.module.scss"
import CustomButton from "../../ui/components/custom-button/Custom-button.tsx";
import { MdKeyboardBackspace } from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {authorization} from "../../store/authSlice.ts";
import {useEffect} from "react";
import {RootState} from "../../store";

type FormFields = {
    email: string
    password: string
}

export default function Signin() {
    const auth = useSelector<RootState>(state => state.auth.auth)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(auth){
            navigate("/dashboard")
        }

    },[auth])


    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        setError,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm<FormFields>()
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            console.log(data)
            if(data.email === "admin@" && data.password === "12345678"){
                dispatch(authorization({...data}))
            }else {
                throw new Error()
            }



        }catch(error){
           setError("root",{
               message:"Вы ввели неверную почту или пароль "
           })
        }

    }
    return (
        <div className={style.signin}>

            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form className={style.signin__form} onSubmit={handleSubmit(onSubmit)}>
                <div onClick={()=>{navigate(-1)}} className={style.signin__back}>
                    <span><MdKeyboardBackspace/></span>
                </div>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                    {...register("email", {
                        required: "Введите Электронную почту", validate: (value) => {
                            if (value.includes("@")) return true
                            return "Поле должно содержать символ '@'"

                        }
                    })}
                    placeholder={"Email"}
                />
                {errors.email && <b className={style.signin__error_message}> {errors.email.message}</b>}
                {/* include validation with required or other standard HTML validation rules */}
                <input type={"password"}
                    {...register("password", {
                        required: "Введите пароль", minLength: {
                            value: 8,
                            message: "Поле должно содержать минимум 8 символов"
                        }
                    })}
                    placeholder={"Password"}/>
                {/* errors will return when field validation fails  */}
                {errors.password && <b className={style.signin__error_message}>{errors.password.message}</b>}

                 <CustomButton disablet={isSubmitting} value={isSubmitting?"Отправяется..." :"Отправить"}/>
                {errors.root && <b className={style.signin__error_message}>{errors.root.message}</b>}
            </form>
        </div>

    )
}
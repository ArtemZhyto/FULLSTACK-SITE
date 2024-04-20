import styles from "./Form.module.scss"
import { useState } from "react"
import { toast } from "react-toastify"
import { sendEnter } from "../../app/redux/slices/currentUser"
import "./FormThemes.scss"
import { substring } from "../../shared/utils/substring"
import "react-toastify/dist/ReactToastify.css"
import { useDispatch } from "react-redux"
const EnterForm = ({ setTypeOfSending, theme }) => {
	const dispatch = useDispatch()
	const initalState = {
		mail: "",
		password: "",
	}
	const [registrationVals, setRegistrationVals] = useState(initalState)
	const { mail, password } = registrationVals
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				if (!password || !mail) {
					toast.info("Заполните все поля перед отправкой 🙂", {
						theme,
					})
					setRegistrationVals(initalState)
				} else {
					dispatch(sendEnter(registrationVals))
					setRegistrationVals(initalState)
				}
			}}
			className={substring(styles.registration__form, "registration__form")}
		>
			<label className={styles.registration__label}>
				<p>Почта</p>
				<input
					type="email"
					className={substring(
						"registration__input",
						styles.registration__input
					)}
					placeholder="Например, example@gmail.com"
					value={registrationVals.mail}
					onChange={(e) =>
						setRegistrationVals({
							...registrationVals,
							mail: e.target.value,
						})
					}
				/>
			</label>
			<label className={styles.registration__label}>
				<p>Пароль</p>
				<input
					type="password"
					value={registrationVals.password}
					className={substring(
						"registration__input",
						styles.registration__input
					)}
					placeholder="Например, 12345678"
					onChange={(e) =>
						setRegistrationVals({
							...registrationVals,
							password: e.target.value,
						})
					}
				/>
			</label>
			<button type="submit" className={styles.registration__registrate}>
				Войти
			</button>
			<p>Нету аккаунта?</p>
			<button
				type="button"
				onClick={() => {
					setTypeOfSending("registration")
				}}
				className={styles.registration__enter}
			>
				Зарегестрироваться
			</button>
		</form>
	)
}

export default EnterForm

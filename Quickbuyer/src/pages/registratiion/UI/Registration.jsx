import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { Container, Col, Row } from "react-bootstrap"
import { useState } from "react"
import styles from "../Registration.module.scss"
import "../RegistrationThemes.scss"
import { useDispatch, useSelector } from "react-redux"
import { sendRegistration } from "../../../features/API/sendRegistration"
import { addCurrentUser } from "../../../features/slices/currentUser/currentUser"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo"
const Registration = () => {
	const dispatch = useDispatch()
	const [registrationVals, setRegistrationVals] = useState({
		email: "",
		password: "",
		submitPassword: "",
	})
	const theme = useSelector(chooseTheme) === "white" ? "light" : "dark"
	return (
		<>
			<ToastContainer theme={theme}></ToastContainer>
			<article className="registration">
				<Container>
					<Col xs={12}>
						<p className={`${styles.registration__title} title`}>Регистрация</p>
					</Col>
					<Row>
						<Col xs={2}></Col>
						<Col
							xs={12}
							lg={8}
							className={`${styles.registration__regblock} registration__regblock`}
						>
							<div
								className={`registration__instruction d-none d-lg-flex ${styles.registration__instruction}`}
							>
								<p
									className={`${styles.registration__subtitle} registration__subtitle`}
								>
									Инструкция
								</p>
								<p
									className={`registration__text ${styles?.registration__text}`}
								>
									1. Введите свою почту или номер телефона
								</p>
								<p
									className={`registration__text ${styles?.registration__text}`}
								>
									2. Придумайте пароль и подтвердите его
								</p>
								<p
									className={`registration__text ${styles.registration} ${styles?.registration__text}`}
								>
									3. Нажмите кнопку Зарегистрироваться
								</p>
								<p
									className={`registration__text ${styles?.registration__text}`}
								>
									Так же, если у Вас уже имеется аккаунт, то введите почту и
									пароль от аккаунта и нажмите Войти
								</p>
								<p
									className={`registration__text ${styles.registration__text}`}
								>
									Просим ознакомиться с нашими Условиями пользования сайтом
								</p>
							</div>
							<form
								onSubmit={(e) => {
									e.preventDefault()
									if (
										registrationVals.password !==
										registrationVals.submitPassword
									) {
										toast.error("Пароли не совпадают :( ", {
											theme,
										})
									} else {
										setRegistrationVals(registrationVals)
										sendRegistration(registrationVals)
									}
								}}
								className={`${styles.registration__form} registration__form`}
							>
								<label className={styles.registration__label}>
									<p>Почта</p>
									<input
										type="email"
										className={`registration__input ${styles.registration__input}`}
										placeholder="Например, example@gmail.com"
										value={registrationVals.email}
										onChange={(e) =>
											setRegistrationVals({
												...registrationVals,
												email: e.target.value,
											})
										}
									/>
								</label>
								<label className={styles.registration__label}>
									<p>Пароль</p>
									<input
										type="password"
										value={registrationVals.password}
										className={`registration__input ${styles.registration__input}`}
										placeholder="Например, 12345678"
										onChange={(e) =>
											setRegistrationVals({
												...registrationVals,
												password: e.target.value,
											})
										}
									/>
								</label>
								<label className={styles.registration__label}>
									<p>Потвердите пароль</p>
									<input
										className={`registration__input ${styles.registration__input}`}
										value={registrationVals.submitPassword}
										onChange={(e) =>
											setRegistrationVals({
												...registrationVals,
												submitPassword: e.target.value,
											})
										}
									/>
								</label>
								<button
									type="submit"
									className={styles.registration__registrate}
								>
									Зарегестрироваться
								</button>
								<p>Уже есть аккаунт?</p>
								<a href="" className={styles.registration__enter}>
									Войти
								</a>
							</form>
						</Col>
						<Col xs={2}></Col>
					</Row>
				</Container>
			</article>
		</>
	)
}

export default Registration

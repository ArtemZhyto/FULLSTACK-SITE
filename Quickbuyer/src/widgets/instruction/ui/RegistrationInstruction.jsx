import styles from "../instruction.module.scss"

import { substring } from "@shared/utils/jsFunctions/substring"
import React from "react"

const RegistrationInstruction = () => {
	return (
		<div
			className={substring(
				styles.registration__instruction,
				"d-none d-lg-flex"
			)}
		>
			<p className={styles.registration__subtitle}>Инструкция</p>
			<p className={styles.registration__text}>
				1. Введите свою почту или номер телефона
			</p>
			<p className={styles?.registration__text}>
				2. Придумайте пароль и подтвердите его
			</p>
			<p className={styles.registration__text}>
				3. Нажмите кнопку Зарегистрироваться
			</p>
			<p className={styles?.registration__text}>
				Так же, если у Вас уже имеется аккаунт, то введите почту и пароль от
				аккаунта и нажмите Войти
			</p>
			<p className={styles.registration__text}>
				Просим ознакомиться с нашими Условиями пользования сайтом
			</p>
		</div>
	)
}

export default RegistrationInstruction

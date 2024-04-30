import styles from "../instruction.module.scss"
import { substring } from "@shared/utils/jsFunctions/substring"

import React from "react"

const EnterInstruction = () => {
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
			<p className={styles?.registration__text}>2. Введите пароль</p>
			<p className={styles.registration__text}>3. Нажмите кнопку Войти</p>
			<p className={styles?.registration__text}>
				Так же, если у вас нету аккаунта, нажмите Зарегестрироваться
			</p>
			<p className={styles.registration__text}>
				Просим ознакомиться с нашими Условиями пользования сайтом
			</p>
		</div>
	)
}

export default EnterInstruction

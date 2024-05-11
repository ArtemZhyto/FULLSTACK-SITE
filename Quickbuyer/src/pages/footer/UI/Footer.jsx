import React from "react"
import styles from "../Footer.module.scss"
import { Link } from "react-router-dom"
import "../FooterDarkWhite.scss"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser } from "../../../features/slices/currentUserSlice"

const Footer = () => {
	const user = useSelector(selectCurrentUser)
	return (
		<footer className={styles.footer} id="footer">
			{" "}
			<div className={styles.footer__links}>
				<Link className={styles.footer__navlink} id="footer__navlink" to={`./`}>
					Главная
				</Link>
				<Link className={styles.footer__navlink} id="footer__navlink" to={"./registration"}>
					Регистрация
				</Link>
				<Link className={styles.footer__navlink} id="footer__navlink" to={"./products"}>
					Покупки
				</Link>
				<Link className={styles.footer__navlink} id="footer__navlink" to={`./user/${user.id}`}>
					Профиль
				</Link>
			</div>
			<p className={styles.footer__rights}>
				© 2023-2024. Quick Buyer. Все права защищены
			</p>
		</footer>
	)
}

export default Footer

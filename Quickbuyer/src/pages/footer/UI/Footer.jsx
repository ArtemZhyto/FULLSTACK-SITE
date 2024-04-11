import React from "react"
import styles from "../Footer.module.scss"
import { Link } from "react-router-dom"
import "../FooterDarkWhite.scss"

const Footer = () => {
	return (
		<footer className={styles.footer} id="footer">
			{" "}
			<div className={styles.footer__links}>
				<Link className={styles.footer__navlink} id="footer__navlink" to={"./"}>
					Главная
				</Link>
				<Link className={styles.footer__navlink} id="footer__navlink" to={"./"}>
					Регистрация
				</Link>
				<Link className={styles.footer__navlink} id="footer__navlink" to={"./"}>
					Покупки
				</Link>
				<Link className={styles.footer__navlink} id="footer__navlink" to={"./"}>
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

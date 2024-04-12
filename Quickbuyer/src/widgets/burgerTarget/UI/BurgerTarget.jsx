import styles from "../BurgerTarget.module.scss"


const BurgerTarget = () => {
	return (
		<div className="burgertarget">
			<div className="burgertarget__info">
				<div className="user__icon"></div>
				<p className="burgertarget__text">Войти</p>
				<p className="burgertarget__text">ИЛИ</p>
				<p className="burgertarget__text">Регистрация</p>
			</div>
			<div className="burgertarget__buttons">
				<div className={styles.navbar__btn}>
					<p className="">Товары</p>
					<div
						className={`navbar__productsbtn ${styles.navbar__btnphoto}`}
					></div>
				</div>
			</div>
		</div>
	)
}

export default BurgerTarget

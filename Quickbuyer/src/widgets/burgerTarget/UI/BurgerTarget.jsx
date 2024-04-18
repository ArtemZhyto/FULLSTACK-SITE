import styles from "../BurgerTarget.module.scss"
import "../BurgerTargetThemes.scss"
import { selectIsOpened, toggleLeftPanel } from "../../../features/slices/mainpage/mainPageInfo"
import { useSelector, useDispatch } from "react-redux"

const BurgerTarget = () => {
	const dispatch = useDispatch()
	const isOpened = useSelector(selectIsOpened)
	return (
		<>
			<div
				className={
					isOpened
						? `burgertarget ${styles.burgertarget}  ${styles.burgertargetOpened}`
						: `burgertarget ${styles.burgertarget} `
				}
			>
				<div className={styles.burgertarget__info}>
					<div
						className={`burgertarget__usericon ${styles.burgertarget__usericon}`}
					></div>
					<div className={styles.burgertarget__infobtns}>
						<p className="burgertarget__text">Войти</p>
						<p className="burgertarget__text">ИЛИ</p>
						<p className="burgertarget__text">Регистрация</p>
					</div>
				</div>
				<div className={styles.burgertarget__buttons}>
					<div className={styles.burgertarget__btn}>
						<p className={styles.burgertarget__title}>Товары</p>
						<div
							className={`burgertarget__products ${styles.burgertarget__productsbtn}`}
						></div>
					</div>
					<div className={styles.burgertarget__btn}>
						<p className={styles.burgertarget__title}>Категории</p>
						<div
							className={`burgertarget__categorys ${styles.burgertarget__productsbtn}`}
						></div>
					</div>
					<div className={styles.burgertarget__btn}>
						<p className={styles.burgertarget__title}>Профиль</p>
						<div
							className={`burgertarget__profile ${styles.burgertarget__productsbtn}`}
						></div>
					</div>
					<div className={styles.burgertarget__btn}>
						<p className={styles.burgertarget__title}>Корзина</p>
						<div
							className={`burgertarget__bucket ${styles.burgertarget__productsbtn}`}
						></div>
					</div>
					<div className={styles.burgertarget__btn}>
						<p className={styles.burgertarget__title}>Тема</p>
						<div
							className={`burgertarget__themes ${styles.burgertarget__productsbtn}`}
						></div>
					</div>
					<div className={styles.burgertarget__btn}>
						<p className={styles.burgertarget__title}>Создать товар</p>
						<div
							className={`burgertarget__createGood ${styles.burgertarget__productsbtn}`}
						></div>
					</div>
					<button
						onClick={() => dispatch(toggleLeftPanel())}
						className={`burgertarget__larrow ${styles.burgertarget__larrow}`}
					></button>
				</div>
			</div>
		</>
	)
}

export default BurgerTarget

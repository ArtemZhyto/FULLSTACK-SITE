import styles from "../BurgerTarget.module.scss"
import "../BurgerTargetThemes.scss"
import {
	changeTheme,
	selectIsBurgerOpened,
	toggleBurger,
	toggleFilters,
} from "@features/slices/mainPageSlice"
import { useDispatch, useSelector } from "react-redux"
import LeftPanelWrapper from "../../leftPanelWrapper/UI/LeftPanelWrapper"
import { Link } from "react-router-dom"
import { selectCurrentUser } from "@features/slices/currentUserSlice"
const BurgerTarget = () => {
	const isBurgerOpened = useSelector(selectIsBurgerOpened)
	const dispatch = useDispatch()

	const user = useSelector(selectCurrentUser)
	return (
		<LeftPanelWrapper
			isOpened={isBurgerOpened}
			togglePanel={toggleBurger}
			additionalStyles={styles.burgertarget__leftPanel}
		>
			<div className={styles.burgertarget__info}>
				{user.image ? (
					<img
						className={styles.burgertarget__usericon}
						src={user.image}
						alt=""
					/>
				) : (
					<div
						className={`burgertarget__usericon ${styles.burgertarget__usericon}`}
					></div>
				)}
				{user.name ? (
					<p className="burgertarget__text text-center m0-auto">{user.name}</p>
				) : (
					<Link to="/registration" className={styles.burgertarget__infobtns}>
						<p className="burgertarget__text">Войти</p>
						<p className="burgertarget__text">ИЛИ</p>
						<p className="burgertarget__text">Регистрация</p>
					</Link>
				)}
			</div>
			<ul className={styles.burgertarget__buttons}>
				<Link to="/products" className={styles.burgertarget__btn}>
					<p className={styles.burgertarget__title}>Товары</p>
					<div
						className={`burgertarget__products ${styles.burgertarget__productsbtn}`}
					></div>
				</Link>
				<li
					onClick={(e) => {
						dispatch(toggleFilters())
					}}
					className={styles.burgertarget__btn}
				>
					<p className={styles.burgertarget__title}>Категории</p>
					<div
						className={`burgertarget__categorys ${styles.burgertarget__productsbtn}`}
					></div>
				</li>
				<Link to={`/user/${user.id}`} className={styles.burgertarget__btn}>
					<p className={styles.burgertarget__title}>Профиль</p>
					<div
						className={`burgertarget__profile ${styles.burgertarget__productsbtn}`}
					></div>
				</Link>
				<Link to={`/cart`} className={styles.burgertarget__btn}>
					<p className={styles.burgertarget__title}>Корзина</p>
					<div
						className={`burgertarget__bucket ${styles.burgertarget__productsbtn}`}
					></div>
				</Link>
				<li
					onClick={() => {
						dispatch(changeTheme())
					}}
					className={styles.burgertarget__btn}
				>
					<p className={styles.burgertarget__title}>Тема</p>
					<div
						className={`burgertarget__themes ${styles.burgertarget__productsbtn}`}
					></div>
				</li>
				<Link
					to={"products/createProduct"}
					className={styles.burgertarget__btn}
				>
					<p className={styles.burgertarget__title}>Создать товар</p>
					<div
						className={`burgertarget__createGood ${styles.burgertarget__productsbtn}`}
					></div>
				</Link>
				<button
					type="button"
					onClick={() => dispatch(toggleBurger())}
					className={`burgertarget__larrow ${styles.burgertarget__larrow}`}
				></button>
			</ul>
		</LeftPanelWrapper>
	)
}

export default BurgerTarget

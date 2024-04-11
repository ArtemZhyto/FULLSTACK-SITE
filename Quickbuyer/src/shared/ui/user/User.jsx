import styles from "./User.module.scss"
import "./UserThemes.scss"
const User = ({ name, yearsQty, selledGoods, rate }) => {
	return (
		<div className={styles.bestUsers__user}>
			<div className={styles.bestUsers__userPhoto} id="userPhoto"></div>
			<p className="bestUsers__username">{name}</p>
			<p className="bestUsers__yearQty">Лет на нашем сайте : {yearsQty}</p>
			<p className="bestUsers__selledGoods">Продано товаров : {selledGoods}</p>
			<p className="bestUsers__rate">Средняя оценка : {rate}/10</p>
		</div>
	)
}

export default User

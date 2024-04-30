import { Image } from "react-bootstrap"
import { substring } from "@shared/utils/jsFunctions/substring"
import styles from "../Product.module.scss"
import "../Product.scss"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import {
	addToCart,
	selectCurrentUser,
} from "@features/slices/currentUserSlice"
import { useSelector } from "react-redux"
import axios from "axios"

const Product = ({ name, img, seller, price, id }) => {
	const currentUser = useSelector(selectCurrentUser)
	const navigate = useNavigate()
	return (
		<div className={substring("products__product", styles.products__product)}>
			<div
				className={substring(
					"products__imageWrapper",
					styles.products__imageWrapper
				)}
			>
				<Image src={img} className={styles.products__image}></Image>
			</div>
			<p className={styles.products__productName}>{name}</p>
			<div className={styles.products__additionalInfo}>
				<div
					className={substring(styles.products__line, "products__line")}
				></div>
				<p className="products__sellerName">
					Продавец :{" "}
					<Link to={`/user/${seller}`} className="text-primary">
						{seller}
					</Link>
				</p>
				<p className="products__price">Цена : {price}</p>
				<button
					onClick={() => {
						navigate(`product?id=${id}`)
					}}
					className={styles.products__showProduct}
				>
					Посмотреть товар
				</button>
			</div>
			<div className={styles.products__btns}>
				<button
					className={substring(
						"products__addToCart",
						styles.products__addToCart
					)}
					onClick={async () => {
						console.log(
							`https://localhost:34674/basket/${currentUser.ID}/add/${id}`
						)
						try {
							await axios.post(
								`https://localhost:34673/basket/${currentUser.ID}/add/${id}`
							)

							console.log("DONE")
						} catch (error) {
							console.log(error)
							console.log(
								`https://localhost:34673/basket/${currentUser.ID}/add/${id}`
							)
						}
					}}
				>
					В корзину
				</button>
				<button className={styles.products__buyBtn}>Купить</button>
			</div>
		</div>
	)
}

export default Product

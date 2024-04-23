import { Image } from "react-bootstrap"
import { substring } from "../../../shared/utils/substring"
import styles from "../Product.module.scss"
import "../Product.scss"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

const Product = ({ name, img, seller, price, id }) => {
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
				>
					В корзину
				</button>
				<button className={styles.products__buyBtn}>Купить</button>
			</div>
		</div>
	)
}

export default Product

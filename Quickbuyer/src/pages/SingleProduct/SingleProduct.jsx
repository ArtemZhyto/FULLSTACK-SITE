import axios from "axios"
import queryString from "query-string"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { getSingleProduct } from "../../features/API/getSingleProduct"
import styles from "./SingleProduct.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import { substring } from "../../shared/utils/substring"
import "./SingleProductThemes.scss"
const SingleProduct = () => {
	const [currentProduct, setCurrentProduct] = useState({})
	const currentProductId = queryString.parse(useLocation().search).id
	useEffect(() => {
		try {
			getSingleProduct(setCurrentProduct, currentProductId)
		} catch (error) {
			console.log(error)
		}
	}, [currentProductId])
	return currentProduct ? (
		<main>
			<Container>
				<Row className={"singleProduct"}>
					<Col
						xs={12}
						className={substring(
							styles.singleProduct__Wrapper,
							"singleProduct__Wrapper"
						)}
					>
						<div className={styles.singleProduct__imgblock}>
							<div
								className={substring(
									styles.singleProduct__imageWithName,
									"singleProduct__imageWithName"
								)}
							>
								<img
									className={substring(
										styles.singleProduct__image,
										"singleProduct__image"
									)}
									src={currentProduct.image}
									alt=""
								/>
								<p
									className={substring(
										styles.singleProduct__Name,
										"singleProduct__Name"
									)}
								>
									{currentProduct.name}
								</p>
							</div>
							<div className="singleProduct__additionalPhotos"></div>
							<div className="singleProduct__additionalPhotos"></div>
							<div className="singleProduct__additionalPhotos"></div>
						</div>

						<div
							className={substring(
								styles.singleProduct__description,
								"mt-4 mt-sm-0"
							)}
						>
							<div
								className={substring(
									styles.singleProduct__actionBtn,
									"singleProduct__whiteDarkButton",
									"mb-5"
								)}
							>
								Код {currentProduct.code}
							</div>
							<p className="sinleProduct__textDescription">
								Тут будет находиться описание товара, которое поможет
								пользователям определить, можно или нужно ли покупать данный
								товар. Так же слево находится описание о товаре: продавец, тип,
								страна и дата опубликации о продажи данного товаран на нашем
								сайте
							</p>
							<div
								className={substring(
									styles.singleProduct__actionBtn,
									"singleProduct__whiteDarkButton",
									styles.singleProduct__price
								)}
							>
								{currentProduct.price}$
							</div>
							<div className="d-flex align-items-start">
								<button
									className={substring(
										styles.singleProduct__actionBtn,
										"singleProduct__whiteDarkButton"
									)}
								>
									В корзину
								</button>
								<button className={styles.singleProduct__actionBtn}>
									Купить
								</button>
							</div>
						</div>
						<ul
							className={substring(
								styles.singleProduct__characteristic,
								"singleProduct__characteristic",
								"mt-4 mt-sm-0"
							)}
						>
							<li className="singleProduct__characteristicElem">
								<p className={styles.singleProduct__characteristicTitle}>
									Тип:
								</p>
								<div
									className={substring(
										styles.singleProduct__characteristicValue,
										"singleProduct__characteristicValue"
									)}
								>
									{currentProduct.type}
								</div>
							</li>
							<li className="singleProduct__characteristicElem">
								<p className={styles.singleProduct__characteristicTitle}>
									Продавец:
								</p>
								<div
									className={substring(
										styles.singleProduct__characteristicValue,
										"singleProduct__characteristicValue"
									)}
								>
									{currentProduct.seller}
								</div>
							</li>
							<li className="singleProduct__characteristicElem">
								<p className={styles.singleProduct__characteristicTitle}>
									Страна:
								</p>
								<div
									className={substring(
										styles.singleProduct__characteristicValue,
										"singleProduct__characteristicValue"
									)}
								>
									{currentProduct.country}
								</div>
							</li>
							<li className="singleProduct__characteristicElem">
								<p className={styles.singleProduct__characteristicTitle}>
									Дата:
								</p>
								<div
									className={substring(
										styles.singleProduct__characteristicValue,
										"singleProduct__characteristicValue"
									)}
								>
									{currentProduct.date}
								</div>
							</li>
							<li className="singleProduct__characteristicElem">
								<p className={styles.singleProduct__characteristicTitle}>
									Категория:
								</p>
								<div
									className={substring(
										styles.singleProduct__characteristicValue,
										"singleProduct__characteristicValue"
									)}
								>
									{currentProduct.category}
								</div>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</main>
	) : null
}

export default SingleProduct

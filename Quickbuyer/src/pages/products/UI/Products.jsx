import React, { useEffect } from "react"
import {
	fetchProducts,
	selectGoods,
} from "../../../features/slices/mainpage/mainPageInfo"
import { useDispatch, useSelector } from "react-redux"
import Product from "../../../widgets/product/UI/Product"
import styles from "../products.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import { substring } from "../../../shared/utils/substring"
const Products = () => {
	const dispatch = useDispatch()
	const goods = useSelector(selectGoods)
	useEffect(() => {
		dispatch(fetchProducts())
	}, [])
	return (
		<article className="products">
			<Container>
				<Row className={substring(styles.products__row, "g-5")}>
					{goods
						? goods.map((good) => <Product name={good.name} img={good.img} seller={good.seller} price={good.price}/>)
						: null}
				</Row>
			</Container>
		</article>
	)
}

export default Products

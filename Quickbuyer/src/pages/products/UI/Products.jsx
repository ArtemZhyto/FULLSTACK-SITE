import React, { useEffect } from "react"
import {
	changeSearch,
	fetchProducts,
	selectGoods,
	selectSearch,
} from "../../../features/slices/mainpage/mainPageInfo"
import { useDispatch, useSelector } from "react-redux"
import Product from "../../../widgets/product/UI/Product"
import styles from "../products.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import { substring } from "../../../shared/utils/substring"
import { useLocation, useParams } from "react-router"
import queryString from "query-string"
import { chooseFilters } from "../../../app/redux/slices/FilterSlice"
import { productsFilter } from "../../../features/classic/productsFilter/productsFilter"
import Filters from "../../../widgets/filters/UI/Filters"
const Products = () => {
	const dispatch = useDispatch()
	const goods = useSelector(selectGoods)
	let qstring = useSelector(selectSearch)
	const filters = useSelector(chooseFilters)
	const location = useLocation()
	useEffect(() => {
		if (location.search) {
			dispatch(changeSearch(queryString.parse(location.search).q))
		}
	}, [location])
	useEffect(() => {
		dispatch(fetchProducts())
	}, [])
	return (
		<>
			<Filters />
			<article className="products">
				<Container>
					<Row className={substring(styles.products__row, "g-5")}>
						{goods
							? productsFilter(goods, qstring, filters).map((good) => (
									<Product
										key={good.ID}
										name={good.name}
										img={good.image}
										seller={good.seller}
										price={good.price}
									/>
							))
							: null}
					</Row>
				</Container>
			</article>
		</>
	)
}

export default Products

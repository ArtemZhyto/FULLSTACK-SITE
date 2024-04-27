import axios from "axios"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
	addCurrentUser,
	exitFromUser,
	selectCurrentUser,
} from "../../../app/redux/slices/currentUser"
import BucketProduct from "../../../widgets/bucketProduct/UI/BucketProduct"
import { Col, Container, Row } from "react-bootstrap"
import styles from "../Bucket.module.scss"
import { substring } from "../../../shared/utils/substring"
import "../BucketThemes.scss"

const Bucket = () => {
	const dispatch = useDispatch()
	const curUserBucket = useSelector(selectCurrentUser).products
	useEffect(() => {
		const handleNewCurUser = async () => {
			let localStorageUser = localStorage.getItem("currentUser")
			if (localStorageUser !== "undefined" && localStorageUser) {
				localStorageUser = JSON.parse(localStorageUser)
				try {
					const res = await axios.get(
						`https://localhost:34673/enter/${localStorageUser.password}/${localStorageUser.mail}`
					)
					localStorage.setItem("currentUser", JSON.stringify(res.data))
					dispatch(addCurrentUser(res.data))
				} catch (error) {
					localStorage.clear()
					dispatch(exitFromUser())
				}
			}
		}
		handleNewCurUser()
		window.addEventListener("addCurUser", handleNewCurUser)
		return () => window.removeEventListener("addCurUser", handleNewCurUser)
	}, [])
	const sumOfProducts = curUserBucket.reduce((acc, elem) => acc + elem.price, 0)
	return (
		<main style={{ paddingTop: 300, paddingBottom: 300 }}>
			<div
				className={substring(
					"d-flex flex-column align-items-center gap-3 mainInfo",
					styles.mainInfo
				)}
			>
				<p className="mainInfo__infoBlock">
					Общая цена :{" "}
					<div className={substring("mainInfo__info", styles.mainInfo__info)}>
						{sumOfProducts}$
					</div>
				</p>
				<p className="mainInfo__infoBlock">
					Товаров :{" "}
					<div className={substring("mainInfo__info", styles.mainInfo__info)}>
						{curUserBucket.length}
					</div>
				</p>
				<button className={styles.mainInfo__yelbut}>Купить</button>
				<button
					className={substring(
						"mainInfo__yelbut--remove",
						styles.mainInfo__yelbut
					)}
				>
					Очистить корзину
				</button>
			</div>
			<Container>
				<Row className="gap-5 flex-wrap">
					{curUserBucket.map((product) => (
						<BucketProduct images={product.images} name={product.name} />
					))}
				</Row>
			</Container>
		</main>
	)
}

export default Bucket

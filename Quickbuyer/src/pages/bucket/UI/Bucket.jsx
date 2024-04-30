import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
	addCurrentUser,
	exitFromUser,
	selectCurrentUser,
} from "@features/slices/currentUserSlice"
import BucketProduct from "@widgets/BucketProduct/UI/BucketProduct"
import { Col, Container, Row } from "react-bootstrap"
import styles from "../Bucket.module.scss"
import { substring } from "@shared/utils/jsFunctions/substring"
import "../BucketThemes.scss"

const Bucket = () => {
	const dispatch = useDispatch()
	const curUserBucketIds = useSelector(selectCurrentUser).products
	const [curUserBucket, setCurUserBucket] = useState([])
	const curUser = useSelector(selectCurrentUser)
	let localStorageUser = localStorage.getItem("currentUser")
	useEffect(() => {
		const handleNewCurUser = async () => {
			if (localStorageUser !== "undefined" && localStorageUser) {
				let localStorageUserParsed = JSON.parse(localStorageUser)
				try {
					const res = await axios.get(
						`https://localhost:34673/enter/${localStorageUserParsed.password}/${localStorageUserParsed.mail}`
					)
					localStorage.setItem("currentUser", JSON.stringify(res.data))
					dispatch(addCurrentUser(res.data))
					const curUserBucket = await axios.get(
						`https://localhost:34673/basket/${res.data.ID}`
					)
					setCurUserBucket(curUserBucket.data)
				} catch (error) {
					localStorage.clear()
					console.log(error)
					dispatch(exitFromUser())
				}
			}
		}
		handleNewCurUser()
		window.addEventListener("addCurUser", handleNewCurUser)
		return () => window.removeEventListener("addCurUser", handleNewCurUser)
	}, [])
	const sumOfProducts =
		curUserBucket !== "nothing" && curUserBucket.length >= 1
			? curUserBucket.reduce((acc, elem) => acc + elem.price, 0)
			: 0
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
						{curUserBucket !== "nothing" && curUserBucket
							? curUserBucket.length
							: 0}
					</div>
				</p>
				<button className={styles.mainInfo__yelbut}>Купить</button>
				<button
					className={substring(
						"mainInfo__yelbut--remove",
						styles.mainInfo__yelbut
					)}
					onClick={() => {
						const clearBucket = async () => {
							await axios.delete(
								`https://localhost:34673/basket/${curUser.ID}/clear`
							)
						}
						clearBucket()
						window.dispatchEvent(new Event("addCurUser"))
					}}
				>
					Очистить корзину
				</button>
			</div>
			<Container>
				<Row className="gap-5 flex-wrap">
					{curUserBucket !== "nothing" && curUserBucket.length >= 1
						? curUserBucket.map((product) => (
								<BucketProduct key={product.ID} id={product.ID} />
						  ))
						: null}
				</Row>
			</Container>
		</main>
	)
}

export default Bucket

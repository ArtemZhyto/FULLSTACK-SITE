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
import { selectSumOfBucket } from "@features/slices/mainPageSlice"
import { changeMainPage } from "../../../features/slices/mainPageSlice"

const Bucket = () => {
	const dispatch = useDispatch()
	const [curUserBucket, setCurUserBucket] = useState([])
	const curUser = useSelector(selectCurrentUser)
	let localStorageUser = localStorage.getItem("currentUser")
	useEffect(() => {
		const handleNewCurUser = async () => {
			if (localStorageUser !== "undefined" && localStorageUser) {
				let localStorageUserParsed = JSON.parse(localStorageUser)
				try {
					const res = await axios.get(
						`http://127.0.0.1:8000/enter?user_password=${localStorageUserParsed.password}&user_email=${localStorageUserParsed.mail}`
					)
					localStorage.setItem(
						"currentUser",
						JSON.stringify(res.data.objects[0])
					)
					dispatch(addCurrentUser(res.data.objects[0]))
					setCurUserBucket(JSON.parse(res.data.objects[0].products))
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
	const sumOfProducts = useSelector(selectSumOfBucket)
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
							await axios.post(
								"http://127.0.0.1:8000/clearbucket/",
								{
									user_id: curUser.id,
								},
								{
									headers: {
										Authorization: "ApiKey admin:1234",
									},
								}
							)
							window.dispatchEvent(new Event("addCurUser"))
						}
						clearBucket()
						dispatch(changeMainPage({sumOfBucket : 0}))
						window.dispatchEvent(new Event("addCurUser"))
					}}
				>
					Очистить корзину
				</button>
			</div>
			<Container>
				<Row className="gap-5 flex-wrap">
					{curUserBucket !== "nothing" && curUserBucket.length >= 1
						? curUserBucket.map((productId) => (
								<BucketProduct key={productId} id={productId} />
						  ))
						: null}
				</Row>
			</Container>
		</main>
	)
}

export default Bucket

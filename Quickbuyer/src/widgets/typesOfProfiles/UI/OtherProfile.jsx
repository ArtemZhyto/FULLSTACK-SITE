import { Col, Container, Row } from "react-bootstrap"
import { substring } from "@shared/utils/jsFunctions/substring"
import { useSelector } from "react-redux"
import { chooseTheme } from "@features/slices/mainPageSlice"
import { ToastContainer } from "react-toastify"
import styles from "../globalProfile.module.scss"
import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
const OtherProfile = () => {
	const location = useLocation()
	const sellerId = decodeURI(location.pathname.split(/\//)[2])
	const [currentSeller, setCurrentSeller] = useState({})
	useEffect(() => {
		const getSeller = async () => {
			try {
				const res = await axios.get(`http://127.0.0.1:8000/users/${sellerId}`)
				setCurrentSeller({
					...res.data,
					registr_data: res.data.registr_data.split(/-/)[0],
				})
			} catch (err) {
				console.log(err)
			}
		}
		if (currentSeller) {
			getSeller(currentSeller)
		}
	}, [])
	const theme = useSelector(chooseTheme) === "white" ? "light" : "dark"
	const checkIsNo = (val) => (val === "no" || val === null ? "Не указан" : val)
	return (
		<>
			<ToastContainer theme={theme} />
			{currentSeller ? (
				<article className={substring(styles.otherProfile, "otherProfile")}>
					<Container>
						<Row className="justify-content-center">
							<Col
								xs={12}
								lg={6}
								className={substring(styles.otherProfile__globalinfo, [
									"otherProfile__globalinfo",
								])}
							>
								<div className={styles.otherProfile__imageWithName}>
									{currentSeller?.image === "no" ||
									currentSeller?.image === null ||
									!currentSeller?.image ? (
										<>
											<label
												className={substring(
													styles.otherProfile__defaultPhoto,
													"otherProfile__defaultPhoto"
												)}
											></label>
											<p>{currentSeller.name}</p>
										</>
									) : (
										<div>
											<img
												className={styles.otherProfile__photo}
												src={currentSeller.image}
											></img>
											<p>{currentSeller.name}</p>
										</div>
									)}
								</div>
								<div className="otherProfile__yearsSoldProducts">
									<p className={styles.otherProfile__years}>
										Лет на нашем сайте {currentSeller.registr_data - 2023}
									</p>
									<p className={styles.otherProfile__soldProducts}>
										Продано товаров :
										<span className={styles.otherProfile__title}>
											{currentSeller.sold}
										</span>
									</p>
								</div>
							</Col>
							<Col xs={12} lg={6}>
								<ul
									className={substring(
										styles.otherProfile__additionalinfo,
										"otherProfile__additionalinfo"
									)}
								>
									<li className={styles.otherProfile__info}>
										<div
											className={substring(
												styles.otherProfile__discribePhoto,
												"otherProfile__emailPhoto"
											)}
										></div>
										Почта: {checkIsNo(currentSeller.contact_mail)}
									</li>
									<li className={styles.otherProfile__info}>
										<div
											className={substring(
												styles.otherProfile__discribePhoto,
												"otherProfile__phone"
											)}
										></div>
										Номер телефона: {checkIsNo(currentSeller.phone)}
									</li>
									<li className={styles.otherProfile__info}>
										<div
											className={substring(
												styles.otherProfile__discribePhoto,
												"otherProfile__region"
											)}
										></div>
										Регион: {checkIsNo(currentSeller.region)}
									</li>
									<li className={styles.otherProfile__info}>
										<div
											className={substring(
												styles.otherProfile__discribePhoto,
												"otherProfile__instagram"
											)}
										></div>
										Instagram: {checkIsNo(currentSeller.instagram)}
									</li>
									<li className={styles.otherProfile__info}>
										<div
											className={substring(
												styles.otherProfile__discribePhoto,
												"otherProfile__telegram"
											)}
										></div>
										Telegram: {checkIsNo(currentSeller.telegram)}
									</li>
								</ul>
							</Col>
						</Row>
					</Container>
				</article>
			) : null}
		</>
	)
}

export default OtherProfile

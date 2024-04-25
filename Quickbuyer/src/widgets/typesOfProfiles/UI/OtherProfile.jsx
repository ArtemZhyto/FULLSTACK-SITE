import { Col, Container, Row } from "react-bootstrap"
import { substring } from "../../../shared/utils/substring"
import { useSelector } from "react-redux"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo"
import { ToastContainer } from "react-toastify"
import styles from "../globalProfile.module.scss"
import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
const OtherProfile = () => {
	const location = useLocation().pathname
	const sellerName = location.split(/\//)[2]
	const [currentSeller, setCurrentSeller] = useState({})
	useEffect(() => {
		const getSeller = async () => {
			try {
				const res = await axios.get(
					`https://localhost:34673/user/${sellerName}`
				)
				setCurrentSeller(res.data)
			} catch (err) {
				console.log(err)
			}
		}
		if (currentSeller) {
			getSeller(currentSeller)
		}
	}, [])
	const theme = useSelector(chooseTheme) === "white" ? "light" : "dark"
	const checkIsNo = (val) => (val === "no" ? "Не указан" : val)
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
									{currentSeller?.image === "no" || !currentSeller?.image ? (
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
										Лет на нашем сайте {currentSeller.regist_data - 2020}
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
										Почта:{currentSeller.contactMail}
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

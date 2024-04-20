import { Col, Container, Row } from "react-bootstrap"
import { substring } from "../../../shared/utils/substring"
import { useSelector } from "react-redux"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo"
import { ToastContainer } from "react-toastify"
import styles from "../globalProfile.module.scss"
const OtherProfile = ({ currentUser, setCurrentUser }) => {
	const theme = useSelector(chooseTheme) === "white" ? "light" : "dark"
	const checkIsNo = (val) => (val === "no" ? "Не указан" : val)
	return (
		<>
			<ToastContainer theme={theme} />
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
								{currentUser?.img === "no" || !currentUser?.img ? (
									<>
										<label
											className={substring(
												styles.otherProfile__defaultPhoto,
												"otherProfile__defaultPhoto"
											)}
										></label>
										<p>{currentUser.name}</p>
									</>
								) : (
									<div>
										<img
											className={styles.otherProfile__photo}
											src={currentUser.img}
										></img>
										<p>{currentUser.name}</p>
									</div>
								)}
							</div>
							<div className="otherProfile__yearsSoldProducts">
								<p className={styles.otherProfile__years}>
									Лет на нашем сайте {currentUser.regist_data - 2023}
								</p>
								<p className={styles.otherProfile__soldProducts}>
									Продано товаров :
									<span className={styles.otherProfile__title}>
										{currentUser.sold}
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
									Почта:{currentUser.mail}
								</li>
								<li className={styles.otherProfile__info}>
									<div
										className={substring(
											styles.otherProfile__discribePhoto,
											"otherProfile__phone"
										)}
									></div>
									Номер телефона: {checkIsNo(currentUser.phone)}
								</li>
								<li className={styles.otherProfile__info}>
									<div
										className={substring(
											styles.otherProfile__discribePhoto,
											"otherProfile__region"
										)}
									></div>
									Регион: {checkIsNo(currentUser.region)}
								</li>
								<li className={styles.otherProfile__info}>
									<div
										className={substring(
											styles.otherProfile__discribePhoto,
											"otherProfile__instagram"
										)}
									></div>
									Instagram: {checkIsNo(currentUser.instagram)}
								</li>
								<li className={styles.otherProfile__info}>
									<div
										className={substring(
											styles.otherProfile__discribePhoto,
											"otherProfile__telegram"
										)}
									></div>
									Telegram: {checkIsNo(currentUser.telegram)}
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</article>
		</>
	)
}

export default OtherProfile

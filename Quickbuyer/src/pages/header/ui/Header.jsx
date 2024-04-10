import styles from "./Header.module.scss"
import { Col, Container, Row, Image } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import "./darkwhitestyles.scss"
import YellowBtn from "../../../shared/ui/yellowBtn/YellowBtn"
const Header = () => {
	return (
		<header className={styles.header}>
			5<Container fluid>
				<Row>
					<Col xs={12} lg={6}>
						<div className={styles.header__info}>
							<h1 className={styles.header__title}>Эмоции в каждом товаре</h1>
							<h3 className="header__subtitle">
								Ваш лучший адрес для шопинга в онлайне
							</h3>
							<YellowBtn>
								<p>Начать</p>
							</YellowBtn>
						</div>
					</Col>
					<Col xs={12} lg={6} className={`imgblock ${styles.header__imgblock}`}>
						<Image
							className={styles.header__guy}
							src="/photos/guy.png"
							alt="man"
						></Image>
					</Col>
				</Row>
			</Container>
		</header>
	)
}

export default Header

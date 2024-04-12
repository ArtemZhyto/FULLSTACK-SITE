import queryString from "query-string"
import React, { useState } from "react"
import styles from "../Navbar.module.scss"
import { Col, Row, Container } from "react-bootstrap"
import "../Navbar.module.scss"
import "../NavbarThemes.scss"
import { Outlet, useLocation, useNavigate } from "react-router"
import FeaturesBlock from "../../../widgets/FeaturesBlock/UI/FeaturesBlock"
import { GiHamburgerMenu } from "react-icons/gi"
const Navbar = () => {
	const location = useLocation()
	const searchLoaction = queryString.parse(location.search)
	const navigate = useNavigate()
	return (
		<>
			<Container className={styles.navbarWrapper} fluid>
				<Row>
					<Col xs={0} lg={5}></Col>
					<Col xs={12} lg={7}>
						<nav className={styles.navbar}>
							<GiHamburgerMenu className={styles.navbar__hamburger} />
							<div className={styles.navbar__btn}>
								<p className="">Товары</p>
								<div
									className={`navbar__productsbtn ${styles.navbar__btnphoto}`}
								></div>
							</div>
							<div className={styles.navbar__btn}>
								<p className="">Категории</p>
								<div
									className={`navbar__categorys ${styles.navbar__btnphoto}`}
								></div>
							</div>
							<div className={styles.navbar__inputblock}>
								<input
									type="text"
									placeholder="поиск"
									value={searchLoaction.q}
									onChange={(e) => {
										navigate(`?q=${e.target.value}`)
									}}
									className={` navbar__input ${styles.navbar__input}`}
								/>
								<button
									type="submit"
									className={`navbar__searchbtn ${styles.navbar__searchbtn} ${styles.navbar__btnphoto}`}
								></button>
							</div>

							<FeaturesBlock />
						</nav>
					</Col>
				</Row>
			</Container>
			<Outlet />
		</>
	)
}

export default Navbar
import queryString from "query-string"
import React, { useState } from "react"
import styles from "../Navbar.module.scss"
import { Col, Row, Container } from "react-bootstrap"
import "../Navbar.module.scss"
import "../NavbarThemes.scss"
import { Outlet, useLocation, useNavigate } from "react-router"
import FeaturesBlock from "../../../widgets/FeaturesBlock/UI/FeaturesBlock"
import { GiHamburgerMenu } from "react-icons/gi"
import {
	changeSearch,
	toggleBurger,
	toggleCategorys,
	toggleFilters,
} from "../../../features/slices/mainpage/mainPageInfo"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const Navbar = () => {
	const dispatch = useDispatch()
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
							<GiHamburgerMenu
								className={styles.navbar__hamburger}
								onClick={() => {
									dispatch(toggleBurger())
								}}
							/>
							{location.pathname === "/products" ? (
								<div
									onClick={() => {
										dispatch(toggleFilters())
									}}
									className={styles.navbar__btn}
								>
									<p className="">Фильтры</p>
									<div
										className={`navbar__filters ${styles.navbar__btnphoto}`}
									></div>
								</div>
							) : (
								<Link to="/products" className={styles.navbar__btn}>
									<p className="">Товары</p>
									<div
										className={`navbar__productsbtn ${styles.navbar__btnphoto}`}
									></div>
								</Link>
							)}

							<div
								className={styles.navbar__btn}
								onClick={() => {
									dispatch(toggleCategorys())
								}}
							>
								<p className="">Категории</p>
								<div
									className={`navbar__categorys ${styles.navbar__btnphoto}`}
								></div>
							</div>
							<div className={styles.navbar__inputblock}>
								<input
									type="text"
									placeholder="поиск"
									value={searchLoaction?.q}
									onChange={(e) => {
										navigate(`?q=${e.target.value}`)
										dispatch(changeSearch(e.target.value))
									}}
									className={` navbar__input ${styles.navbar__input}`}
								/>
								<button
									type="submit"
									onClick={() => navigate(`/products?q=${searchLoaction?.q}`)}
									className={`navbar__searchbtn ${styles.navbar__searchbtn} ${styles.navbar__btnphoto}`}
								></button>
							</div>

							<FeaturesBlock />
						</nav>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Navbar

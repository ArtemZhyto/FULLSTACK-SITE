
import { useState } from "react"
import "../../reset.css"
import "./navBar.scss"
function Buttons({ headerInputVal, search, switchTheme }) {
	const [showPanel, setShowPanel] = useState(false)
	return (
		<>
			<button className="header__categoriestuff">
				<p className="mx-3">Товары</p>
				{/* <div className={styles["header__btnblock-action"]}></div> */}
				<div className="header__btnblock-action header__stuff"></div>
			</button>
			<button className="header__categoriestuff mx-2">
				<p className="mx-2">Категории</p>
				<div className="header__btnblock-action header__categorys"></div>
			</button>
			<div className="header__findblock">
				<input
					className="header__search-input"
					value={headerInputVal}
					onChange={search}
					placeholder="Поиск"
				/>
				<button
					type="submit"
					className="header__btnblock-action header__btnblock-findsubmit"
				></button>
			</div>
			{showPanel ? (
				<div className="header__btnblock header__btnblock--active ms-3">
					<a
						href="#"
						className="header__btnblock-action header__btnblock-min"
						onClick={() => {
							setShowPanel(false)
						}}
					></a>
					<div className="header__btnblock-grid mt-2 mx-3">
						<a
							href="#"
							className="header__btnblock-action header__btnblock-profile"
						></a>
						<a
							href="#"
							className="header__btnblock-action header__btnblock-shop"
						></a>
						<a
							href="#"
							className="header__btnblock-action header__btnblock-theme"
							onClick={switchTheme}
						></a>
						<a
							href="#"
							className="header__btnblock-action header__btnblock-add"
						></a>
					</div>
				</div>
			) : (
				<div className="header__btnblock">
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault()
							setShowPanel(true)
						}}
						className="header__btnblock-action header__btnblock-min mx-3"
					></a>
				</div>
			)}
		</>

	)
}

export default Buttons

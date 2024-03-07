import "./burgerGlobal.scss"

function BurgerBtn({ toShowPanel }) {
	return (
		<a className="header__burgerbtn" href="#" onClick={toShowPanel}>
			<div className="header__burger-line"></div>
			<div className="header__burger-line"></div>
			<div className="header__burger-line"></div>
		</a>
	)
}

export default BurgerBtn

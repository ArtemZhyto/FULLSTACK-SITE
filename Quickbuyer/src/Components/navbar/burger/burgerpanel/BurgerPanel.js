import "../../../../reset.css"
import "./BurgerPanelGlobal.scss"
import "../../../../reset.css"
import "./BurgerPanelGlobal.scss"

function BurgerPanel({ panelStatus, close, switchTheme }) {
	return panelStatus ? (
		<>
			<div className="panel panel-show">
				<div className="panel__profile">
					<div className="panel__profile-pfp"></div>
					<div className="panel__profile-links">
						<a href="#">Войти</a>
						<a href="#">ИЛИ</a>
						<a href="#">Регистрация</a>
					</div>
				</div>
				<ul className="panel__buttons">
					<li>
						<a href="#">
							Товары{" "}
							<div className="panel__buttons-item panel__buttons-stuff"></div>
						</a>
					</li>
					<li>
						<a href="#">
							Категории{" "}
							<div className="panel__buttons-item panel__buttons-category"></div>
						</a>
					</li>
					<li>
						<a href="#">
							Профиль{" "}
							<div className="panel__buttons-item panel__buttons-profile"></div>
						</a>
					</li>
					<li>
						<a href="#">
							Корзина{" "}
							<div className="panel__buttons-item panel__buttons-bucket"></div>
						</a>
					</li>
					<li>
						<a href="#" onClick={switchTheme}>
							Тема{" "}
							<div className="panel__buttons-item panel__buttons-theme"></div>
						</a>
					</li>
					<li>
						<a href="#">
							Создать товар{" "}
							<div className="panel__buttons-item panel__buttons-create"></div>
						</a>
					</li>
				</ul>
			</div>
			<div className="cover" onClick={close}></div>
		</>
	) : (
		<>
			<div className="panel">
				<div className="panel__profile">
					<div className="panel__profile-pfp"></div>
					<div className="panel__profile-links">
						<a href="#">Войти</a>
						<a href="#">ИЛИ</a>
						<a href="#">Регистрация</a>
					</div>
				</div>
				<ul className="panel__buttons">
					<li>
						<a href="#">
							Товары{" "}
							<div className="panel__buttons-item panel__buttons-stuff"></div>
						</a>
					</li>
					<li>
						<a href="#">
							Категории{" "}
							<div className="panel__buttons-item panel__buttons-category"></div>
						</a>
					</li>
					<li>
						<a href="#">
							Профиль{" "}
							<div className="panel__buttons-item panel__buttons-profile"></div>
						</a>
					</li>
					<li>
						<a href="#">
							Корзина{" "}
							<div className="panel__buttons-item panel__buttons-bucket"></div>
						</a>
					</li>
					<li>
						<a href="#">
							Тема{" "}
							<div className="panel__buttons-item panel__buttons-theme"></div>
						</a>
					</li>
					<li>
						<a href="#">
							Создать товар{" "}
							<div className="panel__buttons-item panel__buttons-create"></div>
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default BurgerPanel

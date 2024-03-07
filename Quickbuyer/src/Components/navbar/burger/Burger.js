import BurgerBtn from "./BurgerBtn"
import "./burgerGlobal.scss"
import { useState } from "react"
import BurgerPanel from "./burgerpanel/BurgerPanel"

function Burger({switchTheme}) {
	const [showPanel, setShowPanel] = useState(false)
	function toShowPanel() {
		setShowPanel(true)
	}
	function toClosePanel() {
		setShowPanel(false)
	}
	return (
		<>
			<BurgerBtn toShowPanel={toShowPanel} />
			<BurgerPanel panelStatus={showPanel} close={toClosePanel} switchTheme={switchTheme}/>
		</>
	)
}
export default Burger

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectIsBurgerOpened } from "../../../features/slices/mainpage/mainPageInfo"
import styles from "../LeftPanelWrapper.module.scss"
import { substring } from "../../../shared/utils/substring"
import "../LeftPanelWrapperThemes.scss"
import { toggleBurger } from "../../../features/slices/mainpage/mainPageInfo"
const LeftPanelWrapper = ({ children }) => {
	const dispatch = useDispatch()
	const isOpened = useSelector(selectIsBurgerOpened)
	return (
		<div
			className={
				!isOpened
					? substring(styles.leftPanel, "leftPanel")
					: substring(styles.leftPanelOpened, "leftPanel", styles.leftPanel)
			}
		>
			{children}
			<button
				onClick={() => dispatch(toggleBurger())}
				className={substring(styles.leftPanel__larrow, "leftPanel__larrow")}
			></button>
		</div>
	)
}

export default LeftPanelWrapper

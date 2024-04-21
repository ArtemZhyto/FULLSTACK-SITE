import { useDispatch } from "react-redux"
import styles from "../LeftPanelWrapper.module.scss"
import { substring } from "../../../shared/utils/substring"
import "../LeftPanelWrapperThemes.scss"
const LeftPanelWrapper = ({
	children,
	isOpened,
	togglePanel,
	additionalStyles,
}) => {
	const dispatch = useDispatch()
	return (
		<div
			className={
				!isOpened
					? substring(styles.leftPanel, "leftPanel", additionalStyles)
					: substring(
							styles.leftPanelOpened,
							"leftPanel",
							styles.leftPanel,
							additionalStyles
					)
			}
		>
			{children}
			<button
				onClick={() => dispatch(togglePanel())}
				className={substring(styles.leftPanel__larrow, "leftPanel__larrow")}
			></button>
		</div>
	)
}

export default LeftPanelWrapper

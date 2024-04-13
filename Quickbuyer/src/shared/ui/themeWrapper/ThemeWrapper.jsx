import { useSelector } from "react-redux"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo"
const ThemeWrapper = ({ children }) => {
	const selector = useSelector(chooseTheme)
	return <div id={selector}>{children}</div>
}

export default ThemeWrapper

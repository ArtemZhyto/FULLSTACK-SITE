import { useState } from "react"
const ThemeWrapper = ({ children }) => {
	const [theme, setTheme] = useState("dark")
	return <div id={theme}>{children}</div>
}

export default ThemeWrapper

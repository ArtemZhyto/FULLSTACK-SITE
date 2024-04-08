import { Children } from "react"
import { styles } from "./yellowBtn.module.scss"

const yellowBtn = () => {
	return <button className={styles.yellowBtn}>{Children}</button>
}

export default yellowBtn

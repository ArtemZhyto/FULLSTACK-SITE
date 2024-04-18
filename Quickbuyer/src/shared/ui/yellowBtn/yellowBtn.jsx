import styles from "./yellowBtn.module.scss"

const YellowBtn = ({ children }) => {
	return <button className={styles.yellowBtn}>{children}</button>
}

export default YellowBtn

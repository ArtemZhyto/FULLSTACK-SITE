import React, { useState } from "react"
import style from "../featuresblock.module.scss"
import "../featuresblockThemes.scss"
import { Link  } from "react-router-dom"
const FeaturesBlock = () => {
	const [isOpened, setIsOpened] = useState(false)
	const toggleOpen = (e) => {
		e.preventDefault()
		setIsOpened(!isOpened)
	}
	return (
		<div
			className={
				isOpened
					? ` featuresBlock ${style.featuresBlockActive}`
					: ` featuresBlock ${style.featuresBlock}`
			}
		>
			{isOpened ? (
				<ul className={` featuresBlockInner ${style.featuresBlock__inner}`}>
					<li className={style.featuresBlock__btn}>
						<Link
							href=""
							className={`${style.featuresBlock__btn} featuresBlock__cart`}
						></Link>
					</li>
					<li className={style.featuresBlock__btn}>
						<Link
							href=""
							className={`${style.featuresBlock__btn} featuresBlock__profile`}
						></Link>
					</li>
					<li className={style.featuresBlock__btn}>
						<Link
							href=""
							className={`${style.featuresBlock__btn} featuresBlock__theme`}
						></Link>
					</li>
					<li className={style.featuresBlock__btn}>
						<Link
							href=""
							className={`${style.featuresBlock__btn} featuresBlock__addproduct`}
						></Link>
					</li>
				</ul>
			) : null}
			<li
				className={
					isOpened
						? `${style.featuresBlock__btn} ${style.featuresBlock__togglebtn} `
						: `${style.featuresBlock__btn} ${style.featuresBlock__togglebtn} featuresBlock__plus `
				}
			>
				<button
					href=""
					className={`${style.featuresBlock__btn} featuresBlock__togglebtn`}
					onClick={toggleOpen}
				></button>
			</li>
			
		</div>
	)
}

export default FeaturesBlock

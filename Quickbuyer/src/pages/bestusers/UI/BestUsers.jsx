import React, { useRef } from "react"
import { settings } from "../../../shared/CONFIG/settings"
import Slider from "react-slick"
import { bestUsersList } from "../../../entities/data/bestUsersList"
import User from "../../../shared/ui/user/User"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./BestUsers.module.scss"
import Arrow from "../../../widgets/arrows/Arrows"

const BestUsers = () => {
	return (
		<article className="bestUsers">
			<p className={`title ${styles.bestUsers__title}`}>Топ продавцы</p>
			<Slider {...settings}>
				{bestUsersList.map((user) => {
					return <User key={user.id} {...user}></User>
				})}
			</Slider>
		</article>
	)
}

export default BestUsers

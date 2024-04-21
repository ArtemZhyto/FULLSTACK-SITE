import { useSelector } from "react-redux"
import LeftPanelWrapper from "../../leftPanelWrapper/UI/LeftPanelWrapper"
import {
	selectIsCategorysOpened,
	toggleCategorys,
} from "../../../features/slices/mainpage/mainPageInfo"
import AccordionItem from "../../../shared/ui/AccordionItem/AccordionItem"
import styles from "../Categorys.module.scss"
import { categories } from "../../../entities/data/categorysList"
const Categorys = () => {
	const isCategorysOpened = useSelector(selectIsCategorysOpened)
	return (
		<LeftPanelWrapper
			isOpened={isCategorysOpened}
			togglePanel={toggleCategorys}
			additionalStyles={styles.Categorys}
		>
			{categories.map((categorie, index) => (
				<AccordionItem
					key={index}
					title={categorie.title}
					value={categorie.value}
				></AccordionItem>
			))}
		</LeftPanelWrapper>
	)
}

export default Categorys

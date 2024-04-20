import React from "react"
import LeftPanelWrapper from "../../leftPanelWrapper/UI/LeftPanelWrapper"
import { useSelector } from "react-redux"
import { selectIsFiltersOpened } from "../../../features/slices/mainpage/mainPageInfo"
import { toggleFilters } from "../../../features/slices/mainpage/mainPageInfo"
import { countries } from "../../../entities/data/countries"
import styles from "../Filters.module.scss"
import { substring } from "../../../shared/utils/substring"
import "../FiltersThemes.scss"
const Filters = () => {
	const isFiltersOpened = useSelector(selectIsFiltersOpened)
	return (
		<LeftPanelWrapper isOpened={isFiltersOpened} togglePanel={toggleFilters}>
			<ul className={substring(styles.filters, "filters")}>
				<li
					className={substring(
						styles.filters__cost,
						styles.filters__sort,
						"filters__cost"
					)}
				>
					<p className="w-100">Цена:</p> 
                    <div className="filters__line"></div>
					<input type="number" className="filter__at" placeholder="0" />
					<input type="number" className="filter__to" placeholder="100000" />
				</li>
				<li
					className={substring(
						styles.filters__cost,
						styles.filters__sort,
						"filters__cost"
					)}
				>
					<p className="w-100">Страна: </p>
					<select className={styles.filters__countries}>
						{countries.map((countrie) => (
							<option>{countrie}</option>
						))}
					</select>
				</li>
				<ul className={substring(styles.filters__sort, "filters__sort")}>
					<p className="w-100">Тип: </p>
					<li>
						<input type="radio" name="type" value={1} id="Б/У" />
						<label className={styles.filters__radioBtn} htmlFor="Б/У">
							Б/У
						</label>
					</li>
					<li>
						<input type="radio" name="type" value={2} id="Отличное" />
						<label className={styles.filters__radioBtn} htmlFor="Отличное">
							Отличное
						</label>
					</li>
					<li>
						<input type="radio" name="type" id="Новое" value={3} />
						<label className={styles.filters__radioBtn} htmlFor="Новое">
							Новое
						</label>
					</li>
				</ul>
				<ul className={substring(styles.filters__sort, "filters__sort")}>
					<p className="w-100">Дата:</p>
					<li>
						<input type="radio" name="option" id="Давно" value={1} />
						<label htmlFor="Давно" className={styles.filters__radioBtn}>
							Давно
						</label>
					</li>
					<li>
						<input type="radio" name="option" id="Недавно" value={2} />
						<label className={styles.filters__radioBtn} htmlFor="Недавно">
							Недавно
						</label>
					</li>
					<li>
						<input type="radio" name="option" id="Все" value={3} />
						<label className={styles.filters__radioBtn} htmlFor="Все">
							Все
						</label>
					</li>
				</ul>
				<ul className={substring(styles.filters__sort, "filters__sort")}>
					<p className="w-100"> Сортировка :</p>
					<li>
						<input type="radio" name="Sorting" value={1} id="Цена" />
						<label className={styles.filters__radioBtn} htmlFor="Цена">
							Цена
						</label>
					</li>
					<li>
						<input type="radio" name="Sorting" value={2} id="Цена+" />
						<label className={styles.filters__radioBtn} htmlFor="Цена+">
							Цена
						</label>
					</li>
					<li>
						<input type="radio" name="Sorting" id="старых" value={3} />
						<label className={styles.filters__radioBtn} htmlFor="старых">
							От старых
						</label>
					</li>
					<li>
						<input type="radio" name="Sorting" value={3} id="новых" />
						<label className={styles.filters__radioBtn} htmlFor="новых">
							От новых
						</label>
					</li>
				</ul>
			</ul>
		</LeftPanelWrapper>
	)
}

export default Filters

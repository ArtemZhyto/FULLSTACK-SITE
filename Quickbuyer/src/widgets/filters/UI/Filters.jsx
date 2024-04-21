import React from "react"
import LeftPanelWrapper from "../../leftPanelWrapper/UI/LeftPanelWrapper"
import { useDispatch, useSelector } from "react-redux"
import { selectIsFiltersOpened } from "../../../features/slices/mainpage/mainPageInfo"
import { toggleFilters } from "../../../features/slices/mainpage/mainPageInfo"
import { countries } from "../../../entities/data/countries"
import styles from "../Filters.module.scss"
import { substring } from "../../../shared/utils/substring"
import "../FiltersThemes.scss"
import {
	changeFilter,
	chooseFilters,
} from "../../../app/redux/slices/FilterSlice"
const Filters = () => {
	const filters = useSelector(chooseFilters)

	const isFiltersOpened = useSelector(selectIsFiltersOpened)
	const dispatch = useDispatch()
	return (
		<LeftPanelWrapper isOpened={isFiltersOpened} togglePanel={toggleFilters}>
			<aside className={substring(styles.filters, "filters")}>
				<li
					className={substring(
						styles.filters__cost,
						styles.filters__sort,
						"filters__cost"
					)}
				>
					<p className="w-100">Цена:</p>
					<div className="filters__line"></div>
					<input
						type="number"
						className="filter__at"
						placeholder="0"
						onChange={(e) => {
							dispatch(changeFilter({ fromPrice: Number(e.target.value) }))
						}}
					/>
					<input
						type="number"
						className="filter__to"
						placeholder="100000"
						onChange={(e) => {
							dispatch(changeFilter({ toPrice: Number(e.target.value) }))
						}}
					/>
				</li>
				<li
					className={substring(
						styles.filters__cost,
						styles.filters__sort,
						"filters__cost"
					)}
				>
					<p className="w-100">Страна: </p>
					<select
						className={styles.filters__countries}
						onChange={(e) => {
							dispatch(changeFilter({ country: e.target.value }))
						}}
					>
						<option value="Все">Все</option>
						{countries.map((country) => (
							<option key={country}>{country}</option>
						))}
					</select>
				</li>
				<ul
					onChange={(e) => {
						dispatch(changeFilter({ type: e.target.value }))
					}}
					className={substring(styles.filters__sort, "filters__sort")}
				>
					<p className="w-100">Тип: </p>
					<li>
						<input
                        readOnly
							checked={filters.type === "Б/У"}
							type="radio"
							name="type"
							value={"Б/У"}
							id="Б/У"
						/>
						<label className={styles.filters__radioBtn} htmlFor="Б/У">
							Б/У
						</label>
					</li>
					<li>
						<input
							readOnly
							type="radio"
							checked={filters.type === "Отличное"}
							name="type"
							value={"Отличное"}
							id="Отличное"
						/>
						<label className={styles.filters__radioBtn} htmlFor="Отличное">
							Отличное
						</label>
					</li>
					<li>
						<input
							readOnly
							checked={filters.type === "Новое"}
							type="radio"
							name="type"
							id="Новое"
							value="Новое"
						/>
						<label className={styles.filters__radioBtn} htmlFor="Новое">
							Новое
						</label>
					</li>
				</ul>
				<ul
					onChange={(e) => {
						dispatch(changeFilter({ date: e.target.value }))
					}}
					className={substring(styles.filters__sort, "filters__sort")}
				>
					<p className="w-100">Дата:</p>
					<li>
						<input
							readOnly
							checked={filters.date === "Давно"}
							type="radio"
							name="option"
							id="Давно"
							value="Давно"
						/>
						<label htmlFor="Давно" className={styles.filters__radioBtn}>
							Давно
						</label>
					</li>
					<li>
						<input
							readOnly
							checked={filters.date === "Недавно"}
							type="radio"
							name="option"
							id="Недавно"
							value="Недавно"
						/>
						<label className={styles.filters__radioBtn} htmlFor="Недавно">
							Недавно
						</label>
					</li>
					<li>
						<input
							readOnly
							checked={filters.date === "Все"}
							type="radio"
							name="option"
							id="Все"
							value="Все"
						/>
						<label className={styles.filters__radioBtn} htmlFor="Все">
							Все
						</label>
					</li>
				</ul>
				<ul
					onChange={(e) => {
						dispatch(changeFilter({ sort: e.target.value }))
					}}
					className={substring(styles.filters__sort, "filters__sort")}
				>
					<p className="w-100"> Сортировка :</p>
					<li>
						<input
							readOnly
							checked={filters.sort === "Цена ↑"}
							type="radio"
							name="Sorting"
							value="Цена ↑"
							id="Цена ↑"
						/>
						<label className={styles.filters__radioBtn} htmlFor="Цена ↑">
							Цена ↑
						</label>
					</li>
					<li>
						<input
							readOnly
							checked={filters.sort === "Цена ↓"}
							type="radio"
							name="Sorting"
							value="Цена ↓"
							id="Цена ↓"
						/>
						<label className={styles.filters__radioBtn} htmlFor="Цена ↓">
							Цена ↓
						</label>
					</li>
					<li>
						<input
							readOnly
							checked={filters.sort === "оТстарых"}
							type="radio"
							name="Sorting"
							id="оТстарых"
							value="оТстарых"
						/>
						<label className={styles.filters__radioBtn} htmlFor="оТстарых">
							От старых
						</label>
					</li>
					<li>
						<input
							readOnly
							checked={filters.sort === "оТновых"}
							type="radio"
							name="Sorting"
							value="оТновых"
							id="оТновых"
						/>
						<label className={styles.filters__radioBtn} htmlFor="оТновых">
							От новых
						</label>
					</li>
				</ul>
			</aside>
		</LeftPanelWrapper>
	)
}

export default Filters

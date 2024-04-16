import "../SelectCountry.scss"

const SelectCountry = ({ countries, defaultValue }) => {
	return (
			<select className="yourProfile__select" name="" id="">
				<option value={defaultValue}>{defaultValue}</option>
				{countries.map((country) => (
					<option value={country}>{country}</option>
				))}
			</select>
	)
}

export default SelectCountry

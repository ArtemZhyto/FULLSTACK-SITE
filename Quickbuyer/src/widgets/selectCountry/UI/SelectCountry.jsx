import "../SelectCountry.scss"

const SelectCountry = ({ countries, defaultValue, onChange }) => {
	return (
		<select
			className="yourProfile__select"
			name=""
			id=""
			onChange={onChange}
		>
			<option value={defaultValue}>{defaultValue}</option>
			{countries.map((country) => (
				<option value={country}>{country}</option>
			))}
		</select>
	)
}

export default SelectCountry

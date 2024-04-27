import "../BucketProduct.scss"

const BucketProduct = ({ images, name }) => {
	return (
		<div className="bucketProduct">
			<div className="bucketProduct__imageWrapper">
				<img src={images[0]} alt="" className="bucketProduct__image" />
			</div>
			<div className="bucketProduct__name d-flex align-items-center justify-content-around w-100">
				{name} <a href="#" className="bucketProduct__removeBtn"></a>
			</div>
		</div>
	)
}

export default BucketProduct

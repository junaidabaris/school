function AddSession() {
    return <div className="card mb-4">
        <div className="card-header">
            <h5 className="card-title mb-0">Add Session </h5>
        </div>
        <div className="card-body">
          
            <div className="mb-3">
                <label
                    className="form-label"
                    htmlFor="ecommerce-product-discount-price"
                >
                    Session 
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="ecommerce-product-discount-price"
                    name="productDiscountedPrice"
                    aria-label="Product discounted price"
                />
            </div>
            <button type="button" class="btn btn-primary">Save</button>
        </div>
    </div>
}
export default AddSession
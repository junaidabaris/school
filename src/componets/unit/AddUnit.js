function AddUnit() {
    return <div className="card mb-4">
        <div className="card-header">
            <h5 className="card-title mb-0">Add Unit</h5>
        </div>
        <div className="card-body">
            {/* Base Price */}
            <div className="mb-3">
                <label className="form-label" htmlFor="ecommerce-product-price">
                    Branch
                </label>
                <select className="form-select" aria-label="Default select example">
                    <option selected="">Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>

            </div>
            {/* Discounted Price */}
            <div className="mb-3">
                <label
                    className="form-label"
                    htmlFor="ecommerce-product-discount-price"
                >
                    Unit Name
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="ecommerce-product-discount-price"
                    placeholder="Discounted Price"
                    name="productDiscountedPrice"
                    aria-label="Product discounted price"
                />
            </div>
            <button type="button" class="btn btn-primary">Save</button>
        </div>
    </div>
}
export default AddUnit
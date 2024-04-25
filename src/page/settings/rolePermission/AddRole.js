function AddRole() {
    return <div>
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="app-ecommerce">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
                        <div className="d-flex flex-column justify-content-center">
                            <h4 className="mb-1 mt-3">Add a New Role</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="card mb-4">

                                <div className="card-body">

                                    <div className="row mb-3">
                                       
                                        <div className="col-12">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Role Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ecommerce-product-barcode"

                                                name="productBarcode"
                                                aria-label="Product barcode"
                                            />
                                        </div>

                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Save
                                    </button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
}
export default AddRole
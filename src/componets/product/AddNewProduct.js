import Form from 'react-bootstrap/Form';
function AddNewProduct() {
    return <div>
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">

                <div className="app-ecommerce">
                    {/* Add Product */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
                        <div className="d-flex flex-column justify-content-center">
                            <h4 className="mb-1 mt-3">Add a new Product</h4>
                            <p className="text-muted">Orders placed across your store</p>
                        </div>
                        <div className="d-flex align-content-center flex-wrap gap-3">
                            <div className="d-flex gap-3">
                                <button className="btn btn-label-secondary">Discard</button>
                                <button className="btn btn-label-primary">Save draft</button>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Publish product
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {/* First column*/}
                        <div className="col-12 col-lg-12">
                            {/* Product Information */}
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5 className="card-tile mb-0">Product information</h5>
                                </div>
                                <div className="card-body">

                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <label className="form-label" htmlFor="ecommerce-product-sku">
                                                Branch
                                            </label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Open this select</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div className="col-6">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Product Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ecommerce-product-barcode"

                                                name="productBarcode"
                                                aria-label="Product barcode"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Product Code
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ecommerce-product-barcode"

                                                name="productBarcode"
                                                aria-label="Product barcode"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Product Category
                                            </label>
                                            <Form.Select aria-label="Default select example">
                                                <option>First select the branch</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div className="col-6">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Purchase Unit
                                            </label>
                                            <Form.Select aria-label="Default select example">
                                                <option>First select the branch</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div className="col-6">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Sales Unit
                                            </label>
                                            <Form.Select aria-label="Default select example">
                                                <option>First select the branch</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div className="col-6">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Unit Ratio
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ecommerce-product-barcode"

                                                name="productBarcode"
                                                aria-label="Product barcode"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Purchase Price
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ecommerce-product-barcode"

                                                name="productBarcode"
                                                aria-label="Product barcode"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Sales Price
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="ecommerce-product-barcode"

                                                name="productBarcode"
                                                aria-label="Product barcode"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Remarks
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
export default AddNewProduct
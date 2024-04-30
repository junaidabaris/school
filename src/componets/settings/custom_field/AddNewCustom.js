import Form from 'react-bootstrap/Form';
function AddNewCustom() {
    return <div>
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">

                <div className="app-ecommerce">
                    {/* Add Product */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
                        <div className="d-flex flex-column justify-content-center">
                            <h4 className="mb-1 mt-3">Add a New Custom Field</h4>
                        </div>

                    </div>
                    <div className="row">
                        {/* First column*/}
                        <div className="col-12 col-lg-12">
                            {/* Product Information */}
                            <div className="card mb-4">

                                <div className="card-body">

                                    <div className="row mb-3">

                                        <div className="col-12">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Branch
                                            </label>
                                            <Form.Select aria-label="Default select example" className='input_select'>
                                                <option>First select the branch</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>



                                    </div>
                                    <div className="row mb-3">

                                        <div className="col-12">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Custom Field For
                                            </label>
                                            <Form.Select aria-label="Default select example" className='input_select'>
                                                <option>First select the Custom Field For </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="row mb-3">

                                        <div className="col-12">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Field Label
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
                                    <div className="row mb-3">

                                        <div className="col-12">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Field Label
                                            </label>
                                            <Form.Select aria-label="Default select example" className='input_select'>
                                                <option>First select the Field Label  </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="row mb-3">

                                        <div className="col-12">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Grid (Bootstrap Column)
                                            </label>
                                            <Form.Select aria-label="Default select example" className='input_select'>
                                                <option>First select the Grid (Bootstrap Column)   </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="row mb-3">

                                        <div className="col-12">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Order
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
                                    <div className="row mb-3">

                                        <div className="col-12">
                                            <label
                                                className="form-label"
                                                htmlFor="ecommerce-product-barcode"
                                            >
                                                Default Value
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
                                    <div className="row mb-3">

                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                This Field is Required ?
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault2">
                                                Show on table
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" checked id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Active

                                                </label>
                                            </div>
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
export default AddNewCustom
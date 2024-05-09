
function AddAdmitCard() {

    return <div>
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">

                <div className="app-ecommerce">
                    {/* Add Product */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
                        <div className="d-flex flex-column justify-content-center">
                            <h4 className="mb-1 mt-3">Add New Admit Card</h4>
                        </div>

                    </div>
                    <div className="row">
                        {/* First column*/}
                        <div className="col-12 col-lg-12">
                            {/* Product Information */}
                            <div className="card mb-4" style={{padding:"10px"}}>

                                <form className="row">

                                    <div className="form-group col-4">
                                        <label htmlFor="category">Brand</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="academicYear">Admit Card Name</label>
                                        <input type="text" className="form-control" id="academicYear" />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="category">QR Code Text</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                              
                                    <div className="form-group col-12 row">
                                        <label htmlFor="academicYear">Page Layout</label>
                                        <div className="col-6">

                                            <input type="text" className="form-control" id="academicYear" placeholder="layout width (mm)" />
                                        </div>
                                        <div className="col-6">

                                            <input type="text" className="form-control" id="academicYear" placeholder="layout higth (mm)" />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group col-12 row">
                                        <label htmlFor="academicYear">User Photo Style</label>
                                        <div className="col-6">

                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-6">

                                            <input type="text" className="form-control" id="academicYear" placeholder="Photo size (px)" />
                                        </div>
                                    </div>
                                    <div className="form-group col-12 row">
                                        <label htmlFor="academicYear">Layout Spacing</label>
                                        <div className="col-3">

                                            <input type="text" className="form-control" id="academicYear" placeholder="Top Space (px)" />
                                        </div>
                                        <div className="col-3">

                                            <input type="text" className="form-control" id="academicYear" placeholder="Bottom Space (px)" />
                                        </div>
                                        <div className="col-3">

                                            <input type="text" className="form-control" id="academicYear" placeholder="Rigth Space (px)" />
                                        </div>
                                        <div className="col-3">

                                            <input type="text" className="form-control" id="academicYear" placeholder="Left Space (px)" />
                                        </div>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="academicYear">Signature Image</label>
                                        <input type="file" className="form-control" id="academicYear" />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="academicYear">Logo Image</label>
                                        <input type="file" className="form-control" id="academicYear" />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="academicYear">Background Image</label>
                                        <input type="file" className="form-control" id="academicYear" />
                                    </div>
                                    <div className="form-group col-12">
                                        <label htmlFor="academicYear">Certificate Content</label>
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    </div>
                                    <div className="form-group col-12">
                                        <button type="submit" className="btn btn-primary">
                                            Save
                                        </button>
                                    </div>

                                </form>

                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
}
export default AddAdmitCard
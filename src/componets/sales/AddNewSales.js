import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'

function AddNewSales() {
    const defalutValue = {
        Role: '',
        branchs: '',
        BillNo: '',
        Email: '',
        PurchaseStatus: '',
        ProductList: '',
        Address: '',
        SaleTo: '',
        Date: '',
        Remarks: '',

    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        Role: yup.string().required('Role is Requird!'),
        SaleTo: yup.string().required('Sale To is Requird!'),
        branchs: yup.string().required('branch is Requird!'),
        BillNo: yup.number().required('Bill No is Requird!'),
        Email: yup.string().required('Email is Requird!'),
        PurchaseStatus: yup.string().required('Purchase Status is Requird!'),
        ProductList: yup.string().required('Product List  is Requird!'),
        Address: yup.string().required('Address Name is Requird!'),
        Date: yup.date().required('Date is Requird!'),
        Remarks: yup.date().required('Remarks is Requird!'),


    })
    const handleSubmit = (value) => {
        console.log(value);

    }
    return <div>
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">

                <div className="app-ecommerce">
                    {/* Add Product */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
                        <div className="d-flex flex-column justify-content-center">
                            <h4 className="mb-1 mt-3">Add a new Sales</h4>
                        </div>

                    </div>
                    <div className="row">
                        {/* First column*/}
                        <div className="col-12 col-lg-12">
                            {/* Product Information */}
                            <div className="card mb-4">

                                <Formik id="frmrecahrge" initialValues={defalutValue} validationSchema={validationSceema} onSubmit={handleSubmit} className="CustomForm fl-form ng-pristine ng-valid row">
                                    {({ errors, touched, resetForm }) => {
                                        return <Form className="row">
                                            <div className="card-body">

                                                <div className="row mb-3">
                                                    <div className="col-6">
                                                        <label className="form-label" htmlFor="ecommerce-product-sku">
                                                            Branch
                                                        </label>

                                                        <Field component='select' name='branchs' className={
                                                            `form-control
                                                    ${errors.branchs && touched.branchs ? ' is-invalid' : ''}`
                                                        }>
                                                            <option >--Select--</option>
                                                            <option value={71}>Airtel Prepaid</option>
                                                            <option value={82}>BSNL Prepaid</option>
                                                            <option value={83}>Vi Prepaid</option>
                                                            <option value={94}>JIO</option>
                                                        </Field>

                                                        <p style={{ color: 'red' }}> <ErrorMessage name="branchs" /></p>

                                                    </div>
                                                    <div className="col-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Role
                                                        </label>
                                                        <Field component='select' name='Role' className={
                                                            `form-control
                                                    ${errors.Role && touched.Role ? ' is-invalid' : ''}`
                                                        }>
                                                            <option >--Select--</option>
                                                            <option value={71}>Airtel Prepaid</option>
                                                            <option value={82}>BSNL Prepaid</option>
                                                            <option value={83}>Vi Prepaid</option>
                                                            <option value={94}>JIO</option>
                                                        </Field>
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="Role" /></p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Sale To
                                                        </label>
                                                        <Field component='select' name='SaleTo' className={
                                                            `form-control
                                                    ${errors.SaleTo && touched.SaleTo ? ' is-invalid' : ''}`
                                                        }>
                                                            <option >--Select--</option>
                                                            <option value={71}>Airtel Prepaid</option>
                                                            <option value={82}>BSNL Prepaid</option>
                                                            <option value={83}>Vi Prepaid</option>
                                                            <option value={94}>JIO</option>
                                                        </Field>
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="SaleTo" /></p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Bill No
                                                        </label>
                                                        <Field type='number' name='BillNo' placeholder='Enter Bill No'
                                                            className={
                                                                `form-control
                                                    ${errors.BillNo && touched.BillNo ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="BillNo" /></p>
                                                    </div>

                                                    <div className="col-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Date
                                                        </label>
                                                        <Field type='date' name='Date' placeholder='Enter Date'
                                                            className={
                                                                `form-control
                                                    ${errors.Date && touched.Date ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="Date" /></p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Remarks
                                                        </label>
                                                        <Field type='mail' name='Remarks' placeholder='Enter Remarks'
                                                            className={
                                                                `form-control
                                                    ${errors.Remarks && touched.Remarks ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="Remarks" /></p>
                                                    </div>


                                                </div>
                                                <div className="row">
                                                    <div className="col-6"></div>
                                                    <div className="col-6">
                                                        <div>
                                                            <h5>Bill Summary</h5>
                                                            <form>
                                                                <label htmlFor="subtotal">Sub Total:</label>
                                                                <input disabled className="form-control" type="text" value='$0.00' id="subtotal" name="subtotal" />

                                                                <label htmlFor="discount">Discount (-):</label>
                                                                <input disabled className="form-control" type="text" value='$0.00' id="discount" name="discount" />

                                                                <label htmlFor="netPayable">Net Payable:</label>
                                                                <input disabled className="form-control" type="text" value='$0.00' id="netPayable" name="netPayable" />

                                                                <label htmlFor="receivedAmount">Received Amount:</label>
                                                                <input className="form-control" type="text" id="receivedAmount" name="receivedAmount" />

                                                                <div>
                                                                <label htmlFor="payVia">Pay Via:</label>
                                                                <select id="payVia" name="payVia" className="form-control">
                                                                    <option value="cash">Cash</option>
                                                                    <option value="card">Card</option>
                                                                    <option value="bank">Bank Transfer</option>
                                                                    <option value="paypal">PayPal</option>
                                                                </select>
                                                                </div>

                                                                <label htmlFor="remarks">Remarks:</label>
                                                                <textarea id="remarks" className="form-control" name="remarks" rows="4" cols="50"></textarea>

                                                            </form>

                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">
                                                    Save
                                                </button>
                                                <button type="button" className="btn btn-danger" onClick={resetForm} style={{ margin: "20px 10px" }}>
                                                    Reset
                                                </button>
                                            </div>
                                        </Form>
                                    }}

                                </Formik>
                            </div>


                        </div>

                    </div>



                </div>
            </div>

        </div>

    </div>
}
export default AddNewSales
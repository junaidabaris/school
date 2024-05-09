import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'

function AddNewPurchase() {
    const defalutValue = {
        SupplierName: '',
        branchs: '',
        BillNo: '',
        Email: '',
        PurchaseStatus: '',
        ProductList: '',
        Address: '',
        Store: '',
        Date: '',
        Remarks: '',

    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        SupplierName: yup.string().required('Supplier is Requird!'),
        Store: yup.string().required('Store is Requird!'),
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
                            <h4 className="mb-1 mt-3">Add a new Purchase</h4>
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
                                                            Supplier
                                                        </label>
                                                        <Field component='select' name='SupplierName' className={
                                                            `form-control
                                                    ${errors.SupplierName && touched.SupplierName ? ' is-invalid' : ''}`
                                                        }>
                                                            <option >--Select--</option>
                                                            <option value={71}>Airtel Prepaid</option>
                                                            <option value={82}>BSNL Prepaid</option>
                                                            <option value={83}>Vi Prepaid</option>
                                                            <option value={94}>JIO</option>
                                                        </Field>
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="SupplierName" /></p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Store
                                                        </label>
                                                        <Field component='select' name='Store' className={
                                                            `form-control
                                                    ${errors.Store && touched.Store ? ' is-invalid' : ''}`
                                                        }>
                                                            <option >--Select--</option>
                                                            <option value={71}>Airtel Prepaid</option>
                                                            <option value={82}>BSNL Prepaid</option>
                                                            <option value={83}>Vi Prepaid</option>
                                                            <option value={94}>JIO</option>
                                                        </Field>
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="Store" /></p>
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
                                                            Purchase Status
                                                        </label>
                                                        <Field component='select' name='PurchaseStatus' className={
                                                            `form-control
                                                    ${errors.PurchaseStatus && touched.PurchaseStatus ? ' is-invalid' : ''}`
                                                        }>
                                                            <option >--Select--</option>
                                                            <option value={71}>Airtel Prepaid</option>
                                                            <option value={82}>BSNL Prepaid</option>
                                                            <option value={83}>Vi Prepaid</option>
                                                            <option value={94}>JIO</option>
                                                        </Field>
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="PurchaseStatus" /></p>
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
export default AddNewPurchase
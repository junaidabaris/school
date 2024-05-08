import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'

function AddNewSupplier() {
    const defalutValue = {
        SupplierName: '',
        branchs: '',
        ContactNumber: '',
        Email: '',
        CompanyName: '',
        ProductList: '',
        Address: '',

    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        SupplierName: yup.string().required('Supplier Name is Requird!'),
        branchs: yup.string().required('branch is Requird!'),
        ContactNumber: yup.number().required('Contact Number is Requird!'),
        Email: yup.string().required('Email is Requird!'),
        CompanyName: yup.string().required('Company Name is Requird!'),
        ProductList: yup.string().required('Product List  is Requird!'),
        Address: yup.string().required('Address Name is Requird!'),


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
                            <h4 className="mb-1 mt-3">Add a new Supplier</h4>
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
                                                    <div className="col-12">
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
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                           Supplier Name
                                                        </label>
                                                        <Field type='text' name='SupplierName' placeholder='Enter Supplier Name'
                                                            className={
                                                                `form-control
                                                    ${errors.SupplierName && touched.SupplierName ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="SupplierName" /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                         Contact Number
                                                        </label>
                                                        <Field type='number' name='ContactNumber' placeholder='Enter Contact Number'
                                                            className={
                                                                `form-control
                                                    ${errors.ContactNumber && touched.ContactNumber ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="ContactNumber" /></p>
                                                    </div>

                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                         Email
                                                        </label>
                                                        <Field type='mail' name='Email' placeholder='Enter Email'
                                                            className={
                                                                `form-control
                                                    ${errors.Email && touched.Email ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="Email" /></p>
                                                    </div>

                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                         Company Name
                                                        </label>
                                                        <Field type='mail' name='CompanyName' placeholder='Enter Company Name'
                                                            className={
                                                                `form-control
                                                    ${errors.CompanyName && touched.CompanyName ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="CompanyName" /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                         Product List
                                                        </label>
                                                        <Field type='mail' name='ProductList' placeholder='Enter Product List'
                                                            className={
                                                                `form-control
                                                    ${errors.ProductList && touched.ProductList ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="ProductList" /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                         Address
                                                        </label>
                                                        <Field type='mail' name='Address' placeholder='Enter Address'
                                                            className={
                                                                `form-control
                                                    ${errors.Address && touched.Address ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="Address" /></p>
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
export default AddNewSupplier
// import Form from 'react-bootstrap/Form';
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'

function AddNewStore() {
    const defalutValue = {
        storeName: '',
        branchs: '',
        StoreCode: '',
        MobileNo: '',
        Address: '',

    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        storeName: yup.string().required('store Name is Requird!'),
        branchs: yup.string().required('branch is Requird!'),
        StoreCode: yup.string().required('Store Code is Requird!'),
        MobileNo: yup.string().required('Mobile No is Requird!'),
        Address: yup.string().required('Address is Requird!'),


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
                            <h4 className="mb-1 mt-3">Add a new Store</h4>
                        </div>
                        <div className="d-flex align-content-center flex-wrap gap-3">
                            <div className="d-flex gap-3">
                                <button className="btn btn-label-secondary">Discard</button>
                                <button className="btn btn-label-primary">Save draft</button>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Publish Store
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {/* First column*/}
                        <div className="col-12 col-lg-12">
                            {/* Product Information */}
                            <div className="card mb-4">

                                <div className="card-body">
                                    

                                    <Formik id="frmrecahrge" initialValues={defalutValue} validationSchema={validationSceema} onSubmit={handleSubmit} className="CustomForm fl-form ng-pristine ng-valid row">
                                    {({ errors, touched, resetForm }) => {
                                        return <Form className="row">
                                            <div className="card-body row" >

                                               
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
                                                            Store Name
                                                        </label>
                                                        <Field type='text' name='storeName' placeholder='Enter Product Name '
                                                            className={
                                                                `form-control
                                                    ${errors.storeName && touched.storeName ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="storeName" /></p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                           Store Code
                                                        </label>
                                                        <Field type='text' name='StoreCode' placeholder='Enter Store Code'
                                                            className={
                                                                `form-control
                                                    ${errors. StoreCode && touched. StoreCode ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="StoreCode" /></p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                           Mobile No
                                                        </label>
                                                        <Field type='number' name='MobileNo' placeholder='Enter Mobile No'
                                                            className={
                                                                `form-control
                                                    ${errors.MobileNo && touched. MobileNo ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="MobileNo" /></p>
                                                    </div>

                                                    <div className="col-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                          Address
                                                        </label>
                                                        <Field type='text' name='Address' placeholder='Enter Address'
                                                            className={
                                                                `form-control
                                                    ${errors.Address && touched. Address ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="Address" /></p>
                                                    </div>

                                                </div>
                                               <div className="col-6">
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

    </div>
}
export default AddNewStore
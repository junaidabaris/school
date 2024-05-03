import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'

function AddComplaint() {
    const defalutValue = {
        Type: '',
        branchs: '',
        AssignTo: '',
        ComplainantName: '',
        ComplainantMobileNo: '',
        Date: '',
        Note: '',
        DocumentFile: '',

    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        Type: yup.string().required('Type is Requird!'),
        branchs: yup.string().required('branch is Requird!'),
        AssignTo: yup.string().required('Assign To is Requird!'),
        ComplainantName: yup.string().required('Complainant Name is Requird!'),
        ComplainantMobileNo: yup.string().required('Complainant Mobile No is Requird!'),
        Note: yup.string().required('Note is Requird!'),
        Date: yup.string().required('Date is Requird!'),
        DocumentFile: yup.string().required('Document File is Requird!'),


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
                            <h4 className="mb-1 mt-3">Add a Complaint</h4>
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
                                                        <label className="form-label" htmlFor="ecommerce-product-sku">
                                                            Type
                                                        </label>

                                                        <Field component='select' name='Type' className={
                                                            `form-control
                                                    ${errors.Type && touched.Type ? ' is-invalid' : ''}`
                                                        }>
                                                            <option >--Select--</option>
                                                            <option value={71}>Airtel Prepaid</option>
                                                            <option value={82}>BSNL Prepaid</option>
                                                            <option value={83}>Vi Prepaid</option>
                                                            <option value={94}>JIO</option>
                                                        </Field>

                                                        <p style={{ color: 'red' }}> <ErrorMessage name="Type" /></p>

                                                    </div>
                                                    <div className="col-6">
                                                        <label className="form-label" htmlFor="ecommerce-product-sku">
                                                        Assign To
                                                        </label>

                                                        <Field component='select' name='AssignTo' className={
                                                            `form-control
                                                    ${errors.AssignTo && touched.AssignTo ? ' is-invalid' : ''}`
                                                        }>
                                                            <option >--Select--</option>
                                                            <option value={71}>Airtel Prepaid</option>
                                                            <option value={82}>BSNL Prepaid</option>
                                                            <option value={83}>Vi Prepaid</option>
                                                            <option value={94}>JIO</option>
                                                        </Field>

                                                        <p style={{ color: 'red' }}> <ErrorMessage name="AssignTo" /></p>

                                                    </div>
                                                    <div className="col-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Complainant Name
                                                        </label>
                                                        <Field type='text' name='ComplainantName' placeholder='Enter Complainant Name '
                                                            className={
                                                                `form-control
                                                    ${errors.ComplainantName && touched.ComplainantName ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="ComplainantName" /></p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Complainant Mobile No
                                                        </label>
                                                        <Field type='text' name='ComplainantMobileNo' placeholder='Enter Complainant Mobile No '
                                                            className={
                                                                `form-control
                                                    ${errors.ComplainantMobileNo && touched.ComplainantMobileNo ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="ComplainantMobileNo" /></p>
                                                    </div>
                                                    <div className="col-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                           Date
                                                        </label>
                                                        <Field type='date' name='Date' placeholder='Enter Complainant Mobile No '
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
                                                          Document File

                                                        </label>
                                                        <Field type='file' name='DocumentFile'
                                                        placeholder='Enter DocumentFile '
                                                            className={
                                                                `form-control
                                                    ${errors.DocumentFile && touched.DocumentFile ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="DocumentFile" /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                          Note
                                                        </label>
                                                        <Field type='text' name='Note'
                                                        as="textarea" placeholder='Enter Note '
                                                            className={
                                                                `form-control
                                                    ${errors.Note && touched.Note ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="Note" /></p>
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
export default AddComplaint
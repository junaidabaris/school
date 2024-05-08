import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'

function AddVisitorLos() {
    const defalutValue = {
        VisitingPurpose: '',
        branchs: '',
        Name: '',
        MobileNo: '',
        Date: '',
        EntryTime: '',
        ExitTime: '',
        NumberOfVisitor: '',
        IdNumber: '',
        Tokenpass: '',
        Note: '',

    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        VisitingPurpose: yup.string().required('Visiting Purpose Name is Requird!'),
        branchs: yup.string().required('branch is Requird!'),
        Name: yup.string().required('Name  is Requird!'),
        MobileNo: yup.number().required('Mobile No  is Requird!'),
        Date: yup.number().required('Date   is Requird!'),
        EntryTime: yup.number().required('Entry Time is Requird!'),
        ExitTime: yup.number().required('Exit Time  is Requird!'),
        NumberOfVisitor: yup.number().required('Number Of Visitor  is Requird!'),
        IdNumber: yup.number().required('Id Number  is Requird!'),
        Tokenpass: yup.string().required('Token/pass is Requird!'),
        Note: yup.number().required('Note is Requird!'),


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
                            <h4 className="mb-1 mt-3">Add Visitor  Log</h4>
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
                                                        <label className="form-label" htmlFor="ecommerce-product-sku">
                                                            Visiting Purpose
                                                        </label>

                                                        <Field component='select' name='VisitingPurpose' className={
                                                            `form-control
                                                    ${errors.VisitingPurpose && touched.VisitingPurpose ? ' is-invalid' : ''}`
                                                        }>
                                                            <option >--Select--</option>
                                                            <option value={71}>Airtel Prepaid</option>
                                                            <option value={82}>BSNL Prepaid</option>
                                                            <option value={83}>Vi Prepaid</option>
                                                            <option value={94}>JIO</option>
                                                        </Field>

                                                        <p style={{ color: 'red' }}> <ErrorMessage name="VisitingPurpose" /></p>

                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Name
                                                        </label>
                                                        <Field type='text' name='Name' placeholder='Enter Name '
                                                            className={
                                                                `form-control
                                                    ${errors.Name && touched.Name ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="Name" /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Mobile No
                                                        </label>
                                                        <Field type='number' name='MobileNo' placeholder='Enter Mobile No '
                                                            className={
                                                                `form-control
                                                    ${errors.MobileNo && touched.MobileNo ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="MobileNo" /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Date
                                                        </label>
                                                        <Field type='date' name='Date' placeholder='Enter Date '
                                                            className={
                                                                `form-control
                                                    ${errors.Date && touched.Date ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="Date" /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <label
                                                                    className="form-label"
                                                                    htmlFor="ecommerce-product-barcode"
                                                                >
                                                                    Entry Time
                                                                </label>
                                                                <Field type='time' name='Date' placeholder='Enter Date '
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
                                                                   Exit Time
                                                                </label>
                                                                <Field type='time' name='ExitTime' placeholder='Enter Exit Time '
                                                                    className={
                                                                        `form-control
                                                    ${errors.ExitTime && touched.ExitTime ? ' is-invalid' : ''}`
                                                                    }
                                                                />
                                                                <p style={{ color: 'red' }}> <ErrorMessage name="ExitTime" /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Number Of Visitor 
                                                        </label>
                                                        <Field type='number' name='NumberOfVisitor' placeholder='Enter Number Of Visitor  '
                                                            className={
                                                                `form-control
                                                    ${errors.NumberOfVisitor  && touched.NumberOfVisitor  ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="NumberOfVisitor" /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                          Id Number
                                                        </label>
                                                        <Field type='number' name='IdNumber' placeholder='Enter Id Number'
                                                            className={
                                                                `form-control
                                                    ${errors.IdNumber  && touched.IdNumber  ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="IdNumber" /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                         Token/pass
                                                        </label>
                                                        <Field type='text' name='Tokenpass' placeholder='Enter Token/pass'
                                                            className={
                                                                `form-control
                                                    ${errors.Tokenpass  && touched.Tokenpass  ? ' is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="Tokenpass" /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Note
                                                        </label>
                                                        <Field as="textarea" type='text' name='Note' placeholder='Enter Note '
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
export default AddVisitorLos
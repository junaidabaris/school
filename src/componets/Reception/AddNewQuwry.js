// import Form from 'react-bootstrap/Form';
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'
function AddNewQuwry() {
    const defalutValue = {
        NameS: '',
        branchs: '',
        gender: '',
        DateOfBirth: '',
        PreviousSchool: '',
        FatherName: '',
        MotherName: '',
        MobileNo: '',
        Email: '',
        Address: '',
        NoOfChild: '',
        Assigned: '',
        Reference: '',
        Response: '',
        ResponseIn: '',
        Note: '',
        Date: '',
        ClassApplyingFor: '',

    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        NameS: yup.string().required('Name is Requird!'),
        branchs: yup.string().required('branch is Requird!'),
        gender: yup.string().required('gender is Requird!'),
        DateOfBirth: yup.date().required('Date Of Birth is Requird!'),
        PreviousSchool: yup.string().required('Previous School is Requird!'),
        FatherName: yup.string().required('FatherName is Requird!'),
        MotherName: yup.string().required('Mother Name is Requird!'),
        MobileNo: yup.number().required('Mobile No is Requird!'),
        Email: yup.string().required('Email is Requird!'),
        Address: yup.string().required('Address  is Requird!'),
        NoOfChild: yup.string().required('No Of Child  is Requird!'),
        Assigned: yup.string().required('Assigned  is Requird!'),
        Reference: yup.string().required('Reference   is Requird!'),
        Response: yup.string().required('Response is Requird!'),
        ResponseIn: yup.string().required('Response is Requird!'),
        Note: yup.string().required('Note is Requird!'),
        Date: yup.date().required('Date is Requird!'),
        ClassApplyingFor: yup.string().required('Class Applying For is Requird!'),


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
                            <h4 className="mb-1 mt-3">Add a New Query</h4>
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
                                                            Name
                                                        </label>
                                                        <Field type='text' name='NameS' placeholder='Enter NameS '
                                                            className={
                                                                `form-control
                                                    ${errors.NameS && touched.NameS ? 'is-invalid' : ''}`
                                                            }
                                                        />
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="NameS" /></p>
                                                    </div>
                                                    <div className="col-12">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="ecommerce-product-barcode"
                                                        >
                                                            Gender
                                                        </label>
                                                        <Field component='select' name='gender' className={
                                                            `form-control
                                                    ${errors.gender && touched.gender ? ' is-invalid' : ''}`
                                                        }>
                                                            <option >--Select--</option>
                                                            <option value={71}>Mail</option>
                                                            <option value={82}>Femail</option>

                                                        </Field>
                                                        <p style={{ color: 'red' }}> <ErrorMessage name="gender" /></p>
                                                    </div>

                                                </div>

                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        DOB
                                                    </label>
                                                    <Field type='date' name='DateOfBirth' placeholder='Enter Date Of Birth '
                                                        className={
                                                            `form-control
                                                    ${errors.DateOfBirth && touched.DateOfBirth ? 'is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="DateOfBirth" /></p>
                                                </div>

                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Previous School
                                                    </label>
                                                    <Field type='text' name='PreviousSchool' placeholder='Enter Previous School'
                                                        className={
                                                            `form-control
                                                    ${errors.PreviousSchool && touched.PreviousSchool ? 'is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="PreviousSchool" /></p>
                                                </div>

                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Father Name
                                                    </label>
                                                    <Field type='text' name='FatherName' placeholder='Enter Father Name'
                                                        className={
                                                            `form-control
                                                    ${errors.FatherName && touched.FatherName ? 'is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="FatherName" /></p>
                                                </div>


                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Mother Name
                                                    </label>
                                                    <Field type='text' name='MotherName' placeholder='Enter Mother Name'
                                                        className={
                                                            `form-control
                                                    ${errors.MotherName && touched.MotherName ? 'is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="MotherName" /></p>
                                                </div>

                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Mobile No
                                                    </label>
                                                    <Field type='number' name='MobileNo' placeholder='Enter Mobile No'
                                                        className={
                                                            `form-control
                                                    ${errors.MobileNo && touched.MobileNo ? 'is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="MobileNo" /></p>
                                                </div>

                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Email
                                                    </label>
                                                    <Field type='number' name='Email' placeholder='Enter Email'
                                                        className={
                                                            `form-control
                                                    ${errors.Email && touched.Email ? 'is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="Email" /></p>
                                                </div>

                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Address
                                                    </label>
                                                    <Field type='text' name='Address' placeholder='Enter Address'
                                                        className={
                                                            `form-control
                                                    ${errors.Address && touched.Address ? 'is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="Address" /></p>
                                                </div>
                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        No Of Child
                                                    </label>
                                                    <Field type='text' name='NoOfChild' placeholder='Enter No Of Child'
                                                        className={
                                                            `form-control
                                                    ${errors.NoOfChild && touched.NoOfChild ? 'is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="NoOfChild" /></p>
                                                </div>
                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Assigned
                                                    </label>
                                                    <Field component='select' name='Assigned' className={
                                                        `form-control
                                                    ${errors.Assigned && touched.Assigned ? ' is-invalid' : ''}`
                                                    }>
                                                        <option >--Select Branch First--</option>
                                                        <option value={71}>Airtel Prepaid</option>
                                                        <option value={82}>BSNL Prepaid</option>
                                                        <option value={83}>Vi Prepaid</option>
                                                        <option value={94}>JIO</option>
                                                    </Field>

                                                    <p style={{ color: 'red' }}> <ErrorMessage name="Assigned" /></p>
                                                </div>
                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Reference
                                                    </label>
                                                    <Field component='select' name='Reference' className={
                                                        `form-control
                                                    ${errors.Reference && touched.Reference ? ' is-invalid' : ''}`
                                                    }>
                                                        <option >--Select Branch First--</option>
                                                        <option value={71}>Airtel Prepaid</option>
                                                        <option value={82}>BSNL Prepaid</option>
                                                        <option value={83}>Vi Prepaid</option>
                                                        <option value={94}>JIO</option>
                                                    </Field>

                                                    <p style={{ color: 'red' }}> <ErrorMessage name="Reference" /></p>
                                                </div>
                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Response *
                                                    </label>
                                                    <Field component='select' name='Response' className={
                                                        `form-control
                                                    ${errors.Response && touched.Response ? ' is-invalid' : ''}`
                                                    }>
                                                        <option >--Select Branch First--</option>
                                                        <option value={71}>Airtel Prepaid</option>
                                                        <option value={82}>BSNL Prepaid</option>
                                                        <option value={83}>Vi Prepaid</option>
                                                        <option value={94}>JIO</option>
                                                    </Field>

                                                    <p style={{ color: 'red' }}> <ErrorMessage name="Response" /></p>
                                                </div>
                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Response
                                                    </label>
                                                    <Field type='text' name='ResponseIn' placeholder='Enter Response '
                                                        className={
                                                            `form-control
                                                    ${errors.ResponseIn && touched.ResponseIn ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="ResponseIn" /></p>
                                                </div>
                                                <div className="col-12">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Note
                                                    </label>
                                                    <Field type='text' name='Note' placeholder='Enter Note '
                                                        className={
                                                            `form-control
                                                    ${errors.Note && touched.Note ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="Note" /></p>
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
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Class Applying For
                                                    </label>
                                                    <Field component='select' name='ClassApplyingFor' className={
                                                        `form-control
                                                    ${errors.ClassApplyingFor && touched.ClassApplyingFor ? ' is-invalid' : ''}`
                                                    }>
                                                        <option >--Select--</option>
                                                        <option value={71}>Airtel Prepaid</option>
                                                        <option value={82}>BSNL Prepaid</option>
                                                        <option value={83}>Vi Prepaid</option>
                                                        <option value={94}>JIO</option>
                                                    </Field>
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="ClassApplyingFor" /></p>
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
export default AddNewQuwry
// import Form from 'react-bootstrap/Form';
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'
function AddCallLog() {
    const defalutValue = {
        Name: '',
        branchs: '',
        CallType: '',
        CallingPurpose: '',
        Date: '',
        TimetSlotT: '',
        TimetSlotF: '',
        FollowUpDate: '',
        Note: '',
    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        Name: yup.string().required(' Name is Requird!'),
        branchs: yup.string().required('branch is Requird!'),
        CallType: yup.string().required('Call Type is Requird!'),
        CallingPurpose: yup.string().required('Calling Purpose is Requird!'),
        Date: yup.date().required('Date  is Requird!'),
        TimetSlotT: yup.date().required('TimetSlot to is Requird!'),
        TimetSlotF: yup.date().required('TimetSlot from  is Requird!'),
        FollowUpDate: yup.date().required('Follow Up Date from  is Requird!'),
        Note: yup.date().required('Note  is Requird!'),
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
                            <h4 className="mb-1 mt-3">Add Call Log</h4>
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
                                                            Call Type
                                                        </label>

                                                        <Field component='select' name='CallType' className={
                                                            `form-control
                                                    ${errors.CallType && touched.CallType ? ' is-invalid' : ''}`
                                                        }>
                                                            <option >--Select--</option>
                                                            <option value={71}>Airtel Prepaid</option>
                                                            <option value={82}>BSNL Prepaid</option>
                                                            <option value={83}>Vi Prepaid</option>
                                                            <option value={94}>JIO</option>
                                                        </Field>

                                                        <p style={{ color: 'red' }}> <ErrorMessage name="CallType" /></p>

                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label" htmlFor="ecommerce-product-sku">
                                                            Calling Purpose
                                                        </label>

                                                        <Field component='select' name='CallingPurpose' className={
                                                            `form-control
                                                    ${errors.CallingPurpose && touched.CallingPurpose ? ' is-invalid' : ''}`
                                                        }>
                                                            <option >--Select--</option>
                                                            <option value={71}>Airtel Prepaid</option>
                                                            <option value={82}>BSNL Prepaid</option>
                                                            <option value={83}>Vi Prepaid</option>
                                                            <option value={94}>JIO</option>
                                                        </Field>

                                                        <p style={{ color: 'red' }}> <ErrorMessage name="CallingPurpose" /></p>

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
                                                        <h5>Time Slot</h5>
                                                        <div className="row">
                                                            <div className="col-6">

                                                                <Field type='time' name='TimetSlotT' placeholder='Enter Time Slot '
                                                                    className={
                                                                        `form-control
                                                    ${errors.TimetSlotT && touched.TimetSlotT ? ' is-invalid' : ''}`
                                                                    }
                                                                />
                                                                <p style={{ color: 'red' }}> <ErrorMessage name="TimetSlotT" /></p>
                                                            </div>
                                                            <div className="col-6">

                                                                <Field type='time' name='TimeSlotf' placeholder='Enter Time Slot '
                                                                    className={
                                                                        `form-control
                                                    ${errors.TimetSlotF && touched.TimetSlotF ? ' is-invalid' : ''}`
                                                                    }
                                                                />
                                                                <p style={{ color: 'red' }}> <ErrorMessage name="TimetSlotF" /></p>
                                                            </div>

                                                        </div>

                                                    </div>

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
export default AddCallLog
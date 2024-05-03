// import Form from 'react-bootstrap/Form';
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'


function AddNewCustom() {
    const defalutValue = {
        fieldLbale: '',
        branchs: '',
        customFiled: '',
        filedLable: '',
        BootstrapColumn: '',
        order: '',
        DefaultValue: '',
    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        fieldLbale: yup.string().required('Field Label is Requird!'),
        branchs: yup.string().required('branch is Requird!'),
        customFiled: yup.string().required('Custom Field For is Requird!'),
        filedLable: yup.string().required('Field Lable is Requird!'),
        BootstrapColumn: yup.string().required('Bootstrap Column  is Requird!'),
        order: yup.string().required('Order Number is Requird!'),
        DefaultValue: yup.string().required('Default Value Number is Requird!'),

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
                            <h4 className="mb-1 mt-3">Add a New Custom Field</h4>
                        </div>

                    </div>
                    <div className="row">

                        {/* First column*/}
                        <div className="col-12 col-lg-12">
                            {/* Product Information */}
                            <div className="card mb-4">

                                <div className="card-body row">
                                    <Formik id="frmrecahrge" initialValues={defalutValue} validationSchema={validationSceema} onSubmit={handleSubmit} className="CustomForm fl-form ng-pristine ng-valid row">
                                        {({ errors, touched, resetForm }) => (
                                            <Form className="row">

                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Branch
                                                    </label>
                                                    <Field component='select' name='branchs' className={
                                                        `form-control
                                                    ${errors.branchs && touched.branchs ? ' is-invalid' : ''}`
                                                    }>
                                                        <option value={2}>--Select--</option>
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
                                                        Custom Field For
                                                    </label>
                                                    <Field component='select' name='customFiled' className={
                                                        `form-control
                                                    ${errors.customFiled && touched.customFiled ? ' is-invalid' : ''}`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={71}>Airtel Prepaid</option>
                                                        <option value={82}>BSNL Prepaid</option>
                                                        <option value={83}>Vi Prepaid</option>
                                                        <option value={94}>JIO</option>
                                                    </Field>
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="customFiled" /></p>
                                                </div>

                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Field Label
                                                    </label>
                                                    <Field type='text' name='fieldLbale' placeholder='Enter Field Label'
                                                        className={
                                                            `form-control
                                                    ${errors.fieldLbale && touched.fieldLbale ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="fieldLbale" /></p>
                                                </div>

                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Field Label
                                                    </label>
                                                    <Field component='select' name='filedLable' className={
                                                        `form-control
                                                    ${errors.filedLable && touched.filedLable ? ' is-invalid' : ''}`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={71}>Airtel Prepaid</option>
                                                        <option value={82}>BSNL Prepaid</option>
                                                        <option value={83}>Vi Prepaid</option>
                                                        <option value={94}>JIO</option>
                                                    </Field>
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="filedLable" /></p>
                                                </div>

                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Grid (Bootstrap Column)
                                                    </label>
                                                    <Field component='select' name='BootstrapColumn' className={
                                                        `form-control
                                                    ${errors.BootstrapColumn && touched.BootstrapColumn ? ' is-invalid' : ''}`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={71}>Airtel Prepaid</option>
                                                        <option value={82}>BSNL Prepaid</option>
                                                        <option value={83}>Vi Prepaid</option>
                                                        <option value={94}>JIO</option>
                                                    </Field>
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="BootstrapColumn" /></p>
                                                </div>

                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Order
                                                    </label>
                                                    <Field type='number' name='order' placeholder='Enter order number'
                                                        className={
                                                            `form-control
                                                    ${errors.order && touched.order ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="order" /></p>


                                                </div>

                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Default Value
                                                    </label>
                                                    <Field type='number' name='DefaultValue' placeholder='Enter Default Value'
                                                        className={
                                                            `form-control
                                                    ${errors.DefaultValue && touched.DefaultValue ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="DefaultValue" /></p>
                                                </div>

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

                                                <div className="col-6">
                                                    <button type="submit" className="btn btn-primary" style={{ margin: "20px 0" }}>
                                                        Save
                                                    </button>
                                                    <button type="button" className="btn btn-danger" onClick={resetForm} style={{ margin: "20px 10px" }}>
                                                        Reset
                                                    </button>
                                                </div>

                                            </Form>
                                        )}
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
export default AddNewCustom
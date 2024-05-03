// import Form from 'react-bootstrap/Form';
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'

function AddUnit() {
    const defalutValue = {
        Name: '',
        branchs: '',

    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        Name: yup.string().required('Name is Requird!'),
        branchs: yup.string().required('branch is Requird!'),


    })
    const handleSubmit = (value) => {
        console.log(value);

    }
    return <div className="card mb-4">
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
                                <Field type='text' name='Name' placeholder='Enter Name '
                                    className={
                                        `form-control
                                                    ${errors.Name && touched.Name ? ' is-invalid' : ''}`
                                    }
                                />
                                <p style={{ color: 'red' }}> <ErrorMessage name="Name" /></p>
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
}
export default AddUnit
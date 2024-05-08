import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'
function AddUnit() {
    const defalutValue = {
        UnitName: '',
        branchs: '',

    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        UnitName: yup.string().required('Unit Name is Requird!'),
        branchs: yup.string().required('branch is Requird!'),


    })
    const handleSubmit = (value) => {
        console.log(value);

    }
    return <div className="card mb-4">
        <div className="card-header">
            <h5 className="card-title mb-0">Add Unit</h5>
        </div>
        <Formik id="frmrecahrge" initialValues={defalutValue} validationSchema={validationSceema} onSubmit={handleSubmit} className="CustomForm fl-form ng-pristine ng-valid row">
            {({ errors, touched, resetForm }) => {
                return <Form className="row">
                    <div className="card-body">
                        {/* Base Price */}
                        <div className="mb-3">
                            <label className="form-label" htmlFor="ecommerce-product-price">
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
                        {/* Discounted Price */}
                        <div className="mb-3">
                            <label
                                className="form-label"
                                htmlFor="ecommerce-product-discount-price"
                            >
                                Unit Name
                            </label>
                            <Field type='text' name='UnitName' placeholder='Enter Unit Name '
                                className={
                                    `form-control
                                                    ${errors.UnitName && touched.UnitName ? ' is-invalid' : ''}`
                                }
                            />
                            <p style={{ color: 'red' }}> <ErrorMessage name="UnitName" /></p>
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
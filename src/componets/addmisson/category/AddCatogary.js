import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'
function AddCatogary() {
    const defalutValue = {
        Category: '',
        branchs: '',

    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        Category: yup.string().required('Category  Name is Requird!'),
        branchs: yup.string().required('branch is Requird!'),


    })
    const handleSubmit = (value) => {
        console.log(value);

    }
    return <div className="card mb-4">
        {/* <div className="card-header">
            <h5 className="card-title mb-0">Add Category </h5>
        </div> */}
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
                                Category  Name
                            </label>
                            <Field type='text' name='Category' placeholder='Enter Category  Name '
                                className={
                                    `form-control
                                                    ${errors.Category && touched.Category ? ' is-invalid' : ''}`
                                }
                            />
                            <p style={{ color: 'red' }}> <ErrorMessage name="Category" /></p>
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
export default AddCatogary
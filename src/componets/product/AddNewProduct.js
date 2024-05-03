// import Form from 'react-bootstrap/Form';
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'

function AddNewProduct() {
    const defalutValue = {
        ProductName: '',
        branchs: '',
        Productcode: '',
        ProductCategory: '',
        PurchaseUnit: '',
        SalesUnit: '',
        UnitRatio: '',
        PurchasePrice: '',
        SalesPrice: '',
        Remarks: '',
    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        ProductName: yup.string().required('Product Name is Requird!'),
        branchs: yup.string().required('branch is Requird!'),
        Productcode: yup.string().required('Product code is Requird!'),
        ProductCategory: yup.string().required('Product Category is Requird!'),
        PurchaseUnit: yup.string().required('Purchase Unit is Requird!'),
        SalesUnit: yup.string().required('Sales Unit  is Requird!'),
        UnitRatio: yup.string().required('Unit Ratio  is Requird!'),
        PurchasePrice: yup.string().required('Purchase Price  is Requird!'),
        SalesPrice: yup.string().required('Sales Price  is Requird!'),
        Remarks: yup.string().required('Remarks is Requird!'),

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
                            <h4 className="mb-1 mt-3">Add a new Product</h4>
                            <p className="text-muted">Orders placed across your store</p>
                        </div>
                        <div className="d-flex align-content-center flex-wrap gap-3">
                            <div className="d-flex gap-3">
                                <button className="btn btn-label-secondary">Discard</button>
                                <button className="btn btn-label-primary">Save draft</button>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Publish product
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        {/* First column*/}
                        <div className="col-12 col-lg-12">
                            {/* Product Information */}
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5 className="card-tile mb-0">Product information</h5>
                                </div>




                                <div className="card-body row">
                                    <Formik id="frmrecahrge" initialValues={defalutValue} validationSchema={validationSceema} onSubmit={handleSubmit} className="CustomForm fl-form ng-pristine ng-valid row">
                                        {({ errors, touched, resetForm }) => {
                                          return  <Form className="row">


                                                <div className="col-6">
                                                    <label className="form-label" htmlFor="ecommerce-product-sku">
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
                                                        Product Name
                                                    </label>
                                                    <Field type='text' name='ProductName' placeholder='Enter Product Name '
                                                        className={
                                                            `form-control
                                                    ${errors.ProductName && touched.ProductName ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="ProductName" /></p>



                                                </div>
                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Product Code
                                                    </label>
                                                    <Field type='number' name='Productcode' placeholder='Enter Product Code '
                                                        className={
                                                            `form-control
                                                    ${errors.Productcode && touched.Productcode ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="Productcode" /></p>
                                                </div>
                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Product Category
                                                    </label>



                                                    <Field component='select' name='ProductCategory' className={
                                                        `form-control
                                                    ${errors.ProductCategory && touched.ProductCategory ? ' is-invalid' : ''}`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={71}>Airtel Prepaid</option>
                                                        <option value={82}>BSNL Prepaid</option>
                                                        <option value={83}>Vi Prepaid</option>
                                                        <option value={94}>JIO</option>
                                                    </Field>

                                                    <p style={{ color: 'red' }}> <ErrorMessage name="ProductCategory" /></p>



                                                </div>
                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Purchase Unit
                                                    </label>



                                                    <Field component='select' name='PurchaseUnit' className={
                                                        `form-control
                                                    ${errors.PurchaseUnit && touched.PurchaseUnit ? ' is-invalid' : ''}`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={71}>Airtel Prepaid</option>
                                                        <option value={82}>BSNL Prepaid</option>
                                                        <option value={83}>Vi Prepaid</option>
                                                        <option value={94}>JIO</option>
                                                    </Field>

                                                    <p style={{ color: 'red' }}> <ErrorMessage name="PurchaseUnit" /></p>




                                                </div>
                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Sales Unit
                                                    </label>


                                                    <Field component='select' name='SalesUnit' className={
                                                        `form-control
                                                    ${errors.SalesUnit && touched.SalesUnit ? ' is-invalid' : ''}`
                                                    }>
                                                        <option value={2}>--Select--</option>
                                                        <option value={71}>Airtel Prepaid</option>
                                                        <option value={82}>BSNL Prepaid</option>
                                                        <option value={83}>Vi Prepaid</option>
                                                        <option value={94}>JIO</option>
                                                    </Field>

                                                    <p style={{ color: 'red' }}> <ErrorMessage name="SalesUnit" /></p>




                                                </div>
                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Unit Ratio
                                                    </label>
                                                    <Field type='number' name='UnitRatio' placeholder='Enter Mobile number'
                                                        className={
                                                            `form-control
                                                    ${errors.UnitRatio && touched.UnitRatio ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="UnitRatio" /></p>
                                                </div>
                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Purchase Price
                                                    </label>
                                                    <Field type='number' name='PurchasePrice' placeholder='Enter   Purchase Price'
                                                        className={
                                                            `form-control
                                                    ${errors.PurchasePrice && touched.PurchasePrice ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="PurchasePrice" /></p>

                                                </div>
                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Sales Price
                                                    </label>
                                                    <Field type='number' name='SalesPrice' placeholder='Enter Sale Price'
                                                        className={
                                                            `form-control
                                                    ${errors.SalesPrice && touched.SalesPrice ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="SalesPrice" /></p>
                                                </div>
                                                <div className="col-6">
                                                    <label
                                                        className="form-label"
                                                        htmlFor="ecommerce-product-barcode"
                                                    >
                                                        Remarks
                                                    </label>
                                                    <Field type='text' name='Remarks' placeholder='Enter Remarks'
                                                        className={
                                                            `form-control
                                                    ${errors.Remarks && touched.Remarks ? ' is-invalid' : ''}`
                                                        }
                                                    />
                                                    <p style={{ color: 'red' }}> <ErrorMessage name="Remarks" /></p>
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
export default AddNewProduct
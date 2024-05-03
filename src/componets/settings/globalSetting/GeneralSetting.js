import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'yup'

function GeneralSetting() {
    const defalutValue = {
        InstituteName: '',
        MobileNo: '',
        InstitutionCode: '',
        Address: '',
        Email: '',
        CmsDefaultBranch: '',
        Currency: '',
        CurrencySymbol: '',
        CurrencyFormats: '',
        SymbolPosition: '',
        Language: '',
        AcademicSession: '',
        Timezone: '',
        Animations: '',
        PreloaderBackend: '',
        FooterBranchSwitcher: '',
        DateFormat: '',
        FooterText: '',
        FacebookURL: '',
        TwitterURL: '',
        LinkedinURL: '',

    }

    const validationSceema = yup.object().shape({
        // fieldLbale: yup.string().required('SS').min(10).max(10),
        InstituteName: yup.string().required('Institute Name is Requird!'),
        InstitutionCode: yup.string().required('InstitutioCode  is Requird!'),
        MobileNo: yup.number().required('Mobile No is Requird!'),
        Address: yup.string().required('Address is Requird!'),
        Email: yup.string().required('Email is Requird!'),
        CmsDefaultBranch: yup.string().required('Cms Default Branch is Requird!'),
        Currency: yup.string().required('Currency is Requird!'),
        CurrencySymbol: yup.string().required('Currency Symbol is Requird!'),
        CurrencyFormats: yup.string().required('Currency Formats is Requird!'),
        SymbolPosition: yup.string().required('Symbol Position is Requird!'),
        Language: yup.string().required('Language is Requird!'),
        AcademicSession: yup.string().required('Academic Session is Requird!'),
        Timezone: yup.string().required('Timezone is Requird!'),
        Animations: yup.string().required('Animations is Requird!'),
        PreloaderBackend: yup.string().required('Preloader Backend is Requird!'),
        FooterBranchSwitcher: yup.string().required('Footer Branch Switcher is Requird!'),
        DateFormat: yup.string().required('Date Format is Requird!'),
        FooterText: yup.string().required('Footer Text is Requird!'),
        FacebookURL: yup.string().required('Facebook URL is Requird!'),
        TwitterURL: yup.string().required('Twitter URL is Requird!'),
        LinkedinURL: yup.string().required('Linkedin URL is Requird!'),


    })
    const handleSubmit = (value) => {
        console.log(value);

    }
    return <div className='card'>
        <Formik id="frmrecahrge" initialValues={defalutValue} validationSchema={validationSceema} onSubmit={handleSubmit} className="CustomForm fl-form ng-pristine ng-valid row">
            {({ errors, touched, resetForm }) => {
                return <Form className="row">
                    <div className="card-body">

                        <div className="row mb-3">

                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Institute Name
                                </label>
                                <Field type='text' name='InstituteName' placeholder='Enter Institute Name '
                                    className={
                                        `form-control
                                                    ${errors.InstituteName && touched.InstituteName ? 'is-invalid' : ''}`
                                    }
                                />
                                <p style={{ color: 'red' }}> <ErrorMessage name="InstituteName" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Institution Code
                                </label>
                                <Field type='text' name='InstitutionCode' placeholder='Enter Institution Code'
                                    className={
                                        `form-control
                                                    ${errors.InstitutionCode && touched.InstitutionCode ? 'is-invalid' : ''}`
                                    }
                                />
                                <p style={{ color: 'red' }}> <ErrorMessage name="InstitutionCode" /></p>
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
                                                    ${errors.MobileNo && touched.MobileNo ? 'is-invalid' : ''}`
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
                                                    ${errors.Address && touched.Address ? 'is-invalid' : ''}`
                                    }
                                />
                                <p style={{ color: 'red' }}> <ErrorMessage name="Address" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Email
                                </label>
                                <Field type='text' name='Email' placeholder='Enter Email'
                                    className={
                                        `form-control
                                                    ${errors.Email && touched.Email ? 'is-invalid' : ''}`
                                    }
                                />
                                <p style={{ color: 'red' }}> <ErrorMessage name="Email" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Cms Default Branch
                                </label>
                                <Field component='select' name='CmsDefaultBranch' className={
                                    `form-control
                                                    ${errors.CmsDefaultBranch && touched.CmsDefaultBranch ? ' is-invalid' : ''}`
                                }>
                                    <option >--Select--</option>
                                    <option value={71}>Airtel Prepaid</option>
                                    <option value={82}>BSNL Prepaid</option>
                                    <option value={83}>Vi Prepaid</option>
                                    <option value={94}>JIO</option>
                                </Field>
                                <p style={{ color: 'red' }}> <ErrorMessage name="CmsDefaultBranch" /></p>
                            </div>

                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Currency
                                </label>
                                <Field type='text' name='Currency' placeholder='Enter Currency'
                                    className={
                                        `form-control
                                                    ${errors.Currency && touched.Currency ? 'is-invalid' : ''}`
                                    }
                                />
                                <p style={{ color: 'red' }}> <ErrorMessage name="Currency" /></p>
                            </div>

                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Currency Formats
                                </label>
                                <Field component='select' name='CurrencyFormats' className={
                                    `form-control
                                                    ${errors.CurrencyFormats && touched.CurrencyFormats ? ' is-invalid' : ''}`
                                }>
                                    <option >--Select--</option>
                                    <option value={71}>Airtel Prepaid</option>
                                    <option value={82}>BSNL Prepaid</option>
                                    <option value={83}>Vi Prepaid</option>
                                    <option value={94}>JIO</option>
                                </Field>
                                <p style={{ color: 'red' }}> <ErrorMessage name="CurrencyFormats" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Symbol Position
                                </label>
                                <Field component='select' name='SymbolPosition' className={
                                    `form-control
                                                    ${errors.SymbolPosition && touched.SymbolPosition ? ' is-invalid' : ''}`
                                }>
                                    <option >--Select--</option>
                                    <option value={71}>Airtel Prepaid</option>
                                    <option value={82}>BSNL Prepaid</option>
                                    <option value={83}>Vi Prepaid</option>
                                    <option value={94}>JIO</option>
                                </Field>
                                <p style={{ color: 'red' }}> <ErrorMessage name="SymbolPosition" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Language
                                </label>
                                <Field component='select' name='Language' className={
                                    `form-control
                                                    ${errors.Language && touched.Language ? ' is-invalid' : ''}`
                                }>
                                    <option >--Select--</option>
                                    <option value={71}>Airtel Prepaid</option>
                                    <option value={82}>BSNL Prepaid</option>
                                    <option value={83}>Vi Prepaid</option>
                                    <option value={94}>JIO</option>
                                </Field>
                                <p style={{ color: 'red' }}> <ErrorMessage name="Language" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Academic Session
                                </label>
                                <Field component='select' name='AcademicSession' className={
                                    `form-control
                                                    ${errors.AcademicSession && touched.AcademicSession ? ' is-invalid' : ''}`
                                }>
                                    <option >--Select--</option>
                                    <option value={71}>Airtel Prepaid</option>
                                    <option value={82}>BSNL Prepaid</option>
                                    <option value={83}>Vi Prepaid</option>
                                    <option value={94}>JIO</option>
                                </Field>
                                <p style={{ color: 'red' }}> <ErrorMessage name="AcademicSession" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Timezone
                                </label>
                                <Field component='select' name='Timezone' className={
                                    `form-control
                                                    ${errors.Timezone && touched.Timezone ? ' is-invalid' : ''}`
                                }>
                                    <option >--Select--</option>
                                    <option value={71}>Airtel Prepaid</option>
                                    <option value={82}>BSNL Prepaid</option>
                                    <option value={83}>Vi Prepaid</option>
                                    <option value={94}>JIO</option>
                                </Field>
                                <p style={{ color: 'red' }}> <ErrorMessage name="Timezone" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Animations
                                </label>
                                <Field component='select' name='Animations' className={
                                    `form-control
                                                    ${errors.Animations && touched.Animations ? ' is-invalid' : ''}`
                                }>
                                    <option >--Select--</option>
                                    <option value={71}>Airtel Prepaid</option>
                                    <option value={82}>BSNL Prepaid</option>
                                    <option value={83}>Vi Prepaid</option>
                                    <option value={94}>JIO</option>
                                </Field>
                                <p style={{ color: 'red' }}> <ErrorMessage name="Animations" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Preloader Backend
                                </label>
                                <Field component='select' name='PreloaderBackend' className={
                                    `form-control
                                                    ${errors.PreloaderBackend && touched.PreloaderBackend ? ' is-invalid' : ''}`
                                }>
                                    <option >--Select--</option>
                                    <option value={71}>Airtel Prepaid</option>
                                    <option value={82}>BSNL Prepaid</option>
                                    <option value={83}>Vi Prepaid</option>
                                    <option value={94}>JIO</option>
                                </Field>
                                <p style={{ color: 'red' }}> <ErrorMessage name="PreloaderBackend" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Footer Branch Switcher
                                </label>
                                <Field component='select' name='FooterBranchSwitcher' className={
                                    `form-control
                                                    ${errors.FooterBranchSwitcher && touched.FooterBranchSwitcher ? ' is-invalid' : ''}`
                                }>
                                    <option >--Select--</option>
                                    <option value={71}>Airtel Prepaid</option>
                                    <option value={82}>BSNL Prepaid</option>
                                    <option value={83}>Vi Prepaid</option>
                                    <option value={94}>JIO</option>
                                </Field>
                                <p style={{ color: 'red' }}> <ErrorMessage name="FooterBranchSwitcher" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                    Date Format
                                </label>
                                <Field component='select' name='DateFormat' className={
                                    `form-control
                                                    ${errors.DateFormat && touched.DateFormat ? ' is-invalid' : ''}`
                                }>
                                    <option >--Select--</option>
                                    <option value={71}>Airtel Prepaid</option>
                                    <option value={82}>BSNL Prepaid</option>
                                    <option value={83}>Vi Prepaid</option>
                                    <option value={94}>JIO</option>
                                </Field>
                                <p style={{ color: 'red' }}> <ErrorMessage name="DateFormat" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                 Footer Text
                                </label>
                                <Field type='text' name='FooterText' placeholder='Enter Footer Text '
                                    className={
                                        `form-control
                                                    ${errors.FooterText && touched.FooterText ? ' is-invalid' : ''}`
                                    }
                                />
                                <p style={{ color: 'red' }}> <ErrorMessage name="FooterText" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                                Facebook URL
                                </label>
                                <Field type='text' name='FacebookURL' placeholder='Enter Facebook URL '
                                    className={
                                        `form-control
                                                    ${errors.FacebookURL && touched.FacebookURL ? ' is-invalid' : ''}`
                                    }
                                />
                                <p style={{ color: 'red' }}> <ErrorMessage name="FacebookURL" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                               Twitter URL
                                </label>
                                <Field type='text' name='TwitterURL' placeholder='Enter Twitter URL '
                                    className={
                                        `form-control
                                                    ${errors.TwitterURL && touched.TwitterURL ? ' is-invalid' : ''}`
                                    }
                                />
                                <p style={{ color: 'red' }}> <ErrorMessage name="TwitterURL" /></p>
                            </div>
                            <div className="col-6">
                                <label
                                    className="form-label"
                                    htmlFor="ecommerce-product-barcode"
                                >
                               Linkedin URL
                                </label>
                                <Field type='text' name='LinkedinURL' placeholder='Enter Linkedin URL '
                                    className={
                                        `form-control
                                                    ${errors.LinkedinURL && touched.LinkedinURL ? ' is-invalid' : ''}`
                                    }
                                />
                                <p style={{ color: 'red' }}> <ErrorMessage name="LinkedinURL" /></p>
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
export default GeneralSetting
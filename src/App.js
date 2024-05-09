import './assets/css/pages/table.module.css'
import './assets/css/rtl/core.css'
import './assets/css/rtl/theme-default.css'
import './assets/css/pages/demo.css'
import '../src/assets/fonts/tabler-icons.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/pages/app-kanban.css'
// import './assets/css/rtl/core-dark.css'
// import './assets/css/rtl/theme-bordered.css'
// import './assets/css/rtl/theme-bordered-dark.css'

// import './assets/css/rtl/theme-default-dark.css'
// import './assets/css/rtl/theme-raspberry-dark.css'
// import './assets/css/rtl/theme-semi-dark.css'
// import './assets/css/rtl/theme-semi-dark-dark.css'
// import './assets/css/theme-raspberry.css'

// import './assets/css/pages/advanced-wizard.css'
// import './assets/css/pages/app-academy.css'
// import './assets/css/pages/app-academy-details.css'
// import './assets/css/pages/app-calendar.css'
// import './assets/css/pages/app-chat.css'
// import './assets/css/pages/app-ecommerce.css'
// import './assets/css/pages/app-email.css'
// import './assets/css/pages/app-invoice.css'
// import './assets/css/pages/app-logistics-dashboard.css'
// import './assets/css/pages/app-logistics-fleet.css'

// import './assets/css/pages/cards-advance.css'
// import './assets/css/pages/front-page.css'
// import './assets/css/pages/front-page-help-center.css'
// import './assets/css/pages/front-page-landing.css'
// import './assets/css/pages/front-page-payment.css'
// import './assets/css/pages/front-page-pricing.css'
// import './assets/css/pages/page-account-settings.css'
// import './assets/css/pages/page-auth.css'
// import './assets/css/pages/page-faq.css'
// import './assets/css/pages/page-icons.css'
// import './assets/css/pages/page-misc.css'
// import './assets/css/pages/tabler.css'
// import './assets/css/pages/page-pricing.css'
// import './assets/css/pages/page-profile.css'
// import './assets/css/pages/page-user-view.css'
// import './assets/css/pages/ui-carousel.css'
// import './assets/css/pages/wizard-ex-checkout.css'

import { Navigate, Route, Routes } from 'react-router-dom'
import AdminPage from './page/admin';
import DasboardPage from './page/dasboardPage';
import ProductList from './page/product';
import AddProduct from './componets/product/AddNewProduct.js';
import CategoryList from './page/category/index.js';
import AddNewCategory from './page/addNewCategory/index.js';
import StoreLists from './page/store/index.js';
import AddNewStores from './page/addNewStore/index.js';
import SupplierLists from './page/supplier/index.js';
import AddNewSupplier from './componets/supplier/AddNewSupplier.js';
import UnitMaster from './page/unit/index.js';
import GlobalSetting from './page/settings/globalSetting/index.js';
import SchoolSetting from './page/settings/schoolsetting/index.js';
import RolePermission from './page/settings/rolePermission/index.js';
import AddRole from './page/settings/rolePermission/AddRole.js';
import SessionMaster from './page/settings/sessionSetting/index.js';
import TranslationList from './page/settings/translation/index.js';
import AddNewTrans from './componets/settings/translation/AddNewTrans.js';
import Cron_Job from './page/settings/cron_job/index.js';
import ModulesPage from './page/modules/index.js'
import SystemStudent from './page/settings/systemstudent/index.js'
import CustomFiledPage from './page/settings/custom_field/index.js'
import AddNewCustom from './componets/settings/custom_field/AddNewCustom.js'
import DatabaseBackupPage from './page/settings/database_backup/index.js'
import AddDataBase from './componets/settings/database_backup/AddDataBase.js'
import AddmissionPage from './page/reception/index.js'
import AddNewQuwry from './componets/Reception/AddNewQuwry.js'
import AddPostel from './componets/recepAll/postal_record/AddPostel.js'
import PostelList from './page/recepAll/postal_record/index.js'
import CallLogsList from './page/recepAll/call_log/index.js'
import AddCallLog from './componets/recepAll/call_log/AddCallLos.js'
import VisitorLogsList from './page/recepAll/visitor_log/index.js'
import AddVisitorLos from './componets/recepAll/visitor_log/AddVisitorLos.js'
import ComplaintList from './page/recepAll/complaint/index.js'
import AddComplaint from './componets/recepAll/complaint/AddComplaint.js'
import ConfigReception from './page/recepAll/config_reception/index.js'
import PuschaseListPage from './page/purchase/index.js'
import AddNewPurchase from './componets/purchase/AddNewPurchase.js'
import SalesListPage from './page/sales/index.js'
import AddNewSales from './componets/sales/AddNewSales.js'
import IssueListPage from './page/issue/index.js'
import AddNewIssue from './componets/issue/AddNewIssue.js'
import AddmisstionCreate from './page/addmisson/createAdmission/index.js'
import OnlineAddmisstionCreate from './page/addmisson/onlineAdmission/index.js'
import MultiImportPage from './page/addmisson/multiImport/index.js'
import CategoryPage from './page/addmisson/category/index.js'
import IdCardListPage from './page/cardManagment/index.js'
import AddNewIdCard from './componets/cardManagment/AddNewIdCard.js'
import StudentCard from './page/studentCard/index.js'
import EmployeeListPage from './page/employeeCard/index.js'
import AdmitCardTemplate from './page/cardTemplate/index.js'
import AddAdmitCard from './componets/cardTemplate/AddAdmitCard.js'
import CardGeneratePage from './page/cardGenerate/index.js'
import StudentListPage from './page/studenetetail/studentList/index.js'
import DeactivateAccount from './page/studenetetail/loginDeactivate/index.js'
import ReasonMaster from './page/studenetetail/deactivateReason/index.js'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route
          path="/admin"
          element={<AdminPage />}
        >
          <Route path="" element={<DasboardPage />}></Route>
          <Route path="product" element={<ProductList />}></Route>
          <Route path="addProduct" element={<AddProduct />}></Route>
          <Route path="category" element={<CategoryList />}></Route>
          <Route path="addCategory" element={<AddNewCategory />}></Route>
          <Route path="store" element={<StoreLists />}></Route>
          <Route path="addStore" element={<AddNewStores />}></Route>
          <Route path="supplier" element={<SupplierLists />}></Route>
          <Route path="addSupplier" element={<AddNewSupplier />}></Route>
          <Route path="units" element={<UnitMaster />}></Route>
          <Route path="purchase" element={<PuschaseListPage />}></Route>
          <Route path="addPurchase" element={<AddNewPurchase />}></Route>
          <Route path="sales" element={<SalesListPage />}></Route>
          <Route path="addsales" element={<AddNewSales />}></Route>
          <Route path="issue" element={<IssueListPage />}></Route>
          <Route path="addIssue" element={<AddNewIssue />}></Route>

          {/* setting Reception */}
          <Route path="addmission_enquiry" element={<AddmissionPage />}></Route>
          <Route path="addEnquiry" element={<AddNewQuwry />}></Route>

          <Route path="postal_record" element={<PostelList />}></Route>
          <Route path="postal_recordAdd" element={<AddPostel />}></Route>
          <Route path="call_log" element={<CallLogsList />}></Route>
          <Route path="call_logsAdd" element={<AddCallLog />}></Route>
          <Route path="visitor_log" element={<VisitorLogsList />}></Route>
          <Route path="visitor_logsAdd" element={<AddVisitorLos />}></Route>
          <Route path="complaint" element={<ComplaintList />}></Route>
          <Route path="ComplaintAdd" element={<AddComplaint />}></Route>
          <Route path="config_reception" element={<ConfigReception />}></Route>



          {/* setting start */}
          <Route path="globalSetting" element={<GlobalSetting />}></Route>
          <Route path="schoolSetting" element={<SchoolSetting />}></Route>
          <Route path="rolePermission" element={<RolePermission />}></Route>
          <Route path="addRole" element={<AddRole />}></Route>
          <Route path="session" element={<SessionMaster />}></Route>
          <Route path="translation" element={<TranslationList />}></Route>
          <Route path="addTranslation" element={<AddNewTrans />}></Route>
          <Route path="cron_job" element={<Cron_Job />}></Route>
          <Route path="modules" element={<ModulesPage />}></Route>
          <Route path="systemstudent" element={<SystemStudent />}></Route>
          <Route path="custom_field" element={<CustomFiledPage />}></Route>
          <Route path="addcustomFiled" element={<AddNewCustom />}></Route>
          <Route path="database_backup" element={<DatabaseBackupPage />}></Route>
          <Route path="addDataBase" element={<AddDataBase />}></Route>

          {/* Admission */}
          <Route path="studentAdd" element={<AddmisstionCreate />}></Route>
          <Route path="onlineAdmission" element={<OnlineAddmisstionCreate />}></Route>
          <Route path="multiImport" element={<MultiImportPage />}></Route>
          <Route path="Add_Category" element={<CategoryPage />}></Route>

          {/* Card Mangement */}
          <Route path="cardManagment" element={<IdCardListPage />}></Route>
          <Route path="idCard" element={<AddNewIdCard />}></Route>
          <Route path="studentCard" element={<StudentCard />}></Route>
          <Route path="employeeCard" element={<EmployeeListPage />}></Route>
          <Route path="cardTemplate" element={<AdmitCardTemplate />}></Route>
          <Route path="AdmitCardTemplateAdd" element={<AddAdmitCard />}></Route>
          <Route path="cardGenerate" element={<CardGeneratePage />}></Route>

          {/* student detail */}
          <Route path="studentList" element={<StudentListPage />}></Route>
          <Route path="loginDeactivate" element={<DeactivateAccount />}></Route>
          <Route path="deactivateReason" element={<ReasonMaster />}></Route>

          <Route path="*" element={<h2>NO PAGE FOUND</h2>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

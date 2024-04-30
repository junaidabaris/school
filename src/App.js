import './assets/css/rtl/core.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/pages/app-kanban.css'
import './assets/css/pages/demo.css'
import './assets/css/rtl/core-dark.css'
import './assets/css/rtl/theme-bordered.css'
import './assets/css/rtl/theme-bordered-dark.css'
import './assets/css/rtl/theme-default.css'
import './assets/css/rtl/theme-default-dark.css'
import './assets/css/rtl/theme-raspberry-dark.css'
import './assets/css/rtl/theme-semi-dark.css'
import './assets/css/rtl/theme-semi-dark-dark.css'
import './assets/css/theme-raspberry.css'



import './assets/css/pages/advanced-wizard.css'
import './assets/css/pages/app-academy.css'
import './assets/css/pages/app-academy-details.css'
import './assets/css/pages/app-calendar.css'
import './assets/css/pages/app-chat.css'
import './assets/css/pages/app-ecommerce.css'
import './assets/css/pages/app-email.css'
import './assets/css/pages/app-invoice.css'
// import './assets/css/pages/app-invoice-print.css'
import './assets/css/pages/app-logistics-dashboard.css'
import './assets/css/pages/app-logistics-fleet.css'
import '../src/assets/fonts/tabler-icons.css'
import './assets/css/pages/cards-advance.css'
import './assets/css/pages/front-page.css'
import './assets/css/pages/front-page-help-center.css'
import './assets/css/pages/front-page-landing.css'
import './assets/css/pages/front-page-payment.css'
import './assets/css/pages/front-page-pricing.css'
import './assets/css/pages/page-account-settings.css'
import './assets/css/pages/page-auth.css'
import './assets/css/pages/page-faq.css'
import './assets/css/pages/page-icons.css'
import './assets/css/pages/page-misc.css'
import './assets/css/pages/tabler.css'
import './assets/css/pages/page-pricing.css'
import './assets/css/pages/page-profile.css'
import './assets/css/pages/page-user-view.css'
import './assets/css/pages/ui-carousel.css'
import './assets/css/pages/wizard-ex-checkout.css'

import { Route, Routes } from 'react-router-dom'
import AdminPage from './page/admin';
import DasboardPage from './page/dasboardPage';
import { AdmissionPage } from './page/admission';
function App() {
  return (
    <>
      <Routes>
        <Route  path="/admin" element={<AdminPage />}>
          <Route path="" element={<DasboardPage />}></Route>
          <Route path='admission' element={<AdmissionPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

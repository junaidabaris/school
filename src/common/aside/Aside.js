import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


function Aside() {
    const [allAside, setAllAside] = useState({
        admin: false,
        inventory: false,
        career: false,
        setting: false,
        Reception: false,
        exam: false

    });

    const changeOpen = (val, str) => {
        const clone = { ...allAside };
        for (const iterator in clone) {
            if (iterator == str) {
                clone[str] = val;
            } else {
                clone[iterator] = false;
            }
        }
        setAllAside(clone);
    };

    return (
        <>
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" data-bg-class="bg-menu-theme" >
                <div className="app-brand demo">
                    <a href="index.html" className="app-brand-link">
                        {/* <span className="app-brand-logo demo">
                            <svg width={32} height={22} viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0" />
                                <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616" />
                                <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0" />
                            </svg>
                            
                        </span> */}
                        <img width={202} src="https://www.abarissoftech.com/assets/img/logo-2.png" />
                        {/* <span className="app-brand-text demo menu-text fw-bold">Vuexy</span> */}
                    </a>
                    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
                        <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle" />
                        <i className="ti ti-x d-block d-xl-none ti-sm align-middle" />
                    </a>
                </div>
                <div className="menu-inner-shadow" style={{ display: 'none' }} />
                <ul className="menu-inner py-1 ps ps--active-y">
                    {/* Dashboards */}
                    <li className={`menu-item ${allAside.admin ? "open" : ""}`}>
                        <Link to="#" className="menu-link menu-toggle" onClick={() => {
                            changeOpen(!allAside.admin, "admin");
                        }}>
                            <i className="menu-icon tf-icons ti ti-smart-home" />
                            <div data-i18n="Dashboards">Dashboards</div>
                            <div className="badge bg-primary rounded-pill ms-auto">5</div>
                        </Link >
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="index.html" className="menu-link">
                                    <div data-i18n="Analytics">All Branches</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="dashboards-crm.html" className="menu-link">
                                    <div data-i18n="CRM">Icon School & College</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="app-ecommerce-dashboard.html" className="menu-link">
                                    <div data-i18n="eCommerce">Oxford International</div>
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li className={`menu-item ${allAside.inventory ? "open" : ""}`}>
                        <Link to="#" className="menu-link menu-toggle" onClick={() => {
                            changeOpen(!allAside.inventory, "inventory");
                        }}>
                            <i className="menu-icon tf-icons ti ti-table" />
                            <div data-i18n="Tables">Inventory</div>
                        </Link >
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <NavLink to="product" className="menu-link">
                                    <div data-i18n="Basic">Product</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="category" className="menu-link">
                                    <div data-i18n="Basic">Category</div>
                                </NavLink>

                            </li>
                            <li className="menu-item">
                                <NavLink to="store" className="menu-link">
                                    <div data-i18n="Basic">Store</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="supplier" className="menu-link">
                                    <div data-i18n="Basic">Supplier</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="units" className="menu-link">
                                    <div data-i18n="Basic">Unit</div>
                                </NavLink>
                            </li>
                            {/* <li className="menu-item">
                                <a href="tables-datatables-extensions.html" className="menu-link">
                                    <div data-i18n="Extensions">Purchase</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="tables-datatables-extensions.html" className="menu-link">
                                    <div data-i18n="Extensions">Sales</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="tables-datatables-extensions.html" className="menu-link">
                                    <div data-i18n="Extensions">Issue</div>
                                </a>
                            </li> */}
                        </ul>
                    </li>

                    <li className={`menu-item ${allAside.Reception ? "open" : ""}`}>
                        <Link to="#" className="menu-link menu-toggle" onClick={() => {
                            changeOpen(!allAside.Reception, "Reception");
                        }}>
                            <i className="menu-icon tf-icons ti ti-users" />
                            <div data-i18n="Tables">Reception</div>
                        </Link >
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <NavLink to="addmission_enquiry" className="menu-link">
                                    <div data-i18n="Basic">Addmission Enquiry</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="postal_record" className="menu-link">
                                    <div data-i18n="Basic">Postal Record</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="call_log" className="menu-link">
                                    <div data-i18n="Basic">Call Log</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="visitor_log" className="menu-link">
                                    <div data-i18n="Basic">Visitor Log</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="complaint" className="menu-link">
                                    <div data-i18n="Basic">Complaint</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="config_reception" className="menu-link">
                                    <div data-i18n="Basic">Config Reception</div>
                                </NavLink>
                            </li>

                        </ul>
                    </li>

                    <li className={`menu-item ${allAside.setting ? "open" : ""}`}>
                        <Link to="#" className="menu-link menu-toggle" onClick={() => {
                            changeOpen(!allAside.setting, "setting");
                        }}>
                            <i className="menu-icon tf-icons ti ti-settings" />
                            <div data-i18n="Tables">Setting</div>
                        </Link >
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <NavLink to="globalSetting" className="menu-link">
                                    <div data-i18n="Basic">Global Settings</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="schoolSetting" className="menu-link">
                                    <div data-i18n="Basic">School Settings</div>
                                </NavLink>

                            </li>
                            <li className="menu-item">
                                <NavLink to="rolePermission" className="menu-link">
                                    <div data-i18n="Basic">Role Permission</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="session" className="menu-link">
                                    <div data-i18n="Basic">Session Settings</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="translation" className="menu-link">
                                    <div data-i18n="Basic">Translation</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="cron_job" className="menu-link">
                                    <div data-i18n="Basic">Cron Job</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="modules" className="menu-link">
                                    <div data-i18n="Basic">Modules</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="systemstudent" className="menu-link">
                                    <div data-i18n="Basic">Systrm Student Field</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="custom_field" className="menu-link">
                                    <div data-i18n="Basic">Custom Field</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="database_backup" className="menu-link">
                                    <div data-i18n="Basic">Database Backup</div>
                                </NavLink>
                            </li>

                        </ul>
                    </li>
                    <li className={`menu-item ${allAside.exam ? "open" : ""}`}>
                        <Link to="#" className="menu-link menu-toggle" onClick={() => {
                            changeOpen(!allAside.exam, "exam");
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-laptop me-2" viewBox="0 0 16 16">
                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                            </svg>
                            <div data-i18n="OnlineExam">Online Exam</div>
                        </Link >
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <NavLink to='onlineExam' className="menu-link">
                                    <div data-i18n="Analytics">Online Exam</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="questionBank" className="menu-link">
                                    <div data-i18n="CRM">Question Bank</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="questionGroup" className="menu-link">
                                    <div data-i18n="eCommerce">Question Group</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="positionGenerate" className="menu-link">
                                    <div data-i18n="Logistics">Position Generate</div>
                                </NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to="examResult" className="menu-link">
                                    <div data-i18n="Academy">Exam Result</div>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}><div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps__rail-y" style={{ top: 0, height: 384, right: 4 }}><div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 74 }} /></div></ul>
            </aside>

        </>
    )
}
export default Aside
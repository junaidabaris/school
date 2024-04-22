import { useState } from "react";
import { Link } from "react-router-dom";


function Aside() {
    const [allAside, setAllAside] = useState({
        admin: false,
        language: false,
        career: false,

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
        // setSidebarActive(true)
    };

    return (
        <>
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" data-bg-class="bg-menu-theme" >
                <div className="app-brand demo">
                    <a href="index.html" className="app-brand-link">
                        <span className="app-brand-logo demo">
                            <svg width={32} height={22} viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0" />
                                <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616" />
                                <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0" />
                            </svg>
                        </span>
                        <span className="app-brand-text demo menu-text fw-bold">Vuexy</span>
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
                                    <div data-i18n="Analytics">Analytics</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="dashboards-crm.html" className="menu-link">
                                    <div data-i18n="CRM">CRM</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="app-ecommerce-dashboard.html" className="menu-link">
                                    <div data-i18n="eCommerce">eCommerce</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="app-logistics-dashboard.html" className="menu-link">
                                    <div data-i18n="Logistics">Logistics</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="app-academy-dashboard.html" className="menu-link">
                                    <div data-i18n="Academy">Academy</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* Layouts */}


                    {/* Extended components */}

                    {/* Tables */}
                    <li className="menu-item">
                        <a href="tables-basic.html" className="menu-link">
                            <i className="menu-icon tf-icons ti ti-table" />
                            <div data-i18n="Tables">Tables</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                            <i className="menu-icon tf-icons ti ti-layout-grid" />
                            <div data-i18n="Datatables">Datatables</div>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="tables-datatables-basic.html" className="menu-link">
                                    <div data-i18n="Basic">Basic</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="tables-datatables-advanced.html" className="menu-link">
                                    <div data-i18n="Advanced">Advanced</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="tables-datatables-extensions.html" className="menu-link">
                                    <div data-i18n="Extensions">Extensions</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* Charts & Maps */}
                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text" data-i18n="Charts & Maps">Charts &amp; Maps</span>
                    </li>
                    <li className="menu-item">
                        <a href="javascript:void(0);" className="menu-link menu-toggle">
                            <i className="menu-icon tf-icons ti ti-chart-pie" />
                            <div data-i18n="Charts">Charts</div>
                        </a>
                        <ul className="menu-sub">
                            <li className="menu-item">
                                <a href="charts-apex.html" className="menu-link">
                                    <div data-i18n="Apex Charts">Apex Charts</div>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="charts-chartjs.html" className="menu-link">
                                    <div data-i18n="ChartJS">ChartJS</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <a href="maps-leaflet.html" className="menu-link">
                            <i className="menu-icon tf-icons ti ti-map" />
                            <div data-i18n="Leaflet Maps">Leaflet Maps</div>
                        </a>
                    </li>
                    {/* Misc */}
                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text" data-i18n="Misc">Misc</span>
                    </li>
                    <li className="menu-item">
                        <a href="https://pixinvent.ticksy.com/" target="_blank" className="menu-link">
                            <i className="menu-icon tf-icons ti ti-lifebuoy" />
                            <div data-i18n="Support">Support</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="https://demos.pixinvent.com/vuexy-html-admin-template/documentation/" target="_blank" className="menu-link">
                            <i className="menu-icon tf-icons ti ti-file-description" />
                            <div data-i18n="Documentation">Documentation</div>
                        </a>
                    </li>
                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}><div className="ps__thumb-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps__rail-y" style={{ top: 0, height: 384, right: 4 }}><div className="ps__thumb-y" tabIndex={0} style={{ top: 0, height: 74 }} /></div></ul>
            </aside>

        </>
    )
}
export default Aside
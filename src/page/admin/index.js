import { Outlet } from "react-router-dom"
import Aside from "../../common/aside/Aside"
import Nav from "../../common/header/nav/Nav"

function AdminPage() {
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Aside />
                    <div className="layout-page">
                        <Nav />
                        <div className="content-wrapper">
                            <Outlet></Outlet>
                        </div>
                        <div className="footer-bottom">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="bottom-text text-center">
                                            <p style={{color:"black"}}>
                                                Copyright ©2022 Abaris Softech All Rights Reserved, Share By{" "}
                                                <a href="https://abarissoftech.com/" target="_blank">
                                                    Abaris Softech
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default AdminPage
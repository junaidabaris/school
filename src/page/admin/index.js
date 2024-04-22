import { Outlet } from "react-router-dom"
import Aside from "../../common/aside/Aside"
import Nav from "../../common/header/nav/Nav"

function AdminPage() {
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Aside/>
                    <div className="layout-page">
                    <Nav/>
                        <div className="content-wrapper">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminPage
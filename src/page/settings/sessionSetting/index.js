import AddSession from "../../../componets/settings/sessionSetting/AddSession"
import ListSession from "../../../componets/settings/sessionSetting/ListSession"

function SessionMaster() {
    return <div>
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-3 mb-0">
                <span className="fw-medium"> Session Settings Master</span>
            </h4>
            <div className="app-ecommerce">

                <div className="row">
                    {/* First column*/}
                    <div className="col-12 col-lg-4">
                        <AddSession />

                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="card-header">
                            <h5 className="card-title mb-0">List Session</h5>
                        </div>
                        <ListSession />

                    </div>

                </div>
            </div>
        </div>

    </div>
}
export default SessionMaster
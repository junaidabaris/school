import AddReason from "../../../componets/studenetetail/deactivateReason/AddReason"
import ListReason from "../../../componets/studenetetail/deactivateReason/ListReason"


function ReasonMaster() {
    return <div>
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-3 mb-0">
                <span className="fw-medium"> Deactivate Reason</span>
            </h4>
            <div className="app-ecommerce">

                <div className="row">
                    {/* First column*/}
                    <div className="col-12 col-lg-4">
                        <AddReason />

                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="card-header">
                            <h5 className="card-title mb-0">List Unit</h5>
                        </div>
                        <ListReason />

                    </div>

                </div>
            </div>
        </div>

    </div>
}
export default ReasonMaster
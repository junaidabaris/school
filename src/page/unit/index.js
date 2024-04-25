import AddUnit from "../../componets/unit/AddUnit"
import ListUnit from "../../componets/unit/ListUnit"

function UnitMaster() {
    return <div>
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-3 mb-0">
                <span className="fw-medium"> Unit Master</span>
            </h4>
            <div className="app-ecommerce">

                <div className="row">
                    {/* First column*/}
                    <div className="col-12 col-lg-4">
                        <AddUnit />

                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="card-header">
                            <h5 className="card-title mb-0">List Unit</h5>
                        </div>
                        <ListUnit />

                    </div>

                </div>
            </div>
        </div>

    </div>
}
export default UnitMaster
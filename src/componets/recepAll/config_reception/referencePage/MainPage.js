
import AddUnit from "./AddUnit"
import ListUnit from "./ListUnit"

function MainPage() {
    return <div>
        <div className="container-xxl card">
            <h4 className="py-3 mb-0">
                <span className="fw-small">  Add Reference</span>
            </h4>
            <div className="app-ecommerce">

                <div className="row">
                    {/* First column*/}
                    <div className="col-12 col-lg-4">
                        <AddUnit />

                    </div>
                    <div className=" card col-12 col-lg-8">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Reference List</h5>
                        </div>
                        <ListUnit />

                    </div>

                </div>
            </div>
        </div>

    </div>
}
export default MainPage
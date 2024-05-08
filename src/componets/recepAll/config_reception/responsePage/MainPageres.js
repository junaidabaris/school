
import AddUnit from "./AddUnit"
import ListUnit from "./ListUnit"

function MainPageres({name , data}) {
    return <div>
        <div className="container-xxl card">
            <h4 className="py-3 mb-0">
                <span className="fw-small">  Add {name}</span>
            </h4>
            <div className="app-ecommerce">

                <div className="row">
                    {/* First column*/}
                    <div className="col-12 col-lg-4">
                        <AddUnit />

                    </div>
                    <div className=" card col-12 col-lg-8">
                        <div className="card-header">
                            <h5 className="card-title mb-0">{name} List</h5>
                        </div>
                        <ListUnit data={data}/>

                    </div>

                </div>
            </div>
        </div>

    </div>
}
export default MainPageres
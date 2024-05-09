import AddCatogary from "../../../componets/addmisson/category/AddCatogary"
import ListCategory from "../../../componets/addmisson/category/ListCategory"

function CategoryPage() {
    return <div>
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-3 mb-0">
                <span className="fw-medium"> Category Master</span>
            </h4>
            <div className="app-ecommerce">

                <div className="row">
                    {/* First column*/}
                    <div className="col-12 col-lg-4">
                        <AddCatogary />

                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="card-header">
                            <h5 className="card-title mb-0">List Category</h5>
                        </div>
                        <ListCategory />

                    </div>

                </div>
            </div>
        </div>

    </div>
}
export default CategoryPage
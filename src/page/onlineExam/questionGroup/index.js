import { QuestionForm } from "../../../componets/online-exam/questionGroup/QuestionForm"
import { QuestionGroupTable } from "../../../componets/online-exam/questionGroup/QuestionGroupTable"

export const QuestionGroup=()=>{
     return<div>
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-3 mb-0">
                <span className="fw-medium"> Question Group</span>
            </h4>
            <div className="app-ecommerce">

                <div className="row">
                    <div className="col-12 col-lg-4">
                    <QuestionForm/>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Group List</h5>
                        </div>
                        <QuestionGroupTable/>

                    </div>

                </div>
            </div>
        </div>
     </div>
}
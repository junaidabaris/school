import { QuestionTableData } from "../../../componets/online-exam/questionBank/QuestionTableData"

export const QuestionBank=()=>{
    return<div className="container-xxl flex-grow-1 container-p-y">
    <h3 style={{
        margin: '0 20px',
        marginBottom:'20px',
        color: 'black'
    }}>Question Bank</h3>
    <div className="card">

        <div className="card-datatable table-responsive">
            <div
                id="DataTables_Table_0_wrapper"
                className="dataTables_wrapper dt-bootstrap5 no-footer"
            >
              <QuestionTableData/>
            </div>

        </div>

    </div>
</div>
}

import { ExamTableData } from "../../componets/online-exam/ExamTableData";
export const OnlineExam = () => {

    return <div>
        <div className="container-xxl flex-grow-1 container-p-y">
            <h3 style={{
                margin: '0 20px',
                marginBottom:'20px',
                color: 'black'
            }}>Online Exam</h3>
            <div className="card">

                <div className="card-datatable table-responsive">
                    <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                    >
                        <ExamTableData/>
                    </div>

                </div>

            </div>
        </div>
    </div>
}
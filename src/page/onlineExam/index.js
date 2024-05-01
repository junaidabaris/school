import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { ExamTableData } from "../../componets/online-exam/ExamTableData";
export const OnlineExam = () => {

    return <div>
        <div className="container-xxl flex-grow-1 container-p-y">
            <h3 style={{
                margin: '0 20px',
                marginBottom:'20px',
                color: 'black'
            }}>Online Exam</h3>
            {/* Users List Table */}
            <div className="card">

                <div className="card-datatable table-responsive">
                    <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                    >
                        <ExamTableData/>
                        
                        {/* <table
                            className="datatables-users table dataTable no-footer dtr-column"
                            id="DataTables_Table_0"
                            aria-describedby="DataTables_Table_0_info"
                        >
                            <thead className="border-top">
                                <tr>

                                    <th>#</th>
                                    <th>Branch	</th>
                                    <th>Title</th>
                                    <th>Class (Section)	</th>
                                    <th>Questions Qty	</th>
                                    <th>Start Time		</th>
                                    <th> End Time		</th>
                                    <th>  Duration</th>
                                    <th>  Exam Fee</th>
                                    <th>  Exam Status</th>
                                    <th>  Created By</th>
                                    <th>  Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Icon School & College	</td>
                                    <td>General Exam With Fee	</td>
                                    <td>Six (A, B)	</td>
                                    <td>6	</td>
                                    <td>01.Jan.2024 12:00 AM	</td>
                                    <td>31.Dec.2024 11:59 AM	</td>
                                    <td>00:05:00</td>
                                    <td>$10</td>
                                    <td>Active</td>
                                    <td>Jennifer Adams	</td>
                                    <td> <EditIcon />
                                        <DeleteIcon /></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Icon School & College</td>
                                    <td>General Exam	</td>
                                    <td>Six (A, B)	</td>
                                    <td>7	</td>
                                    <td>01.Jan.2024 12:00 AM</td>
                                    <td>31.Dec.2024 11:59 PM	</td>
                                    <td>00:05:00</td>
                                    <td>Free</td>
                                    <td>Active</td>
                                    <td>Jennifer Adams</td>
                                    <td> <EditIcon />
                                        <DeleteIcon /></td>
                                </tr>
                               
                            </tbody>
                        </table> */}
                        {/* <div className="row mx-2">
                            <div className="col-sm-12 col-md-6">
                                <div
                                    className="dataTables_info"
                                    id="DataTables_Table_0_info"
                                    role="status"
                                    aria-live="polite"
                                >
                                    Showing 0 to 0 of 0 entries
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div
                                    className="dataTables_paginate paging_simple_numbers"
                                    id="DataTables_Table_0_paginate"
                                >
                                    <ul className="pagination">
                                        <li
                                            className="paginate_button page-item previous disabled"
                                            id="DataTables_Table_0_previous"
                                        >
                                            <a
                                                aria-controls="DataTables_Table_0"
                                                aria-disabled="true"
                                                role="link"
                                                data-dt-idx="previous"
                                                tabIndex={-1}
                                                className="page-link"
                                            >
                                                Previous
                                            </a>
                                        </li>
                                        <li
                                            className="paginate_button page-item previous disabled"
                                            id="DataTables_Table_0_previous"
                                        >
                                            <a
                                                aria-controls="DataTables_Table_0"
                                                aria-disabled="true"
                                                role="link"
                                                data-dt-idx="previous"
                                                tabIndex={-1}
                                                className="page-link"
                                            >
                                                1
                                            </a>
                                        </li>
                                        <li
                                            className="paginate_button page-item next disabled"
                                            id="DataTables_Table_0_next"
                                        >
                                            <a
                                                aria-controls="DataTables_Table_0"
                                                aria-disabled="true"
                                                role="link"
                                                data-dt-idx="next"
                                                tabIndex={-1}
                                                className="page-link"
                                            >
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>

                </div>

            </div>
        </div>
    </div>
}
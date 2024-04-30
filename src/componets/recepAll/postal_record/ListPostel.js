import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

function ListPostel() {
    return <div>
        <div className="container-xxl flex-grow-1 container-p-y">

            {/* Users List Table */}
            <div className="card">

                <div className="card-datatable table-responsive">
                    <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                    >
                        <div className="row me-2">
                            <div className="col-md-2">
                                <div className="me-3">
                                    <div className="dataTables_length" id="DataTables_Table_0_length">
                                        <label>
                                            <select
                                                name="DataTables_Table_0_length"
                                                aria-controls="DataTables_Table_0"
                                                className="form-select"
                                            >
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100}>100</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0">
                                    <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                        <label>
                                            <input
                                                type="search"
                                                className="form-control"
                                                placeholder="Search.."
                                                aria-controls="DataTables_Table_0"
                                            />
                                        </label>
                                    </div>
                                    <div className="dt-buttons btn-group flex-wrap">
                                        {" "}
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-secondary buttons-collection dropdown-toggle btn-label-secondary mx-3 waves-effect waves-light"
                                                tabIndex={0}
                                                aria-controls="DataTables_Table_0"
                                                type="button"
                                                aria-haspopup="dialog"
                                                aria-expanded="false"
                                            >
                                                <span>
                                                    <i className="ti ti-screen-share me-1 ti-xs" />
                                                    Export
                                                </span>
                                            </button>
                                        </div>{" "}
                                        <Link
                                            className="btn btn-secondary add-new btn-primary waves-effect waves-light"
                                            to={'/admin/postal_recordAdd'}
                                        >
                                            <span>
                                                <i className="ti ti-plus me-0 me-sm-1 ti-xs" />
                                                <span className="d-none d-sm-inline-block">Add New Postal Record</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table
                            className="datatables-users table dataTable no-footer dtr-column"
                            id="DataTables_Table_0"
                            aria-describedby="DataTables_Table_0_info"
                        >
                            <thead className="border-top">
                                <tr>

                                    <th>#</th>
                                    <th>Branch	</th>
                                    <th>type</th>
                                    <th>Sender Title	</th>
                                    <th>Receiver Title	</th>
                                    <th>Date		</th>
                                    <th>Confidential		</th>
                                    <th>  Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Icon School & College	</td>
                                    <td>Dispatch	</td>
                                    <td>Letter Dispatched		</td>
                                    <td>Ahmad Shazad	</td>
                                    <td>27.Feb.2024	</td>
                                    <td>Yes 	</td>
                                    <td> <EditIcon />
                                        <DeleteIcon /></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Icon School & College	</td>
                                    <td>Dispatch	</td>
                                    <td>Admin		</td>
                                    <td>Secretary	</td>
                                    <td>29.Apr.2024	</td>
                                    <td>Yes 	</td>
                                    <td> <EditIcon />
                                        <DeleteIcon /></td>
                                </tr>
                               
                            </tbody>
                        </table>
                        <div className="row mx-2">
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
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>
}
export default ListPostel
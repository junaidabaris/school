import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

function ListAddmissionQuery() {
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
                                            to={'/admin/addEnquiry'}
                                        >
                                            <span>
                                                <i className="ti ti-plus me-0 me-sm-1 ti-xs" />
                                                <span className="d-none d-sm-inline-block">Add New Enquiry</span>
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
                                    <th>Name</th>
                                    <th>Mobile	</th>
                                    <th>Guardian	</th>
                                    <th>Reference		</th>
                                    <th>Enquiry Date		</th>
                                    <th>  Next Follow Up Date</th>
                                    <th>  State</th>
                                    <th>  Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Oxford International	</td>
                                    <td>Rama Rama	</td>
                                    <td>9856231253	</td>
                                    <td>Father Name : Rigi Goau
                                        Mother Name : Fili Mars	</td>
                                    <td>Google Ads	</td>
                                    <td>01.Mar.2024	</td>
                                    <td>-</td>
                                    <td>Active</td>
                                    <td> <EditIcon />
                                        <DeleteIcon /></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Icon School & College	</td>
                                    <td>Balmiki Kumar		</td>
                                    <td>07666736153		</td>
                                    <td>Father Name : abc efe
                                        Mother Name : asdf		</td>
                                    <td>Advertisement	</td>
                                    <td>04.Mar.2024	</td>
                                    <td>13.Apr.2024	</td>
                                    <td>Active</td>
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
export default ListAddmissionQuery
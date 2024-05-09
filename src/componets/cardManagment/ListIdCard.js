import { Link } from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
function ListIdCard() {
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
                                            to={'/admin/idCard'}
                                        >
                                            <span>
                                                <i className="ti ti-plus me-0 me-sm-1 ti-xs" />
                                                <span className="d-none d-sm-inline-block">Add Id Card</span>
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
                                    <th>Branch</th>
                                    <th>Name</th>
                                    <th>Applicable User</th>
                                    <th>Page Layout</th>
                                    <th>Background Image</th>
                                    <th>  Created At</th>
                                    <td>Action</td>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Icon School & College	</td>
                                    <td>Templete1</td>
                                    <td>Student</td>
                                    <td>Width 60.452mm x Height 96.856mm	</td>
                                    <td>-</td>
                                    <td>18.May.2022	</td>
                                    <td> <EditIcon />
                                        <DeleteIcon /></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Icon School & College	</td>
                                    <td>Templete2</td>
                                    <td>Student</td>
                                    <td>Width 96.856mm x Height 64.0mm</td>
                                    <td>-</td>
                                    <td>18.May.2022	</td>
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
                {/* Offcanvas to add new user */}
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasAddUser" aria-labelledby="offcanvasAddUserLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasAddUserLabel" className="offcanvas-title">Add User</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                        <form className="add-new-user pt-0" id="addNewUserForm" onsubmit="return false">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="add-user-fullname">Full Name</label>
                                <input type="text" className="form-control" id="add-user-fullname" placeholder="John Doe" name="userFullname" aria-label="John Doe" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="add-user-email">Email</label>
                                <input type="text" id="add-user-email" className="form-control" placeholder="john.doe@example.com" aria-label="john.doe@example.com" name="userEmail" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="add-user-contact">Contact</label>
                                <input type="text" id="add-user-contact" className="form-control phone-mask" placeholder="+1 (609) 988-44-11" aria-label="john.doe@example.com" name="userContact" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="add-user-company">Company</label>
                                <input type="text" id="add-user-company" className="form-control" placeholder="Web Developer" aria-label="jdoe1" name="companyName" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="country">Country</label>
                                <select id="country" className="select2 form-select">
                                    <option value>Select</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Canada">Canada</option>
                                    <option value="China">China</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Korea">Korea, Republic of</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Russia">Russian Federation</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="user-role">User Role</label>
                                <select id="user-role" className="form-select">
                                    <option value="subscriber">Subscriber</option>
                                    <option value="editor">Editor</option>
                                    <option value="maintainer">Maintainer</option>
                                    <option value="author">Author</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="form-label" htmlFor="user-plan">Select Plan</label>
                                <select id="user-plan" className="form-select">
                                    <option value="basic">Basic</option>
                                    <option value="enterprise">Enterprise</option>
                                    <option value="company">Company</option>
                                    <option value="team">Team</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                            <button type="reset" className="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
export default ListIdCard
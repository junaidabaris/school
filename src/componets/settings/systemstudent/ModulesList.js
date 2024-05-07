
export const ModulesList = () => {
    return <div className="card mb-4">
        <div className="card-body">
            <h5>Addmintion Field List</h5>
            <div class="">
                <div className="card-datatable table-responsive">
                    <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                    >

                        <table
                            className="datatables-users table dataTable no-footer dtr-column"
                            // className={`${tableStyles.table}`}   
                            id="DataTables_Table_0"
                            aria-describedby="DataTables_Table_0_info"
                        >
                            <thead className="border-top">
                                <tr>
                                    <th>#</th>
                                    <th> Name</th>
                                    <th>Active</th>
                                    <th>Requierd</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Attachments Book	</td>
                                    <td>
                                        <label class="switch switch-square switch-lg">
                                            <input type="checkbox" class="switch-input" />
                                            <span class="switch-toggle-slider">
                                                <span class="switch-on">
                                                    <i class="ti ti-check"></i>
                                                </span>
                                            </span>
                                        </label>
                                        	</td>
                                    <td>
                                        <label class="switch switch-square switch-lg">
                                            <input type="checkbox" class="switch-input" />
                                            <span class="switch-toggle-slider">
                                                <span class="switch-on">
                                                    <i class="ti ti-check"></i>
                                                </span>
                                            </span>
                                        </label>
                                        	</td>

                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td> Attendance	</td>
                                    <td>
                                        <label class="switch switch-square switch-lg">
                                            <input type="checkbox" class="switch-input" />
                                            <span class="switch-toggle-slider">
                                                <span class="switch-on">
                                                    <i class="ti ti-check"></i>
                                                </span>
                                            </span>
                                        </label>
                                        	</td>
                                    <td>
                                        <label class="switch switch-square switch-lg">
                                            <input type="checkbox" class="switch-input" />
                                            <span class="switch-toggle-slider">
                                                <span class="switch-on">
                                                    <i class="ti ti-check"></i>
                                                </span>
                                            </span>
                                        </label>
                                    </td>

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
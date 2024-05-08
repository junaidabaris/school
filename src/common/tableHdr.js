import { Link } from "react-router-dom";

export const RenderHeader = ({globalFilterValue, onGlobalFilterChange, exportExcel}) => {
    return (
        <div className='row me-2'>
            <div className='col-md-2'></div>
            <div className='col-md-10'>
            <div className="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0">
                <div id="DataTables_Table_0_filter" className="dataTables_filter">
                    <label>
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search.."
                            aria-controls="DataTables_Table_0"
                            value={globalFilterValue} onChange={onGlobalFilterChange}
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
                            <span type="button" icon="pi pi-file-excel" severity="success" rounded data-pr-tooltip="XLS" onClick={exportExcel}>
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
                            <span className="d-none d-sm-inline-block" >Add Online Exam</span>
                        </span>
                    </Link>
                </div>
            </div>
            </div>

        </div>
    );
};
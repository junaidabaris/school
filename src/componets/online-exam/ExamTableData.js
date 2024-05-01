import { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { saveAsExcelFile } from '../../common/utils';
import { Link } from 'react-router-dom';


const data = [
    {
        sl: '1',
        branch: 'cal2 School & College',
        title: 'General Exam',
        class: 'Six (A, B)',
        question: '7',
        start: '01.Jan.2024 12:00 AM',
        end: '31.Dec.2024 11:59 PM',
        duration: '00:05:00',
        examFee: '	Free',
        examSataus: 'Active',
        created: 'Jennifer Adams',
        action: 'Accessories',
    },
    {
        sl: '2',
        branch: 'col1 Icon School & College',
        title: 'General Exam With Fee',
        class: 'Six (A, B)',
        question: '6',
        start: '01.Jan.2024 12:00 AM',
        end: '31.Dec.2024 11:59 PM',
        duration: '00:05:00',
        examFee: '$10',
        examSataus: 'Active',
        created: 'Jennifer Adams',
        action: 'Accessories',
    },
]
const columsData = [
    {
        header: 'SL',
        key: 'sl'
    },
    {
        header: 'Branch',
        key: 'branch'
    },
    {
        header: 'Title',
        key: 'title'
    },
    {
        header: 'Class (Section)',
        key: 'class'
    },
    {
        header: 'Question Qty',
        key: 'question'
    },
    {
        header: 'Start Time',
        key: 'start'
    },
    {
        header: 'End Time',
        key: 'end'
    },
    {
        header: 'Duration',
        key: 'duration'
    },
    {
        header: 'Exam Fee',
        key: 'examFee'
    },
    {
        header: ' Exam Status',
        key: 'examSataus'
    },
    {
        header: 'Created By',
        key: 'created'
    },
    {
        header: ' Action',
        key: 'action'
    },
]
export const ExamTableData = () => {
    const dt = useRef(null);
    const [products, setProducts] = useState([...data]);
    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        mobile: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };
    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            console.log('data---', data)
            const worksheet = xlsx.utils.json_to_sheet(data);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['sheet1'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'products');
        });
    };


    console.log('global filter', globalFilterValue)
    const renderHeader = () => {
        return (
            <div className='row me-2'>
                <div className='col-md-2'>dsfds</div>
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
                                <span className="d-none d-sm-inline-block" >Add New Enquiry</span>
                            </span>
                        </Link>
                    </div>
                </div>
                </div>
                {/* <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <input value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
                <button type="button" icon="pi pi-file-excel" severity="success" rounded data-pr-tooltip="XLS" onClick={exportExcel}>
                    export
                </button> */}

            </div>
        );
    };
    
   
    return (
        <div>
            <DataTable ref={dt} value={products}   rows={5} rowsPerPageOptions={[5, 10, 25, 50]} filterDisplay="row"
                header={renderHeader()}
                filters={filters}
                globalFilterFields={['branch']}
            >

                {columsData.map((column) => {
                    return (
                        <Column sortable key={column.key} field={column.key} header={column.header}></Column>
                    )
                })}
            </DataTable>
        </div>
    )
}
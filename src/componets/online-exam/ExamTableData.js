import { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import { saveAsExcelFile } from '../../common/utils';
import { Link } from 'react-router-dom';
import { RenderHeader } from './tableHdr';


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
            const worksheet = xlsx.utils.json_to_sheet(data);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['sheet1'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'products');
        });
    };
    
    return (
        <div>
            <DataTable ref={dt} value={products}   rows={5} rowsPerPageOptions={[5, 10, 25, 50]} filterDisplay="row"
                header={<RenderHeader globalFilterValue={globalFilterValue} onGlobalFilterChange={onGlobalFilterChange} exportExcel={exportExcel}/>}
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
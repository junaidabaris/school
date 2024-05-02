
import { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import { RenderHeader } from '../../../common/tableHdr';
import { saveAsExcelFile } from '../../../common/utils';
import { Paginator } from 'primereact/paginator';

const data = [
    {
        sl: '1',
        branch: 'Icon School & College',
        question: 'Which one of the Following is C.P.U?',
        group: 'Computer Knowledge	',
        class: 'Six (A)',
        subject: 'Mathematic	',
        type: '	Single Choice',
        level: '	Medium',
        action: 'icon',
    },
    {
        sl: '2',
        branch: 'Icon School & College',
        question: 'Which one of the following parts of a computer looks like an animal?',
        group: 'Computer Knowledge	',
        class: 'Six (A)',
        subject: 'Mathematic	',
        type: '	Single Choice',
        level: '	Easy',
        action: 'icon',
    },
    {
        sl: '3',
        branch: 'Icon School & College',
        question: 'A keyboard has _________ keys.',
        group: 'Computer Knowledge	',
        class: 'Six (A)',
        subject: 'Mathematic	',
        type: '	Single Choice',
        level: 'Easy',
        action: 'icon',
    },
    {
        sl: '4',
        branch: 'Icon School & College',
        question: '	The successor of 99 is?',
        group: '	Maths',
        class: 'Six (A)',
        subject: 'Mathematic	',
        type: '	Single Choice',
        level: '	Easy',
        action: 'icon',
    },
    {
        sl: '5',
        branch: 'Icon School & College',
        question: 'In the international system of numeration we write one billion for?',
        group: 'General',
        class: 'Six (A)',
        subject: 'Einglish		',
        type: '	Single Choice',
        level: '	Medium',
        action: 'icon',
    },
    {
        sl: '6',
        branch: 'Icon School & College',
        question: 'When the sum of the measures of two angles is 90°, the angles are called',
        group: 'Maths',
        class: 'Six (A)',
        subject: 'Einglish	',
        type: '	Single Choice',
        level: 'Hard',
        action: 'icon',
    },
    {
        sl: '7',
        branch: 'Icon School & College',
        question: 'Plasmolysis occurs due to-',
        group: 'General',
        class: 'Six (A)',
        subject: '	Biology	',
        type: '	Single Choice',
        level: '	Medium',
        action: 'icon',
    },
    {
        sl: '8',
        branch: 'Icon School & College',
        question: 'Which of these are programming languages?	',
        group: 'Computer Knowledge	',
        class: 'Six (A)',
        subject: '	Biology	',
        type: '	Multiple Choice',
        level: '	Medium',
        action: 'icon',
    },
    {
        sl: '9',
        branch: 'Icon School & College',
        question: 'Sun is the ultimate source of energy?',
        group: 'Computer Knowledge	',
        class: 'Six (A)',
        subject: 'Einglish',
        type: 'True/false	',
        level: '	Medium',
        action: 'icon',
    },
    {
        sl: '10',
        branch: 'Icon School & College',
        question: '	Heat liberated per gram of a fuel is called :',
        group: 'General	',
        class: 'Six (A)',
        subject: 'Biology',
        type: 'Multiple Choice	',
        level: '	Medium',
        action: 'icon',
    },
    {
        sl: '11',
        branch: 'Icon School & College',
        question: 'Prince Harry is taller than Prince William',
        group: '	General	',
        class: 'Six (A)',
        subject: 'Einglish	',
        type: '	True/false',
        level: 'Easy',
        action: 'icon',
    },
]
const columsData = [
    {
        header: 'SL',
        key: 'sl'
    },
    {
        header: 'BRANCH',
        key: 'branch'
    },
    {
        header: 'QUESTION',
        key: 'question'
    },
    {
        header: 'GROUP',
        key: 'group'
    },
    {
        header: 'CLASS',
        key: 'class'
    },
    {
        header: 'SUBJECT',
        key: 'subject'
    },
    {
        header: 'TYPE',
        key: 'type'
    },
    {
        header: 'LEVEL',
        key: 'level'
    },
    {
        header: ' ACTION',
        key: 'action'
    },
]

export const QuestionTableData = () => {
    const dt = useRef(null);
    const [first, setFirst] = useState(0);
    const [products, setProducts] = useState([...data]);
    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        mobile: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });
    
    const onPageChange = (event) => {
        setFirst(event.first);
    };
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
            <DataTable ref={dt} value={products}
                header={<RenderHeader globalFilterValue={globalFilterValue} onGlobalFilterChange={onGlobalFilterChange} exportExcel={exportExcel} />}
                filters={filters}
                globalFilterFields={['branch', 'question']}
            >
                {columsData.map((column) => {
                    if (column.key === 'action') {
                        return <Column key={column.key} header={column.header} style={{borderBottom:'1px solid',borderColor:'#80808036'}} body={<div className='d-flex'>
                            <button className='border-0 bg-transparent'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-view-list" viewBox="0 0 16 16"><path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14"/></svg></button>
                            <button className='border-0 bg-transparent'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16"> <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" /></svg></button>
                            <button className='border-0 bg-transparent'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" /></svg></button>
                        </div>} />
                    }
                    return (
                        <Column sortable key={column.key} field={column.key} header={column.header} style={{borderBottom:'1px solid',borderColor:'#80808036'}}></Column>
                    )
                })}
            </DataTable>
            <Paginator first={first} rows={10} totalRecords={50} onPageChange={onPageChange} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />

        </div>
    )
}
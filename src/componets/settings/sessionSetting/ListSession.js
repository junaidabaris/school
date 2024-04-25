

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
function ListSession() {
    return <div className="card mb-4">
        <table
            className="datatables-users table dataTable no-footer dtr-column"
            id="DataTables_Table_0"
            aria-describedby="DataTables_Table_0_info"
        >
            <thead className="border-top">
                <tr>

                    <th>#</th>
                    <th>Session</th>
                    <th> Status</th>
                    <th> Created At</th>
                    <th>  Action</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2022-2023</td>
                    <td>  </td>
                    <td>  26.Feb.2022	</td>
                    <td>
                        <EditIcon />
                        <DeleteIcon />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}
export default ListSession
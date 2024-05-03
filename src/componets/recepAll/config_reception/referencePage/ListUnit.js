
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';function ListUnit() {
    return <div className="card mb-4">
        <table
            className="datatables-users table dataTable no-footer dtr-column"
            id="DataTables_Table_0"
            aria-describedby="DataTables_Table_0_info"
        >
            <thead className="border-top">
                <tr>

                    <th>#</th>
                    <th>Branch</th>
                    <th> Name</th>
                    <th>  Action</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Icon School & College	</td>
                    <td>  Google Ads	</td>
                    <td>  <EditIcon />
                        <DeleteIcon /></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Oxford International	</td>
                    <td> Google Ads	</td>
                    <td>  <EditIcon />
                        <DeleteIcon /></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Icon School & College	</td>
                    <td> Facebook Ads	</td>
                    <td>  <EditIcon />
                        <DeleteIcon /></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Oxford International	</td>
                    <td>Facebook Ads	</td>
                    <td>  <EditIcon />
                        <DeleteIcon /></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Icon School & College	</td>
                    <td> Advertisement</td>
                    <td>  <EditIcon />
                        <DeleteIcon /></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Oxford International	</td>
                    <td> Advertisement</td>
                    <td>  <EditIcon />
                        <DeleteIcon /></td>
                </tr>
            </tbody>
        </table>
    </div>
}
export default ListUnit
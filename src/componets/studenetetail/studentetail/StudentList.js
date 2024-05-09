

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
export const StudentList = () => {
    return <div className="card" style={{ padding: "10px", margin: "20px 0" }}>
        <h5>Student List</h5>
        <form className="row">
            <div className="form-group col-3">
                <label htmlFor="branch">Search</label>
                <input className="form-control" type="text" />
            </div>

            <table
                className="datatables-users table dataTable no-footer dtr-column"
                id="DataTables_Table_0"
                aria-describedby="DataTables_Table_0_info"
            >
                <thead className="border-top">
                    <tr>
                    
                        <th>#</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Class	</th>
                        <th>Section</th>
                        <th>Register No</th>
                        <th>Roll</th>
                        <th>Age</th>
                        <th>Guardian Name</th>
                        <th>Fees Progress</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>Nilam Pingle	</td>
                        <td>Seven</td>
                        <td>A</td>
                        <td>RSM-00007	</td>
                        <td>1</td>
                        <td>20</td>
                        <td>Aiden Loxton</td>
                        <td>Aiden Loxton	</td>
                        <td>
                            <EditIcon />
                            <DeleteIcon />
                        </td>

                    </tr>
                </tbody>
            </table>
        </form>
    </div>
}
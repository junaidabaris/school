

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
                        <th>Register No</th>
                        <th>Roll</th>
                        <th>Guardian Name</th>
                        <th>Class	</th>
                        <th>Deactivate Reason</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                  No Data
                </tbody>
            </table>
        </form>
    </div>
}
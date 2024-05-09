
export const StudentList = () => {
    return <div className="card" style={{ padding: "10px", margin: "20px 0" }}>
        <h5>Student List</h5>
        <form className="row">
            <div className="form-group col-3">
                <label htmlFor="branch">Print Date</label>
                <input className="form-control" type="date" />
            </div>
           
            <table
                className="datatables-users table dataTable no-footer dtr-column"
                id="DataTables_Table_0"
                aria-describedby="DataTables_Table_0_info"
            >
                <thead className="border-top">
                    <tr>

                        <th>#</th>
                        <th>Student Name</th>
                        <th>Category</th>
                        <th>Register No	</th>
                        <th>Roll</th>
                        <th>Mobile No</th>

                    </tr>
                </thead>
                <tbody>
                   <tr>
                    <td>1</td>
                    <td>Danielle Solomon	</td>
                    <td>General</td>
                    <td>RSM-00001	</td>
                    <td>1</td>
                    <td>+17573352201</td>
                   </tr>
                </tbody>
            </table>
        </form>
    </div>
}
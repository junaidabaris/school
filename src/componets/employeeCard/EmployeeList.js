
export const EmployeeList = () => {
    return <div className="card" style={{ padding: "10px", margin: "20px 0" }}>
        <h5> Employee List</h5>
        <form className="row">
            <div className="form-group col-3">
                <label htmlFor="branch">Print Date</label>
                <input className="form-control" type="date" />
            </div>
            <div className="form-group col-3">
                <label htmlFor="class">Expiry Date</label>
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
                        <th> Name</th>
                        <th>Staff Id	</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Mobile No</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Earnestine Tennant	</td>
                        <td>92a4312</td>
                        <td>Library</td>
                        <td>Librarian</td>
                        <td>+71201-739-9442</td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
}
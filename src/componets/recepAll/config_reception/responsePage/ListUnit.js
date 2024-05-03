
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
function ListUnit({data}) {
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
                {data && data?.map((item , i)=>{
                    return <tr>
                    <td>{1 +i}</td>
                    <td>{item?.Branch}</td>
                    <td> {item?.Name}</td>
                    <td>  <EditIcon />
                        <DeleteIcon /></td>
                </tr>
                })}
                
               
              
            </tbody>
        </table>
    </div>
}
export default ListUnit
import { SelectGround } from "../../../componets/studenetetail/studentetail/SelectGround"
import { StudentList } from "../../../componets/studenetetail/studentetail/StudentList"

function StudentListPage() {
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '0 20px',
            color: 'black'
        }}>Student List</h3>
        <SelectGround/>
        <StudentList/>
    </div>
}
export default StudentListPage
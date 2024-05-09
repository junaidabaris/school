import { SelectGround } from "../../componets/studentCard/SelectGround"
import { StudentList } from "../../componets/studentCard/StudentList"

function StudentCard() {
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '0 20px',
            color: 'black'
        }}>Student Id Card Generate</h3>
        <SelectGround/>
        <StudentList/>
    </div>
}
export default StudentCard
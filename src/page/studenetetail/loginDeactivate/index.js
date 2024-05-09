import { SelectGround } from "../../../componets/studenetetail/loginDeactivate/SelectGround"
import { StudentList } from "../../../componets/studenetetail/loginDeactivate/StudentList"

function DeactivateAccount() {
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '0 20px',
            color: 'black'
        }}>Deactivate Account</h3>
        <SelectGround/>
        <StudentList/>
    </div>
}
export default DeactivateAccount
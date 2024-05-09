import { EmployeeList } from "../../componets/employeeCard/EmployeeList"
import { SelectGround } from "../../componets/employeeCard/SelectGround"

function EmployeeListPage() {
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '0 20px',
            color: 'black'
        }}>Employee Id Card Generate
        </h3>
        <SelectGround/>
        <EmployeeList/>
    </div>
}
export default EmployeeListPage
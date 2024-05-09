import { SelectGround } from "../../componets/cardGenerate/SelectGround"
import { StudentList } from "../../componets/studentCard/StudentList"

function CardGeneratePage() {
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '0 20px',
            color: 'black'
        }}>Admit Card Generate</h3>
        <SelectGround/>
        <StudentList/>
    </div>
}
export default CardGeneratePage
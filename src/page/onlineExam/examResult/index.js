import { PositionSelectGroup } from "../../../common/positionGenerate/PositionSelectGroup"

export const ExamResult = () => {
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '10px 0',
            color: 'black'
        }}>Online Exam Result</h3>
        <PositionSelectGroup />
    </div>
}
import { PositionSelectGroup } from "../../../common/positionGenerate/PositionSelectGroup"

export const PositionGenerate=()=>{
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '10px 0',
            color: 'black'
        }}>Position Generate</h3>
        <PositionSelectGroup/>
    </div>
}
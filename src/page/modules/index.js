import { ModulesList } from "../../componets/settings/modules/ModulesList"
import { SelectGround } from "../../componets/settings/modules/SelectGround"

function ModulesPage() {
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '10px 0',
            color: 'black'
        }}>Modules</h3>
        <SelectGround/>
        <ModulesList/>
    </div>
}
export default ModulesPage
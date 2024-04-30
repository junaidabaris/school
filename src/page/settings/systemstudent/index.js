// import { ModulesList } from "../../componets/"
// import { SelectGround } from "../../componets/settings/modules/SelectGround"

import { ModulesList } from "../../../componets/settings/systemstudent/ModulesList"
import { ProfileSystem } from "../../../componets/settings/systemstudent/ProfileSystem"
import { SelectGround } from "../../../componets/settings/systemstudent/SelectGround"

function SystemStudent() {
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '10px 0',
            color: 'black'
        }}>System Student Field</h3>
        <SelectGround/>
        <ModulesList/>
        <ProfileSystem/>
    </div>
}
export default SystemStudent
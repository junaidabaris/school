
import OnlineAddmission from "../../../componets/addmisson/onlineAdmission/OnlineAddmission"
import TopOnlineSec from "../../../componets/addmisson/onlineAdmission/TopOnlineSec"

function OnlineAddmisstionCreate() {
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '0 20px',
            color: 'black'
        }}>Online Admission</h3>
        <TopOnlineSec/>
        <OnlineAddmission/>
    </div>
}
export default OnlineAddmisstionCreate
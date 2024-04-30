import { FeesReminder } from "../../../componets/settings/cron_job/FeesReminder"
import { ScheduledEmail } from "../../../componets/settings/cron_job/ScheduledEmail"
import { ScheduledHome } from "../../../componets/settings/cron_job/ScheduledHome"
import { SecretKey } from "../../../componets/settings/cron_job/SecretKey"

function Cron_Job (){
    return <div style={{ margin: "20px" }}>
    <h3 style={{
        margin: '10px 0',
        color: 'black'
    }}>Cron Job</h3>
    <SecretKey/>
    <ScheduledEmail/>
    <ScheduledHome/>
    <FeesReminder/>
</div>
}
export default Cron_Job
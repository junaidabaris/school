
export const ScheduledEmail = () => {
    return <div className="card mb-4">
        <div className="card-body">
            <h5>Scheduled Email/SMS Cron Job Command [once per minute or higher]</h5>
            <input value='curl https://www.ramomcoder.com/saas/cron_api/send_smsemail_command/ea6fa3f6539a5029f5d924b20960ea6f' className="form-control" disabled/>
        </div>
    </div>
}

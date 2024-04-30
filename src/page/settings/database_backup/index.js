
import ListDataBase from "../../../componets/settings/database_backup/ListDataBase"

function DatabaseBackupPage() {
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '0 20px',
            color: 'black'
        }}>Database Backup</h3>
        <ListDataBase />
    </div>
}
export default DatabaseBackupPage
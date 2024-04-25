import ListRole from "../../../componets/settings/rolePermission/ListRole"

function RolePermission() {
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '0 20px',
            color: 'black'
        }}> Roles List</h3>
        <ListRole/>
    </div>
}
export default RolePermission
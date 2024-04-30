export const SecretKey = () => {
    return <div className="card mb-4">
        <div className="card-body">
            <h5>Secret Key</h5>
            <input value='ea6fa3f6539a5029f5d924b20960ea6f' className="form-control" disabled/>
            <button type="button" class="btn btn-primary" style={{margin:"10px 0"}}> Re-generate API Key</button>
        </div>
    </div>
}

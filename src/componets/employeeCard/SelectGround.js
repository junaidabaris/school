export const SelectGround = () => {
    return <div className="card" style={{ padding: "10px" }}>
        <h5>Select Ground</h5>
        <form className="row">
            <div className="form-group col-4">
                <label htmlFor="branch">Branch:</label>
                <select className="form-control" id="branch">
                    <option>Select Branch</option>
                    <option>Branch 1</option>
                    <option>Branch 2</option>
                    <option>Branch 3</option>
                </select>
            </div>
            <div className="form-group col-4">
                <label htmlFor="class">Role :</label>
                <select className="form-control" id="template">
                    <option>Select Role </option>
                    <option>Role  1</option>
                    <option>Role  2</option>
                    <option>Role  3</option>
                </select>
            </div>
            <div className="form-group col-4">
                <label htmlFor="section">Templete :</label>
                <select className="form-control" id="template">
                    <option>Select Templete </option>
                    <option>Templete  1</option>
                    <option>Templete  2</option>
                    <option>Templete  3</option>
                </select>
            </div>
        
            <div className="form-group col-3">
                <button type="submit" className="btn btn-primary">Filter</button>
            </div>

        </form>
    </div>
}
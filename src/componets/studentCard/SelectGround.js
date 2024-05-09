export const SelectGround = () => {
    return <div className="card" style={{ padding: "10px" }}>
        <h5>Select Ground</h5>
        <form className="row">
            <div className="form-group col-3">
                <label htmlFor="branch">Branch:</label>
                <select className="form-control" id="branch">
                    <option>Select Branch</option>
                    <option>Branch 1</option>
                    <option>Branch 2</option>
                    <option>Branch 3</option>
                </select>
            </div>
            <div className="form-group col-3">
                <label htmlFor="class">Class:</label>
                <select className="form-control" id="template">
                    <option>Select Class</option>
                    <option>Class 1</option>
                    <option>Class 2</option>
                    <option>Class 3</option>
                </select>
            </div>
            <div className="form-group col-3">
                <label htmlFor="section">Section:</label>
                <select className="form-control" id="template">
                    <option>Select Section</option>
                    <option>Section 1</option>
                    <option>Section 2</option>
                    <option>Section 3</option>
                </select>
            </div>
            <div className="form-group col-3">
                <label htmlFor="template">Template:</label>
                <select className="form-control" id="template">
                    <option>Select Template</option>
                    <option>Template 1</option>
                    <option>Template 2</option>
                    <option>Template 3</option>
                </select>
            </div>
            <div className="form-group col-3">
                <button type="submit" className="btn btn-primary">Filter</button>
            </div>

        </form>
    </div>
}
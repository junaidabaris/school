
// import "../../../assets/css/select2/select2.js"
// import "../../../assets/css/select2/select2.css"
export const SelectGround = () => {
    return <div className="card mb-4">
        <div className="card-body">
            <h5>Select Ground</h5>
            <div class="col-md-6 mb-4">
                <label for="select2Basic" class="form-label">Basic</label>
                <select id="select2Basic" class="select2 form-select form-select-lg" data-allow-clear="true">
                    <option value="AK">Icon School & College</option>
                    <option value="HI">Oxford International</option>

                </select>
            </div>
            <button type="button" class="btn btn-primary" style={{ margin: "10px 0" }}>Filter</button>
        </div>
    </div>
}
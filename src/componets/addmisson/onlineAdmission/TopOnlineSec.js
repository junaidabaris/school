
function TopOnlineSec() {
    return <div>
        <div className="container-xxl flex-grow-1 container-p-y">

            {/* Users List Table */}
            <div className="card">
            <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper dt-bootstrap5 no-footer"
                        style={{padding:"10px"}}
                    >

                        <form className="row">
                            <div class="form-group col-6">
                                <label for="branch">Branch:</label>
                                <select class="form-control" id="branch">
                                    <option value="">Select Branch</option>
                                    <option value="branch1">Branch 1</option>
                                    <option value="branch2">Branch 2</option>
                                    <option value="branch3">Branch 3</option>
                                </select>
                            </div>
                            <div class="form-group col-6">
                                <label for="class">Class:</label>
                                <select class="form-control" id="class">
                                    <option value="">Select Class</option>
                                    <option value="class1">Class 1</option>
                                    <option value="class2">Class 2</option>
                                    <option value="class3">Class 3</option>
                                </select>
                            </div>
                        </form>
                            <button type="submit" class="btn btn-primary">Filter</button>

                    </div>
            </div>
        </div>

    </div>
}
export default TopOnlineSec
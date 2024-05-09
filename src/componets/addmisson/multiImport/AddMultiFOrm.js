import { CiSaveDown1 } from "react-icons/ci"

function AddMultiFOrm() {

    return <div>
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">

                <div className="app-ecommerce">

                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="card mb-4 paddingBoth">
                                <div className="topSec">
                                    <a href="https://www.ramomcoder.com/saas/student/csv_Sampledownloader">
                                        <button type="button" className="btn btn-light"><CiSaveDown1 style={{ fontSize: "20px", marginRight: "10px" }} />
                                            Download Sample Imposart File</button> </a>
                                </div>
                                <h5 style={{ margin: "10px 0" }}>Instructions :</h5>
                                <ul className="list-group">
                                    <ol className="list-group-item">Download the first sample file.</ol>
                                    <ol className="list-group-item">Open the downloaded 'csv' file and carefully fill the details of the student.</ol>
                                    <ol className="list-group-item">The date you are trying to enter the "Birthday" and "AdmissionDate" column make sure the date format is Y-m-d (2024-05-04).</ol>
                                    <ol className="list-group-item">Do not import the duplicate "Roll Number" And "Register No".</ol>
                                    <ol className="list-group-item">For student "Gender" use Male, Female value.</ol>
                                    <ol className="list-group-item">If enable Automatically Generate login details, leave the "username" and "password" columns blank.</ol>
                                    <ol className="list-group-item">The Category name comes from another table, so for the "Category", enter Category ID (can be found on the Category page).</ol>
                                    <ol className="list-group-item">If a parent is existing / if you want to use the same parent information for multiple students only enter the "GuardianUsername" and leave other columns blank.</ol>
                                </ul>
                                <form className="card" style={{margin:"20px 0" ,padding:"0 10px"}}>
                                    <div class="form-group">
                                        <label for="branch">Branch *</label>
                                        <select class="form-control" id="branch" required>
                                            <option value="">Select Branch</option>
                                            <option value="branch1">Branch 1</option>
                                            <option value="branch2">Branch 2</option>
                                            <option value="branch3">Branch 3</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="class">Class *</label>
                                        <select class="form-control" id="class" required>
                                            <option value="">Select Class</option>
                                            <option value="class1">Class 1</option>
                                            <option value="class2">Class 2</option>
                                            <option value="class3">Class 3</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="section">Section *</label>
                                        <input type="text" class="form-control" id="section" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="csvFile">Select CSV File *</label>
                                        <input type="file" class="form-control-file" id="csvFile" required />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>



                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
}
export default AddMultiFOrm
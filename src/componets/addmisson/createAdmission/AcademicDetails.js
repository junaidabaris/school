import { FaBuildingColumns } from "react-icons/fa6"

export const AcademicDetails = () => {
    return <div>
        <h5><FaBuildingColumns /> Academic Details</h5>
        <form className="row">
            <div className="form-group col-3">
                <label htmlFor="academicYear">Academic Year</label>
                <input type="text" className="form-control" id="academicYear" />
            </div>
            <div className="form-group col-3">
                <label htmlFor="registerNo">Register No</label>
                <input type="text" className="form-control" id="registerNo" />
            </div>
            <div className="form-group col-3">
                <label htmlFor="roll">Roll</label>
                <input type="text" className="form-control" id="roll" />
            </div>
            <div className="form-group col-3">
                <label htmlFor="admissionDate">Admission Date</label>
                <input type="date" className="form-control" id="admissionDate" />
            </div>
            <div className="form-group col-4">
                <label htmlFor="className">Class</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="form-group col-4">
                <label htmlFor="section">Section</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="form-group col-4">
                <label htmlFor="category">Category</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </form>
    </div>
}
import { VscOpenPreview } from "react-icons/vsc"

export const PreviousSchool = () => {
    return <div>
        <h5><VscOpenPreview /> Previous School Details</h5>
        <form className="row">
            <div className="form-group col-6">
                <label htmlFor="academicYear">School Name </label>
                <input type="text" className="form-control" id="academicYear" />
            </div>
            <div className="form-group col-6">
                <label htmlFor="registerNo">Qualification </label>
                <input type="password" className="form-control" id="registerNo" />
            </div>
            <div className="form-group col-12">
                <label htmlFor="roll">Remarks</label>
                <textarea className="form-control" id="floatingTextarea"></textarea>
            </div>

        </form>
    </div>
}
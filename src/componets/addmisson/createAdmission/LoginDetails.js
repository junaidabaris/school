import { BsTicketDetailedFill } from "react-icons/bs"

export const LoginDetails = () => {
    return <div>
        <h5><BsTicketDetailedFill /> Login Details</h5>
        <form className="row">
            <div className="form-group col-4">
                <label htmlFor="academicYear">Username </label>
                <input type="text" className="form-control" id="academicYear" />
            </div>
            <div className="form-group col-4">
                <label htmlFor="registerNo">Password </label>
                <input type="password" className="form-control" id="registerNo" />
            </div>
            <div className="form-group col-4">
                <label htmlFor="roll">Retype Password</label>
                <input type="password" className="form-control" id="roll" />
            </div>

        </form>
    </div>
}
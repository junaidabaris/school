import { FaRegUser } from "react-icons/fa"

export const GuardianDetails = () => {
    return <div>
        <h5><FaRegUser /> Guardian Details</h5>
        <form className="row">
            <div className="form-group col-6">
                <label htmlFor="academicYear">Name  </label>
                <input type="text" className="form-control" id="academicYear" />
            </div>
            <div className="form-group col-6">
                <label htmlFor="registerNo">Relation  </label>
                <input type="text" className="form-control" id="registerNo" />
            </div>
            <div className="form-group col-6">
                <label htmlFor="academicYear">Father Name  </label>
                <input type="text" className="form-control" id="academicYear" />
            </div>
            <div className="form-group col-6">
                <label htmlFor="registerNo">Mother Name  </label>
                <input type="text" className="form-control" id="registerNo" />
            </div>
            <div className="form-group col-4">
                <label htmlFor="registerNo">Occupation   </label>
                <input type="text" className="form-control" id="registerNo" />
            </div>
            <div className="form-group col-4">
                <label htmlFor="registerNo">Income    </label>
                <input type="number" className="form-control" id="registerNo" />
            </div>
            <div className="form-group col-4">
                <label htmlFor="registerNo">Education     </label>
                <input type="text" className="form-control" id="registerNo" />
            </div>
            <div className="form-group col-3">
                <label htmlFor="registerNo">City     </label>
                <input type="text" className="form-control" id="registerNo" />
            </div>
            <div className="form-group col-3">
                <label htmlFor="registerNo">State     </label>
                <input type="text" className="form-control" id="registerNo" />
            </div>
            <div className="form-group col-3">
                <label htmlFor="registerNo">Mobile No     </label>
                <input type="number" className="form-control" id="registerNo" />
            </div>
            <div className="form-group col-3">
                <label htmlFor="registerNo">Email </label>
                <input type="number" className="form-control" id="registerNo" />
            </div>
            <div className="form-group col-12">
                <label htmlFor="registerNo">Address  </label>
                <textarea className="form-control" id="floatingTextarea"></textarea>
            </div>
            <div className="form-group col-9">
                <label htmlFor="category">Guardian Picture</label>
                <input type="file" className="form-control" id="academicYear" />
            </div>
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
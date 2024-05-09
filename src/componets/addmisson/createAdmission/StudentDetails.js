import { IoIosCall, IoMdMailOpen } from "react-icons/io"
import { PiStudentFill, PiStudentThin } from "react-icons/pi"

export const StudentDetails = () => {
    return <div style={{ margin: "14px 0" }}>
        <h5><PiStudentFill /> Student Details</h5>
        <form className="row">
            <div className="form-group col-4">
                <label for="academicYear">First Name</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <PiStudentThin /></span>
                    </div>
                    <input type="text" className="form-control" id="academicYear" />
                </div>
            </div>
            <div className="form-group col-4">
                <label for="academicYear">Last Name</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <PiStudentThin /></span>
                    </div>
                    <input type="text" className="form-control" id="academicYear" />
                </div>
            </div>
            <div className="form-group col-4">
                <label htmlFor="category">Gender</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Mail</option>
                    <option value="2">Femail</option>
                </select>
            </div>
            <div className="form-group col-6">
                <label htmlFor="category">Blood group</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Mail</option>
                    <option value="2">Femail</option>
                </select>
            </div>
            <div className="form-group col-6">
                <label htmlFor="category">Date Of Birth</label>
                <input type="date" className="form-control" id="academicYear" />
            </div>
            <div className="form-group col-4">
                <label htmlFor="category">Mother Tongue</label>
                <input type="text" className="form-control" id="academicYear" />
            </div>
            <div className="form-group col-4">
                <label htmlFor="category">Religion</label>
                <input type="text" className="form-control" id="academicYear" />
            </div>
            <div className="form-group col-4">
                <label htmlFor="category">Caste</label>
                <input type="text" className="form-control" id="academicYear" />
            </div>
            <div className="form-group col-3">
                <label for="academicYear">Mobile No</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"> <IoIosCall /></span>
                    </div>
                    <input type="number" className="form-control" id="academicYear" />
                </div>
            </div>
            <div className="form-group col-3">
                <label for="academicYear">Email</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><IoMdMailOpen /></span>
                    </div>
                    <input type="email" className="form-control" id="academicYear" />
                </div>
            </div>
            <div className="form-group col-3">
                <label htmlFor="category">City</label>
                <input type="text" className="form-control" id="academicYear" />
            </div>
            <div className="form-group col-3">
                <label htmlFor="category">State</label>
                <input type="text" className="form-control" id="academicYear" />
            </div>
            <div className="form-group col-6">
                <label htmlFor="category">Present Address</label>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingTextarea"></textarea>

                </div>
            </div>
            <div className="form-group col-6">
                <label htmlFor="category">Permanent Address</label>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingTextarea"></textarea>

                </div>
            </div>
            <div className="form-group col-6">
                <label htmlFor="category">Profile Picture</label>
                <input type="file" className="form-control" id="academicYear" />
            </div>
        </form>
    </div>

}
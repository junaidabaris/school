import { FaBuilding } from "react-icons/fa"

export const HostelDetails = () => {
    return <div>
        <h5><FaBuilding />
            Hostel Details</h5>
        <form className="row">
            <div className="form-group col-6">
                <label htmlFor="category">Hostel Name</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Mail</option>
                    <option value="2">Femail</option>
                </select>
            </div>

            <div className="form-group col-6">
                <label htmlFor="category">Room Name</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Mail</option>
                    <option value="2">Femail</option>
                </select>
            </div>


        </form>
    </div>
}
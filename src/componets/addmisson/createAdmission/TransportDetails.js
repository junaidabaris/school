import { FaBusAlt } from "react-icons/fa"

export const TransportDetails = () => {
    return <div>
        <h5><FaBusAlt />  Transport Details</h5>
        <form className="row">
            <div className="form-group col-6">
                <label htmlFor="category">Transport Route</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Mail</option>
                    <option value="2">Femail</option>
                </select>
            </div>

            <div className="form-group col-6">
                <label htmlFor="category">Vehicle No</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Mail</option>
                    <option value="2">Femail</option>
                </select>
            </div>


        </form>
    </div>
}
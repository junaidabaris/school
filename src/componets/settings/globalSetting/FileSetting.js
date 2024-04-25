export const FileSetting = () => {
    return <div>
        <form>
            <h3 style={{ color:"black"}}> Settings For Image</h3>
            <div className="mb-3">
                <label style={{ color:"black"}} htmlFor="exampleInputEmail1" className="form-label">Allowed Extension </label>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        style={{background:"white"}}
                        id="floatingTextarea"
                        defaultValue={""}
                    />
                </div>

            </div>
            <div className="mb-3">
                <label style={{ color:"black"}} htmlFor="exampleInputEmail1" className="form-label">Upload Size (in KB) </label>
                <div className="form-floating">
                    <input
                        className="form-control"
                        style={{background:"white"}}
                    />
                </div>

            </div>
           
        </form>
        <form>
            <h3 style={{ color:"black"}}> Settings For Files</h3>
            <div className="mb-3">
                <label style={{ color:"black"}} htmlFor="exampleInputEmail1" className="form-label">Allowed Extension *</label>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        style={{background:"white"}}
                        id="floatingTextarea"
                        defaultValue={""}
                    />
                </div>

            </div>
            <div className="mb-3">
                <label style={{ color:"black"}} htmlFor="exampleInputEmail1" className="form-label">Upload Size (in KB) </label>
                <div className="form-floating">
                    <input
                        className="form-control"
                        style={{background:"white"}}
                    />
                </div>

            </div>
           
        </form>
        <button type="submit" className="btn btn-primary">
                Save
            </button>
    </div>
}

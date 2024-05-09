import { AcademicDetails } from "./AcademicDetails";
import { StudentDetails } from "./StudentDetails";
import { LoginDetails } from "./LoginDetails";
import { GuardianDetails } from "./GuardianDetails";
import { TransportDetails } from "./TransportDetails";
import { HostelDetails } from "./HostelDetails";
import { PreviousSchool } from "./PreviousSchool";

function AddAddmission() {

    return <div>
        <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">

                <div className="app-ecommerce">
                    {/* Add Product */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
                        <div className="d-flex flex-column justify-content-center">
                            <h4 className="mb-1 mt-3">Student Admission</h4>
                        </div>

                    </div>
                    <div className="row">
                        {/* First column*/}
                        <div className="col-12 col-lg-12">
                            {/* Product Information */}
                            <div className="card mb-4" style={{ padding: "15px" }}>
                                <AcademicDetails />
                                <StudentDetails />
                                <LoginDetails />
                                <GuardianDetails />
                                <TransportDetails />
                                <HostelDetails />
                                <PreviousSchool />
                                
                              
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
}
export default AddAddmission
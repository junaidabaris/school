import { useState, } from "react";
import React from 'react';
import { Dropdown } from 'primereact/dropdown';
export const PositionSelectGroup = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'select', code: 'NY' },
        { name: 'Icon School & college', code: 'RM' },
        { name: 'Oxford International', code: 'LDN' },
    ];
    const className = [
        { name: 'First select The Branch', code: 'NY' },
      
    ];
    const select = [
        { name: 'Select', code: 'NY' },
      
    ];
    return <div className="card mb-4 ">
        <div className="card-body">
            <h5>Select Ground</h5>
            <div className="d-flex">
                <div class="col-md-4 me-2">
                    <div>Branch</div>
                    <div className="card flex justify-content-center">
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                            placeholder="Select" className="w-full md:w-14rem " />
                    </div>
                </div>
                <div class="col-md-4 me-2">
                <div>Class</div>
                    <div className="card flex justify-content-center">
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={className} optionLabel="name"
                            placeholder="First Select The Branch" className="w-full md:w-14rem " />
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                <div>Exam</div>
                    <div className="card flex justify-content-center">
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={select} optionLabel="name"
                            placeholder="Select" className="w-full md:w-14rem " />
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary" style={{ margin: "10px 0" }}>Filter</button>
        </div>
    </div>
}

import React from 'react';
import { InputText } from 'primereact/inputtext';
import { useState,  } from "react";
import { Dropdown } from 'primereact/dropdown';


export const QuestionForm = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'select', code: 'NY' },
        { name: 'Icon School & college', code: 'RM' },
        { name: 'Oxford International', code: 'LDN' },
    ];

    return <div className="card mb-4">
        <div className="card-header">
            <h5 className="card-title mb-0">Add Group</h5>
        </div>
        <div className="card-body">
            <div className="mb-3">
                <div className="card flex justify-content-center">
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                        placeholder="Select" className="w-full md:w-14rem " />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="p-sr-only form-label">Group Name</label>
                <InputText id="username" className="p-invalid mr-2 form-control" />
            </div>
            <button type="button" className="btn btn-primary">Save</button>
        </div>
    </div>
}
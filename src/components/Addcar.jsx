import React, { useState } from 'react'
import { getAuth } from "firebase/auth";
import { app } from "../firebaseConfig";
import { getDatabase, set, ref, push } from "firebase/database";

function Addcar() {
    const auth = getAuth(app);
    const db = getDatabase(app);
    const vID = "123";
    const [inputValues, setInputValues] = useState({
        carname: "",
        carnumber: "",
        kmdriven: "",
    })

    function handleChange(data) {
        const { name, value } = data
        setInputValues((pval) => {
            return {
                ...pval,
                [name]: value
            }
        })
    }
    function Submit(e) {
        e.preventDefault()
        const newPostRef = push(ref(db, "listing/" + vID));
        set(newPostRef,
            inputValues
        )
    }

    return (
        <div>
            <div className='container my-3'>
                <form onSubmit={(e) => Submit(e)}>
                    <div className="mb-3">
                        <label htmlFor="inputcarname" className="form-label">Car Name</label>
                        <input name="carname" value={inputValues.carname}
                            onChange={(e) => handleChange(e.target)} type="text"
                            className="form-control" id="inputcarname" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputcarnumber" className="form-label">Car Number</label>
                        <input name="carnumber" value={inputValues.carnumber} onChange={(e) => handleChange(e.target)} type="text" className="form-control" id="inputcarnumber" required />
                    </div>
                    <div className="mb-3 form-check">
                        <label htmlFor="inputkmdriven" className="form-label">Km(s) Driven</label>
                        <input name="kmdriven" value={inputValues.kmdriven} onChange={(e) => handleChange(e.target)} type="number" id="inputkmdriven" required />
                    </div>
                    <button type="submit" className="btn btn-primary">ADD</button>
                </form>
            </div>
            <div className='container my-3'>
            </div>
        </div>
    )
}
export default Addcar
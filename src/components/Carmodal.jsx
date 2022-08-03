import { Modal, Button, ModalHeader, ModalFooter, ModalBody } from 'reactstrap'
import React, { useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebaseConfig";
import { getDatabase, set, ref, push } from "firebase/database";
import { useNavigate } from 'react-router';


const Carmodal = ({ modal, toggle, save }) => {
    const auth = getAuth(app);
    const db = getDatabase(app);
    const vid = "125"
    const [inputValues, setInputValues] = useState({
        carname: "",
        carnumber: "",
        kmdriven: "",
        vid: "125"
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
    async function handleSubmit(e) {
        e.preventDefault();
        save(inputValues);
        await addCar()
    }
    async function addCar() {
        const newPostRef = push(ref(db, "listing"));
        set(newPostRef, inputValues)
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add Car</ModalHeader>
            <ModalBody>
                <div className='container my-3'>
                    <form className="mx-1 mx-md-4 position-relative" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-outline">
                            <input name="carname" value={inputValues.carname}
                                onChange={(e) => handleChange(e.target)} type="text"
                                className="form-control" id="inputcarname" required />
                            <label htmlFor="inputcarname" className="form-label ">Car Name</label>
                        </div>
                        <div className="form-outline position-relative">
                            <input name="carnumber" value={inputValues.carnumber} onChange={(e) => handleChange(e.target)}
                                type="text" className="form-control" id="inputcarnumber" required />
                            <label htmlFor="inputkmdriven" className="form-label">Car Number</label>
                    
                        </div>
                        <div className="form-outline position-relative">
                            <input name="kmdriven" value={inputValues.kmdriven} onChange={(e) => handleChange(e.target)}
                                className="form-control" type="number" id="inputkmdriven" required />
                            <label htmlFor="inputkmdriven" className="form-label">Km(s) Driven</label>
                        
                        </div>


                        <div class="form-outline position-relative">
                            <input type="text" id="form12" className="form-control" />
                            <label className="form-label" for="form12">Example label</label>
                        </div>
                        <button type="submit" className="btn btn-primary">ADD</button>
                    </form>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default Carmodal


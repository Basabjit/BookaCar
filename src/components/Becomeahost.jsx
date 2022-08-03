import React, { useState } from 'react'
import Home from './Home'
import CheckboxBlankCircleLineIcon from "remixicon-react/CheckboxBlankCircleLineIcon";
import Carmodal from './Carmodal';
import ListedCars from './Listedcars';

function Becomeahost() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [taskList, setTaskList] = useState([])

    const saveTask = (data) => {
        let tempList = taskList
        tempList.push(data)
        setTaskList(tempList)
        setModal(false)
    }

    return (
        <>
            <div>
                <Home />
                <section className="profile__Card__wrapper">
                    <div className="headings__Container">
                        <div className="headings">
                            <h2 className="user__heading">Laltu Fc</h2>
                            <small>Agartala,Tripura</small>
                        </div>
                        <button className="cta__btn">
                            Sign out
                        </button>
                    </div>
                    <div className="profile__container">
                        <div className="profile__sidebar">
                            <ul>
                                <li className="lists">Previous Listings</li>
                            </ul>
                        </div>
                        <div className="profile__actions">
                            <div className="user__orders">
                                <div className="order__headings">
                                    <h3 className="order__heading">Listings</h3>
                                    <small className="order__counts">2 Cars</small>
                                </div>
                                <div className="order__summery">
                                    <div className="task-container">
                                        {
                                            taskList.map((obj, id) =>
                                                <div className="card" key={id} >
                                                    <div className="card-body">
                                                        <h5 className="card-title">{obj.carname}</h5>
                                                        <p>{obj.carnumber}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <button className="btn btn-primarymt-2 laltu" onClick={() => setModal(true)}>Add</button>
                <Carmodal toggle={toggle} modal={modal} save={saveTask} />
            </div>
        </>
    )
}

export default Becomeahost


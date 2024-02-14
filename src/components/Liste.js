import React from "react";

const Liste = () => {
    return(
        <>
    <h1 className="m-3">Liste des inscriptions</h1>
    <ul className="list-group m-3">
        <><li className="list-group-item d-flex align-tiems-center">
            KOBIE Désiré
            <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
        </li><li className="list-group-item d-flex align-tiems-center">
                KABORE Olivier
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li><li className="list-group-item d-flex align-tiems-center">
                DICKO Ali
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li><li className="list-group-item d-flex align-tiems-center">
                TRAORE Ahmed
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li></>
    </ul>
    </>
    )
}
export default Liste
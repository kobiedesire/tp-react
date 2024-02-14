import React from "react";
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa'


const NavBar = () => {
    return (
        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">
                <a href="#" className="btn btn-outline-dark bg-light"><FaListAlt /> Lister</a>
                <a href="#" className="btn btn-outline-dark bg-light"><FaCheckSquare /> Enregistrer</a>
                <a href="#" className="btn btn-outline-dark bg-light"><FaPlusSquare /> Ajouter</a>
            </div>
            <button className="btn btn-outline-dark bg-light"><FaTrash />Supprimer</button>
        </footer>
    )

}
export default NavBar
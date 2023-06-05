import React, { useEffect, useState } from "react";
import './Navbar.css'
import logo from '../../public/Star-Wars-Logo.png';

export const Navbar = ({items, handle}) => {
    const [listFavorites, setListFavorites] = useState([...items])

    useEffect(()=>{
        setListFavorites(items);
    },[items])
    return (
        <header className="container-fluid bg-body-secondary">
            <div className="row-12 d-flex justify-content-between p-3 align-items-center">
                <span className="col-auto"> 
                    <img className="logo" src={logo} alt="logo_star_wars" />
                </span>
                <nav className="dropdown col-auto">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="p-1 text-light">{listFavorites?.length}</span>
                    </button>
                    <ul className="dropdown-menu">
                        {listFavorites?.map((item) => {
                            return (<li className="d-flex m-2" key={item.name}><a className="dropdown-item" href="#" key={item.id}>{item.name}</a><button className="btn btn-danger" id={item.id} onClick={handle} key={item.name}><i className="fa-regular fa-trash-can" onClick={handle} id={item.id}></i></button></li>)
                        })}  
                    </ul>
                </nav>
            </div>
            


        </header>
    )
}
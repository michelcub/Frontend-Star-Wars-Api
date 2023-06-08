import React from "react";
import { useState } from "react";
import useAppContext from "../context/AppContext";
export const Card = ({title,children, id}) => {

    const [likeStatus, setLikeStatus] = useState(false)
    const{actions} = useAppContext;

    const switchStatus = () => {
        likeStatus? actions.handleDeleteFavorites : actions.handleAddFavoritesList; 
        setLikeStatus(!likeStatus);
    }


    return(
        <div className="card col">
            <img src="card-img-top" alt="img-default" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {children}
            </div>
            <div className="card-footer d-flex justify-content-around">
                <button className="btn btn-outline-primary">Learn More!</button>
                <button id={id} className="btn btn-outline-warning" onClick={switchStatus}><i id={id} className={` fa-regular fa-heart ${likeStatus&&'text-warning'}`} onClick={switchStatus}></i></button>
            </div>
        </div>
    )
}
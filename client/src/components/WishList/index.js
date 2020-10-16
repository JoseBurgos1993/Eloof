
import React from 'react';

const Wishlist = ({ children }) => {
    return(
        <div className="list-overflow-container" style={{backgroundColor: "blue"}}>
            <ul className="list-group">{children}</ul>
        </div>
    );
}
export default Wishlist;
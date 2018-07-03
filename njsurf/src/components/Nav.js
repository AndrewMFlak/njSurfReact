import React from "react";
import PropTypes from 'prop-types';

class Nav extends React.Component {

    render() {
        const { handlePageChange, currentPage } = this.props


        return (

            <div class="links" class="col-3">
                <ul>
                    <li onClick={() => handlePageChange("Home")}className={currentPage === "Home" ? "active" : ""}>
                        <a>Home</a>
                    </li>
                    <li onClick={() => handlePageChange("SurfResources")} className={currentPage === "SurfResources" ? "active": ""}>
                        <a>Surf Resources</a>
                    </li>
                    <li onClick={() =>
                    handlePageChange("SurfEntertainment")} className={currentPage ==="SurfEntertainment" ? "active" : ""}>
                        <a>Surf Forecasts</a>
                    </li>
                    <li onClick={() => handlePageChange ("SurfGear")} className={currentPage === "SurfGear" ? "active" : ""}>
                        <a>Surf Gear</a>
                    </li>
                </ul> 
            </div>
        )
    }
}
Nav.propTypes = {
    handlePageChange: PropTypes.func,
    currentPage: PropTypes.string
}

export default Nav;
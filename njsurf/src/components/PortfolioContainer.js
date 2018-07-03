import React from "react";
import Nav from "./Nav";
import Home from "./pages/Home";
import SurfEntertainment from "./pages/SurfEntertainment";
import SurfGear from "./pages/SurfGear";
import SurfResources from "./pages/SurfResources";

class PortfolioContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Home"
        };
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />;
        }
        else if (this.state.currentPage === "SurfEntertainment") {
            return <SurfEntertainment/>;
        }
        else if (this.state.currentPage === "SurfGear") {
            return <SurfGear />;
        }
        else if (this.state.currentPage === "SurfResources") {
            return <SurfResources />;
        }
    }
    render() {
        return (
            <div>
                <Nav
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
            </div >
        );
    }
}

export default PortfolioContainer;
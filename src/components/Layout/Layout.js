import React from "react";
import Aux from "../../hoc/Aux/Aux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = props => {
    return(
        <Aux>
            <Navbar/>
            {props.children}
            <Footer/>
        </Aux>
    )
}

export default Layout;
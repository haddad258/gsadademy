import React, { Component } from "react";
import Dropmenu from './DropDown';
import { Dropdown } from 'react-bootstrap';
export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top" style={{
        display: "flex",
        height: "75px", alignContent: "center", justifyContent: "center",
        alignItems: "center",
        padding:"10px",
      }}>






        {/*  <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          > */}


        <ul style={{ width: "65vw", margin: "auto" ,"font-size":"50px" }}  className="nav navbar-nav navbar-right">
          <a href="/"> <img style={{ height: "60px", width: "auto", marginRight: "3vw", marginTop: "1vh", padding: "8px 2px" }} className="navbar-brand page-scroll" src={require('../assets/logo.png')} >

          </img>
          </a>

          <li  style={{ marginLeft: "0px" , "font-size":"50px" }}>

            <Dropmenu style={{ marginLeft: "0px" , "font-size":"80px" }} title='À propos' subheaders={[{ title: "Qui sommes nous ", target: "/#qsn" }, { title: "Mission & Vision", target: "/#mission" }, { title: "Partenaires", target: "/#partners" }]} className="page-scroll"></Dropmenu>
          </li>
          <li>

            <Dropmenu style={{ marginLeft: "0px" }} title='Nos formations' subheaders={[{ title: "Formation ISTQB niveau fondation", target: "/istqb" },
            { title: "Formation Sélénium", target: "/selenium" }, { title: "Formation Scrum Master", target: "/scrummaster" }, { title: "Formation RPA", target: "/rpa" },
            { title: "Formation Soft Skills", target: "/softskills" }]} ></Dropmenu>
          </li>

          <li>

            <Dropmenu title='Espace entreprise ' path="/entreprise" className="page-scroll"></Dropmenu>
          </li>
          {/* <li>



            <Dropmenu title='Calendrier des formations ' className="page-scroll"></Dropmenu>
          </li> */}

          <li>

            <Dropmenu title='Blog' className="page-scroll"></Dropmenu>
          </li>
          <li>

            <Dropmenu title='Log in ' className="page-scroll"></Dropmenu>
          </li>
          <li>

            {/* <Dropmenu title='Contact' path="/#contact" className="page-scroll"></Dropmenu> */}
            
            <a
            href="/contact"
            style={{
              color: "#373737",
              fontSize: "20px",
              fontWeight: "700",
              fontFamily: 'Open Sans',
              padding: "8px 10px",
              borderRadius: "0",
              margin: "6px 20px 0 0px",
              /* borderStyle: "solid",
              borderWidth: "5px", */
              backgroundColor: "#ECAC24"
            }}> Contact </a>
          </li>

          {/* <li>
                <a href="#cards" className="page-scroll">
                  Contact
                </a>
              </li> */}
        </ul>
        {/* </div> */}
        {/* </div> */}
      </nav>
    );
  }
}

export default Navigation;

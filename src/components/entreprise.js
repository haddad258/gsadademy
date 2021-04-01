import React from 'react'
import Style from 'style-it';
import Particles from 'react-particles-js';
import { Courses } from './courses.js';
import Contact from './contact'

import Cards from './Cards'
class Entreprise extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Entreprise: "",
            Nom: "",
            Prenom: "",
            Email: "",
            Numero: "",
            Message: "",
            Site: "",
            Taille: "",
            landingPageData:{}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount() {
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", paddingTop: "111px", alignContent: "center", alignItems: "center" }}>
                    <Style>
                        {`
                         .title2 {
                            margin-top: 25px;
                            padding-left:50px;
                            font-size: 50px;
                            text-align: center;
                        
                            // -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
                            //    -moz-animation: fadein 2s; /* Firefox < 16 */
                            //     -ms-animation: fadein 2s; /* Internet Explorer */
                            //      -o-animation: fadein 2s; /* Opera < 12.1 */
                            //         animation: fadein 2s;
                        }
                    .title {
                        margin-top: 25px;
                        padding-left:50px;
                        font-size: 50px;
                        text-align: center;
                    
                        // -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
                        //    -moz-animation: fadein 2s; /* Firefox < 16 */
                        //     -ms-animation: fadein 2s; /* Internet Explorer */
                        //      -o-animation: fadein 2s; /* Opera < 12.1 */
                        //         animation: fadein 2s;
                    }
                    @keyframes fadein {
                        from { opacity: 0; }
                        to   { opacity: 1; }
                    }
                    
                    /* Firefox < 16 */
                    @-moz-keyframes fadein {
                        from { opacity: 0; }
                        to   { opacity: 1; }
                    }
                    
                    /* Safari, Chrome and Opera > 12.1 */
                    @-webkit-keyframes fadein {
                        from { opacity: 0; }
                        to   { opacity: 1; }
                    }
                    
                    /* Internet Explorer */
                    @-ms-keyframes fadein {
                        from { opacity: 0; }
                        to   { opacity: 1; }
                    }
                    
                    /* Opera < 12.1 */
                    @-o-keyframes fadein {
                        from { opacity: 0; }
                        to   { opacity: 1; }
                    }
                    .paragraph{
                        //-webkit-animation: 3s ease 0s normal forwards 1 fadein;
                       // animation: 3s ease 0s normal forwards 1 fadein;
                        tranform:translateY(50px);
                        font-size:3vh;
                        width:85%;

                    }
                    @keyframes fadein{
                        0% { opacity:0; }
                        66% { opacity:0;transform:translateY(30px); }
                        100% { opacity:1;transform:translateY(0); }
                    }
                    
                    @-webkit-keyframes fadein{
                        0% { opacity:0; }
                        66% { opacity:0; transform:translateY(30px);}
                        100% { opacity:1; transform:translateY(0);}
                    }
                    .zoomIn {
                        padding-top:50px;
                        font-size:20px;
                        }               
                    .card {
                            display: flex;
                            position: relative;
                            flex-direction: column;
                            height: 350px;
                            width: 850px;
                            min-width: 250px;
                            padding: 1.5rem;
                            border-radius: 16px;
                            align-self:center;
                            background: #ffffff;
                            box-shadow: rem 0 0rem #000;
                            border-style: solid;
                        }
                        
.cta {
    width:fit-content;
    height:7vh;
    margin-top:20px;
    align-self:center;
    padding: 10px 45px;
    text-decoration: none;
   // font-family: 'Poppins', sans-serif;
    font-size: 20px;
    color: white;
    background: rgb(243,194,57);
   // transition: 1s;
   // box-shadow: 6px 6px 0 black;
   // transform: skewX(-15deg);
}

// .cta:focus {
//    outline: none; 
// }

// .cta:hover {
//     transition: 0.5s;
//     box-shadow: 10px 10px 0 #FBC638;
// }

// .cta span:nth-child(2) {
//     transition: 0.5s;
//     margin-right: 0px;
// }

// .cta:hover  span:nth-child(2) {
//     transition: 0.5s;
//     margin-right: 45px;
// }

  span {
    transform: skewX(15deg) 
  }

  span:nth-child(2) {
    width: 20px;
    margin-left: 30px;
    position: relative;
    top: 12%;
  }
  
/**************SVG****************/

path.one {
    transition: 0.4s;
    transform: translateX(-60%);
}

path.two {
    transition: 0.5s;
    transform: translateX(-30%);
}

.cta:hover path.three {
    animation: color_anim 1s infinite 0.2s;
}

.cta:hover path.one {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.6s;
}

.cta:hover path.two {
    transform: translateX(0%);
    animation: color_anim 1s infinite 0.4s;
}

/* SVG animations */

@keyframes color_anim {
    0% {
        fill: white;
    }
    50% {
        fill: #FBC638;
    }
    100% {
        fill: white;
    }
}
                    
                    `}

                        <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", alignSelf: 'center' }}>
                            <div style={{ display: "flex", flexDirection: "column", fontWeight: "bold", width: "80vw", alignContent: "center", alignItems: 'flex-start' }}>
                                <div class="row">
                                    <div class="form-group col-lg-6">

                                        <p className="title2"> GoldShard Academy <span style={{  color: "rgb(243,194,57)" , fontWeight: "bold" }}> Pro </span></p>
                                       <br/>
                                        <p className="paragraph" style={{ paddingLeft: "100px", paddingBottom: "8px", fontSize: "17px", fontFamily: "Open Sans", color: "#5F5F5F" }}>Notre espace entreprise a pour but de créer un lien entre  l’apprentissage et le monde professionnel</p>
                                    </div>
                                    <div class="form-group col-lg-6">

                                        <img style={{  width: "40vw" }} src={require('../assets/1.jpg')} />
                                    </div>
                                </div>
                            </div>
                          

                            <div style={{ display: "flex", color: "black", fontSize: "1.5rem", flexDirection: "column", paddingTop: "30px", paddingBottom: "50px", alignContent: "center", alignItems: "center", alignSelf: 'center' }}>


                        </div>
                            <div className="card">
                                <p  className="title" style={{ "margin-top": "25px",fontWeight: "bold","padding-left":"50px", "font-size": "30px", "text-align": "center"}} > Des formations pour développer les hard et softskills <span style={{  color: "rgb(243,194,57)" , fontWeight: "bold" }}> de vos collaborateurs </span></p>
                                <p className="paragraph" style={{ paddingLeft: "100px", paddingBottom: "8px", fontSize: "15px", fontFamily: "Open Sans", color: "#5F5F5F" }}>Nous vous accompagnons dans vos projets en offrant des formation en adéquation avec l'évolution du marché d'emlpoi et vos besoins dans le but de permettre une plus grande efficacité de vos équipes</p>

                                <a class="cta" href="/contactentreprise">
                                    <span   style={{color:"#000000",fontWeight: "bold" ,fontSize: "25px"}}>Contactez nous</span>
                                   
                                </a>

                            </div>
                        </div>
                    </Style>


                </div>
                <div style={{ paddingTop:"20px" , paddingBottom:"100px"}}>



</div>


             

            </div>);
    }
}

export default Entreprise;
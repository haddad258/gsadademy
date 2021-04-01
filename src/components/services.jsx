// import React, { Component } from "react";
// import Style from 'style-it';

// export class Services extends Component {
//   render() {
//     return (
//       <div id="services" className="text-center">
//         <div className="container">
//           <div className="section-title">
//             <h2 style={{ fontFamily: "Oswald" }}>Nos partenaires</h2>
//             {/* <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//               dapibus leonec.
//             </p> */}
//           </div>
//           <div className="row">

//             {/*  <div className="col-md-6">

//               <img src={require('../assets/goldshard.png')} style={{ height: "20vh", width: "20vh" }} />
//               <div className="service-desc">
//                 <h3>Goldshard</h3>
//                 <p style={{ textAlign: "left" }}>Entreprise de services du numérique spécialisée dans la RPA (Robotic Process Automation), présente en Tunisie, France et Canada</p>
//               </div>
//             </div> */}
//             <Style>
//               {`
//               .wrap{
//                 height:auto;
//               }
//               .wrap p{
//                 opacity:0;
//                 transition:opacity .5s;
//               }
//               .wrap img{
//                 transition: transform .5s;
//                 transform: translateY(40px);
//               }
//               /* .logo:hover{
//                 transform: scale(1.1); 
              
//               } */
              
//               /* .content:hover{
//                 opacity:1;
//               } */
              
//               .wrap:hover p{
//                   opacity:1;
//               }
//               .wrap:hover img{
//                 transform: scale(1.1);
//                 transform: translateY(-10px);
//               }
//               `}
//               <div className="col-md-6"/*  style={{ border: "2px solid red" }} */>
//                 <div >


//                   <img className='logo' src={require('../assets/goldshard.png')} style={{ height: "20vh", width: "20vh" }} />

//                 </div><div className="service-desc">
//                 <p style={{ textAlign: "left", color: "#323232" }} className="content">Entreprise de services du numérique spécialisée dans la RPA (Robotic Process Automation), présente en Tunisie, France et Canada</p>

//                 </div>
//               </div>
              
//             </Style>
//             {/*  <div className="col-md-6">

//               <img src={require('../assets/icf.png')} style={{ height: "20vh", width: "20vh" }} />
//               <div className="service-desc">
//                 <h3>Goldshard</h3>
//                 <p style={{ textAlign: "left" }}>Cabinet de conseil et de formation spécialisé dans le développement du bien-être professionnel, individuel et collectif ; ICF nous a accompagné dès le commencement de nos premiers pas, grâce à son expertise dans les formations en Soft Skills, nous nous engageons de mettre à la disposition de nos participants des programmes de formations variées et adaptés à leurs besoins.</p>
//               </div>
//             </div> */}

//             {/*             <div className="col-md-6">

//               <img src={require('../assets/rpa.png')} style={{ height: "20vh", width: "20vh" }} />
//               <div className="service-desc">
//                 <h3>Goldshard</h3>
//                 <p style={{ textAlign: "left" }}>Un des leaders mondiaux dans le développement des logiciels d’automatisation robotisée des processus</p>
//               </div>
//             </div> */}
//             <Style>
//               {`
//               .wrap{
//                 height:auto;
//               }
//               .wrap p{
//                 opacity:0;
//                 transition:opacity .5s;
//               }
//               .wrap img{
//                 transition: transform .5s;
//                 transform: translateY(40px);
//               }
//               /* .logo:hover{
//                 transform: scale(1.1); 
              
//               } */
              
//               /* .content:hover{
//                 opacity:1;
//               } */
              
//               .wrap:hover p{
//                   opacity:1;
//               }
//               .wrap:hover img{
//                 transform: scale(1.1);
//               }
//               `}
//               <div className="col-md-6"/*  style={{ border: "2px solid red" }} */>
//                 <div >


//                   <img className='logo' src={require('../assets/rpa.png')} style={{ height: "20vh", width: "20vh" }} />

//                 </div><div className="service-desc">
//                 <p style={{ textAlign: "left", color: "#323232" }} className="content">Automation anywhere est un des leaders mondiaux dans le développement des logiciels d’automatisation robotisée des processus</p>

//                 </div>
//               </div>
//             </Style>
            
//             <Style>
//               {`
//               .wrap{
//                 height:auto;
//               }
//               .wrap p{
//                 opacity:0;
//                 transition:opacity .5s;
//               }
//               .wrap img{
//                 transition: transform .5s;
//                 transform: translateY(40px);
//               }
//               /* .logo:hover{
//                 transform: scale(1.1); 
              
//               } */
              
//               /* .content:hover{
//                 opacity:1;
//               } */
              
//               .wrap:hover p{
//                   opacity:1;
//               }
//               .wrap:hover img{
//                 transform: scale(1.1);
//               }
//               `}
//               <div className="col-md-6"/*  style={{ border: "2px solid red" }} */>
//                 <div >


//                   <img className='logo' src={require('../assets/icf.png')} style={{ height: "22vh", width: "20vh" }} />

//                 </div><div className="service-desc">
//                 <p style={{ textAlign: "left", color: "#323232" }} className="content">Cabinet de conseil et de formation spécialisé dans le développement du bien-être professionnel, individuel et collectif </p>

//                 </div>
//               </div>
//             </Style>
//             <Style>
//               {`
//               .wrap{
//                 height:auto;
//               }
//               .wrap p{
//                 opacity:0;
//                 transition:opacity .5s;
//               }
//               .wrap img{
//                 transition: transform .5s;
//                 transform: translateY(40px);
//               }
//               /* .logo:hover{
//                 transform: scale(1.1); 
              
//               } */
              
//               /* .content:hover{
//                 opacity:1;
//               } */
              
//               .wrap:hover p{
//                   opacity:1;
//               }
//               .wrap:hover img{
//                 transform: scale(1.1);
//               }
//               `}
//               <div className="col-md-6"/*  style={{ border: "2px solid red" }} */>
//                 <div >


//                   <img className='logo' src={require('../assets/arondor.png')} style={{ height: "22vh", width: "20vh" }} />

//                 </div><div className="service-desc">
//                 <p style={{ textAlign: "left", color: "#323232" }} className="content">Arondor est une entreprise spécialisée dans la gestion documentaire. Elle propose une gamme de services et de solutions répondant à l'ensemble des besoins dans le domaine. Arondor est aussi une entreprise de services du numérique. Notre partenariat est basé sur la possibilité de recrutement de nos participants et leur trouver une mission en Tunisie ou à l’étranger. </p>

//                 </div>
//               </div>
//             </Style>


//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Services;




import React, { Component } from "react";
import Style from 'style-it';

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontFamily: "Oswald" }}>Nos partenaires</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
          </div>
          <div className="row">

            {/*  <div className="col-md-6">

              <img src={require('../assets/goldshard.png')} style={{ height: "20vh", width: "20vh" }} />
              <div className="service-desc">
                <h3>Goldshard</h3>
                <p style={{ textAlign: "left" }}>Entreprise de services du numérique spécialisée dans la RPA (Robotic Process Automation), présente en Tunisie, France et Canada</p>
              </div>
            </div> */}
            <Style>
              {`
              .wrap{
                height:auto;
              }
              .wrap p{
                opacity:0;
                transition:opacity .5s;
              }
              .wrap img{
                transition: transform .5s;
                transform: translateY(40px);
              }
              /* .logo:hover{
                transform: scale(1.1); 
              
              } */
              
              /* .content:hover{
                opacity:1;
              } */
              
              .wrap:hover p{
                  opacity:1;
              }
              .wrap:hover img{
                transform: scale(1.1);
                transform: translateY(-10px);
              }
              `}
              <div className="col-md-6"/*  style={{ border: "2px solid red" }} */>
                <div className="wrap">


                  <img className='logo' src={require('../assets/goldshard.png')} style={{ height: "20vh", width: "20vh" }} />
                  <p style={{ textAlign: "left", color: "#323232" }} className="content">Entreprise de services du numérique spécialisée dans la RPA (Robotic Process Automation), présente en Tunisie, France et Canada</p>

                </div><div className="service-desc">

                </div>
              </div>
            </Style>
            {/*  <div className="col-md-6">

              <img src={require('../assets/icf.png')} style={{ height: "20vh", width: "20vh" }} />
              <div className="service-desc">
                <h3>Goldshard</h3>
                <p style={{ textAlign: "left" }}>Cabinet de conseil et de formation spécialisé dans le développement du bien-être professionnel, individuel et collectif ; ICF nous a accompagné dès le commencement de nos premiers pas, grâce à son expertise dans les formations en Soft Skills, nous nous engageons de mettre à la disposition de nos participants des programmes de formations variées et adaptés à leurs besoins.</p>
              </div>
            </div> */}

            {/*             <div className="col-md-6">

              <img src={require('../assets/rpa.png')} style={{ height: "20vh", width: "20vh" }} />
              <div className="service-desc">
                <h3>Goldshard</h3>
                <p style={{ textAlign: "left" }}>Un des leaders mondiaux dans le développement des logiciels d’automatisation robotisée des processus</p>
              </div>
            </div> */}
            <Style>
              {`
              .wrap{
                height:auto;
              }
              .wrap p{
                opacity:0;
                transition:opacity .5s;
              }
              .wrap img{
                transition: transform .5s;
                transform: translateY(40px);
              }
              /* .logo:hover{
                transform: scale(1.1); 
              
              } */
              
              /* .content:hover{
                opacity:1;
              } */
              
              .wrap:hover p{
                  opacity:1;
              }
              .wrap:hover img{
                transform: scale(1.1);
              }
              `}
              <div className="col-md-6"/*  style={{ border: "2px solid red" }} */>
                <div className="wrap">


                  <img className='logo' src={require('../assets/rpa.png')} style={{ height: "20vh", width: "20vh" }} />
                  <p style={{ textAlign: "left", color: "#323232" }} className="content"> Automation Anywhere  un des leaders mondiaux dans le développement des logiciels d’automatisation robotisée des processus</p>

                </div><div className="service-desc">

                </div>
              </div>
            </Style>
            <Style>
              {`
              .wrap{
                height:auto;
              }
              .wrap p{
                opacity:0;
                transition:opacity .5s;
              }
              .wrap img{
                transition: transform .5s;
                transform: translateY(40px);
              }
              /* .logo:hover{
                transform: scale(1.1); 
              
              } */
              
              /* .content:hover{
                opacity:1;
              } */
              
              .wrap:hover p{
                  opacity:1;
              }
              .wrap:hover img{
                transform: scale(1.1);
              }
              `}
              <div className="col-md-6"/*  style={{ border: "2px solid red" }} */>
                <div className="wrap" >


                  <img className='logo' src={require('../assets/icf.png')} style={{ height: "20vh", width: "20vh" }} />
                  <p style={{ textAlign: "left", color: "#323232" }} className="content">Cabinet de conseil et de formation spécialisé dans le développement du bien-être professionnel, individuel et collectif </p>

                </div><div className="service-desc">

                </div>
              </div>
            </Style>

            <Style>
            {`
               .wrap{
                 height:auto;
               }
               .wrap p{
                 opacity:0;
                 transition:opacity .5s;
             }
               .wrap img{
                 transition: transform .5s;
                 transform: translateY(40px);
               }
               /* .logo:hover{
                 transform: scale(1.1); 
            
               } */
            
               /* .content:hover{
                 opacity:1;
               } */
            
               .wrap:hover p{
                 opacity:1;
               }
               .wrap:hover img{
                 transform: scale(1.1);
               }
               `}
               <div className="col-md-6"/*  style={{ border: "2px solid red" }} */>
                 <div className="wrap">


                   <img className='logo' src={require('../assets/arondor.png')} style={{ height: "22vh", width: "20vh" }} />
                 <p style={{ textAlign: "left", color: "#323232" }} className="content">Arondor : Entreprise de services du numérique offreur de solutions en dématérialisation, gestion électronique de documents, business process management, automatisation intelligente et compliance </p>

                 </div><div className="service-desc">
                 </div>
               </div>
             </Style>


          </div>
        </div>
      </div>
    );
  }
}

export default Services;

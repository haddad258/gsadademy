// import React, { Component } from 'react'
// import Navigation from './components/navigation';
// import Header from './components/header';
// import Features from './components/features';
// import Carousel from './components/carousel'
// import Course from './components/courseViewdup';
// import About from './components/about';
// import Vision from './components/vision';
// import Valeurs from './components/valeur';
// import Services from './components/services';
// import Gallery from './components/gallery';
// import Testimonials from './components/testimonials';
// import Team from './components/Team';
// import Mission from './components/mission'
// import footer, { Footer } from './components/footer';
// import Cards from './components/Cards';
// import Contact from './components/contact';
// import JsonData from './data/data.json';
// import { Courses } from './components/courses.js';
// import Rocket from './components/Rocket';
// import Formcourse from './components/formcourse'
// import Partners from './components/partners'
// import Entreprise from './components/entreprise';
// import Contactentreprise from './components/contactentreprise'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export class App extends Component {
//   state = {
//     landingPageData: {},
//   }
//   getlandingPageData() {
//     this.setState({ landingPageData: JsonData })
//   }

//   componentDidMount() {
//     this.getlandingPageData();
//     Courses.routes.map((v) => {
//       console.log(v.path)
//     })

//   }

//   render() {
//     return (
      // <Router>
       
      //     {Courses.routes.map((v) =>
      //       <Route path={v.path}>
      //         <div /* style={{ overflowX: 'hidden', overflowY: "hidden" }} */>
      //           <Navigation />
      //           {/* <button  href="/contact" style={{ top: "150px", left: "95vw", position: 'sticky' }}> preinscription</button> */}
      //            {/* <button class="centeredcont" style={{ top: "150px", "width":"160px", "height":"50px" ,"background": "#ECAC24", " display": "flex","justify-content": "center", "left": "100vw", "position": 'sticky'}}>
                               
      //            <a  
      //         href="/contact" 
      //            style={{
      //         color: "#373737",
      //         fontSize: "20px",
      //         fontWeight: "700",
      //         fontFamily: 'Open Sans',
      //         padding: "8px 10px",
      //         borderRadius: "0",
      //         margin: "6px 20px 0 0px",
              
      //         backgroundColor: "#ECAC24"
      //       }}>Préinscrire</a>
                               
                               
      //                       </button> */}
      //           <Course data={v} />
                
      //           {/* <Formcourse /> */}
      //       <Cards data={Courses.routes} />

      //       <Contact data={this.state.landingPageData.Contact} />


      //           {/* <Rocket /> */}

      //         </div>

      //       </Route>)}
//             <Route path="/courses">
//             <div>
//             <Navigation />
//             <Cards data={Courses.routes} />

//             {/* <Services data={this.state.landingPageData.Services} /> */}
//            {/*  <Contact data={this.state.landingPageData.Contact} /> */}



//             </div>
//           </Route>
//           <Route path="/contactentreprise">
//             <div>
//             <Navigation />
//             <Contactentreprise data={this.state.landingPageData.Contact} />
//             <Cards data={Courses.routes} />
//             {/* <Contact data={this.state.landingPageData.Contact} />
//             <Contactentreprise data={Courses.routes} /> */}



//             </div>
//           </Route>

          // <Route path="/contact">
          //   <div>
          //   <Navigation />

          //   <Contact data={this.state.landingPageData.Contact} />
          //   <Cards data={Courses.routes} />



          //   </div>
          // </Route>
//           <Route path="/entreprise">
//             <div>
//               <Navigation />
//               <Entreprise />

//               <Contactentreprise data={this.state.landingPageData.Contact} />

//             </div>
//           </Route>
//           <Route path="/">
//             <div style={{ overflowX: 'hidden', overflowY: "hidden" }}>
//               <Navigation />
//               <Carousel />
//               {/*    <Header data={this.state.landingPageData.Header} /> */}
//               {/* <Features data={this.state.landingPageData.Features} /> */}
//               <About data={this.state.landingPageData.About} />
//               <Cards data={Courses.routes} />

//               <Valeurs />


//               <Mission />
//               {/*  <Vision /> */}

//               {/* <Partners /> */}
//               <Services data={this.state.landingPageData.Services} />


//               {/*    <Gallery /> */}
//               {/* <Testimonials data={this.state.landingPageData.Testimonials} />
//               <Team data={this.state.landingPageData.Team} /> */}
//               <Contact data={this.state.landingPageData.Contact} />

//             </div>
//           </Route>

        
//       </Router>
//     )
//   }
// }

// export default App;

import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import Carousel from './components/carousel'
import Course from './components/courseViewdup';
import About from './components/about';
import Vision from './components/vision';
import Valeurs from './components/valeur';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Mission from './components/mission'
import footer, { Footer } from './components/footer';
import Cards from './components/Cards';
import Contact from './components/contact';
import JsonData from './data/data.json';
import { Courses } from './components/courses.js';
import Rocket from './components/Rocket';
import Formcourse from './components/formcourse'
import Partners from './components/partners'
import Entreprise from './components/entreprise';
import Contactentreprise from './components/contactentreprise'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({ landingPageData: JsonData })
  }

  componentDidMount() {
    this.getlandingPageData();
    Courses.routes.map((v) => {
      console.log(v.path)
    })

  }

  render() {
    return (
      <Router>
        <Switch>
       
       {Courses.routes.map((v) =>
         <Route path={v.path}>
           <div /* style={{ overflowX: 'hidden', overflowY: "hidden" }} */>
             <Navigation />
             {/* <button  href="/contact" style={{ top: "150px", left: "95vw", position: 'sticky' }}> preinscription</button> */}
              {/* <button class="centeredcont" style={{ top: "150px", "width":"160px", "height":"50px" ,"background": "#ECAC24", " display": "flex","justify-content": "center", "left": "100vw", "position": 'sticky'}}>
                            
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
           
           backgroundColor: "#ECAC24"
         }}>Préinscrire</a>
                            
                            
                         </button> */}
             <Course data={v} />
             
             {/* <Formcourse /> */}
         <Cards data={Courses.routes} />

         <Contact data={this.state.landingPageData.Contact} />


             {/* <Rocket /> */}

           </div>

         </Route>)}
          <Route path="/entreprise">
            <div>
              <Navigation />
              <Entreprise />
              <Cards data={Courses.routes} />
               <Contactentreprise data={this.state.landingPageData.Contact} />

            </div>
          </Route>
          <Route path="/contact">
            <div>
            <Navigation />

            <Contact data={this.state.landingPageData.Contact} />
            <Cards data={Courses.routes} />



            </div>
          </Route>
          <Route path="/">
            <div style={{ overflowX: 'hidden', overflowY: "hidden" }}>
              <Navigation />
              <Carousel />
              {/*    <Header data={this.state.landingPageData.Header} /> */}
              {/* <Features data={this.state.landingPageData.Features} /> */}
              <About data={this.state.landingPageData.About} />
              <Mission />
              {/*  <Vision /> */}
              <Valeurs />
              <Cards data={Courses.routes} />
              {/* <Partners /> */}
              <Services data={this.state.landingPageData.Services} />
              {/*    <Gallery /> */}
              {/* <Testimonials data={this.state.landingPageData.Testimonials} />
              <Team data={this.state.landingPageData.Team} /> */}
              <Contact data={this.state.landingPageData.Contact} />

            </div>
          </Route>

        </Switch>
      </Router>
    )
  }
}

export default App;

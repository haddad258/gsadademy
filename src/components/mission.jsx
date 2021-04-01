import React, { Component } from 'react'
import Style from 'style-it';
export class mission extends Component {
  render() {
    return (
      <div id="valeurs" style={{
        background: "rgb(243,194,57)",
        background: " linear-gradient(0deg, rgba(243,194,57,1) 0%, rgba(231,160,44,1) 100%)", height: "80vh", width: "100vw",
        display: "flex",
        flexDirection: 'row',
        alignContent: "center",
        alignItems: "center"
      }} >
        <div style={{
          width: "61vw", height: "70vh",
          flexDirection: 'column',
          alignContent: "center",
          alignItems: "center", margin: "auto"
        }}>
          <div style={{ fontFamily: "Oswald", textTransform: 'uppercase', fontSize: '40px', textAlign: "center", alignSelf: 'center', margin: "auto", color: "#fff" }}> Nos valeurs</div>
          <div style={{ fontFamily: "Open Sans", fontSize: "17px", color: "#ffffff", margin: "auto", textAlign: "center" }}>
            Notre obsession est de contribuer à la construction des métiers de demain en
          </div>
          <div style={{ fontFamily: "Open Sans", fontSize: "17px", color: "#ffffff", margin: "auto", textAlign: "center" }}>entretenant l’évolution des potentiels humains.</div>
          <div style={{ display: "flex", flexDirection: "row", paddingTop: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", width: "250px", height: "270px", backgroundColor: "#fff", margin: "auto" }}>
              <img src={require('../assets/icon-transoarence.png')} style={{ paddingTop: "15px", height: "10vh", width: "auto", margin: "auto" }} />
              <div style={{ margin: "auto", fontFamily: "Oswald", fontSize: "35px", color: "#323232", textTransform: "uppercase" }}> Transparence</div>
              <div style={{ margin: "auto", width: "80%", fontFamily: "Open Sans", fontSize: "13px", textAlign: "center", color: "#5f5f5f" }}> Toujours dans l’optique de l’évolution, nos apprenants seront coachés par des experts qui s’engagent.</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", width: "250px", height: "270px", backgroundColor: "#fff", margin: "auto" }}>
              <img src={require('../assets/icon-Encadrement.png')} style={{ paddingTop: "15px", height: "10vh", width: "auto", margin: "auto" }} />
              <div style={{ margin: "auto", fontFamily: "Oswald", fontSize: "35px", color: "#323232", textTransform: "uppercase" }}> Encadrement</div>
              <div style={{ margin: "auto", width: "80%", fontFamily: "Open Sans", fontSize: "13px", textAlign: "center", color: "#5f5f5f" }}> Nous orientons nos apprenants à travers un parcours personnalisé en adéquation avec leurs attentes.</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", width: "250px", height: "270px", backgroundColor: "#fff", margin: "auto" }}>
              <img src={require('../assets/icon-Confiance.png')} style={{ paddingTop: "15px", height: "10vh", width: "auto", margin: "auto" }} />
              <div style={{ margin: "auto", fontFamily: "Oswald", fontSize: "35px", color: "#323232", textTransform: "uppercase" }}> Confiance</div>
              <div style={{ margin: "auto", width: "80%", fontFamily: "Open Sans", fontSize: "13px", textAlign: "center", color: "#5f5f5f" }}> Nous bâtissons une éthique professionnelle pour le long terme, nos moteurs vers vos satisfaction.</div>
            </div>

          </div>
        </div>




      </div>
    )
  }
}

export default mission

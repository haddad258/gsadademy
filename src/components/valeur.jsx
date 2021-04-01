import React, { Component } from 'react'
import Style from 'style-it';
export class valeur extends Component {
  render() {
    return (<div id="mission" style={{ width: "100vw", height: "auto", background:"#FFFFFF", paddingTop: "80px", paddingBottom: "80px", display: "flex", flexDirection: "row", alignItems: 'center', alignContent: "center" }}>

      <div style={{ width: '40vw', marginLeft: "20vw" }}>
        <div style={{ paddingBottom: "15px", fontFamily: 'Oswald', color: "#323232", fontSize: "40px" }}> NOTRE MISSION</div>
        <div style={{ paddingBottom: "8px", fontSize: "17px", fontFamily: "Open Sans", color: "#5F5F5F" }}>
          Notre vocation est d’accompagner des professionnels et des jeunes diplômés vers le chemin de la réussite dans les métiers de l’IT en mettant à leur disposition des formations de qualité englobant non seulement la partie hardskills mais aussi soft skills, assistés par un corps formatif d’experts afin de garantir une meilleure insertion professionnelle.
      </div>
        <div style={{ paddingBottom: "15px", fontFamily: 'Oswald', color: "#323232", fontSize: "40px" }}> NOTRE VISION</div>
        <div style={{ paddingBottom: "8px", fontSize: "17px", fontFamily: "Open Sans", color: "#5F5F5F" }}>
          Notre obsession est de contribuer à la construction des métiers de demain en entretenant l’évolution des potentiels humains.
      </div>
      </div>
      <img style={{ marginLeft: "3vw", width: "25vw" }} src={require('../assets/mission&visionimage.png')} />
    </div>
    )
  }
}

export default valeur

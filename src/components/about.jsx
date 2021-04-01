import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
      <div id="qsn" style={{ width: "100vw", height: "auto", paddingTop: "80px", display: "flex", flexDirection: "row", alignItems: 'center', alignContent: "center" }}>
        <img style={{ padding: "90px 10px", width: "40vw" }} src={require('../assets/QSImage.png')} />
        <div style={{ width: '40vw', padding: "30px 0px" }}>
          <div style={{ paddingBottom: "15px", fontFamily: 'Oswald', color: "#323232", fontSize: "40px" }}> QUI SOMMES NOUS? </div>
          <div style={{ paddingBottom: "8px", fontSize: "17px", fontFamily: "Open Sans", color: "#5F5F5F" }}>
            Créé en Décembre 2020, GOLD SHARD Academy est le fruit de plusieurs années d’expertise et de savoirs dans le domaine de l’IT dérivés de l’entreprise GOLD SHARD, spécialisée en services numérique et présente en Tunisie, France et Canada.
          </div>
          <div style={{ paddingBottom: "8px", fontSize: "17px", fontFamily: "Open Sans", color: "#5F5F5F" }}>
            Nous proposons des formations spécifiques et personnalisées pour un accompagnement au cas par cas. Nous sommes dotés de tous les moyens pour vous former en étroite collaboration avec les demandes du marché de demain.
          </div>
          <div style={{ paddingBottom: "8px", fontSize: "17px", fontFamily: "Open Sans", color: "#5F5F5F" }}>
            Notre méthode pédagogique offre une sécurité vérifiable car elle sert de tuteur ainsi que d’appui pour bien diriger nos apprenants dans leur insertion dans le milieu professionnel. Nos stratégies sont conçues afin de favoriser l’apprentissage et atteindre les objectifs de chaque formation.
          </div>
        </div>
      </div>
    )
  }
}

export default about

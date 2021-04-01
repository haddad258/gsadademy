import React from 'react'
import Style from 'style-it';
import logo from '../assets/istqb.jpg'
class Course extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <Style>
                {`
                
                .cover{
                    position: relative;
                    width:100vw;
                    color:black;
                    background: rgb(209,213,161);
                    height:auto;


                }
                .img{
                    width: 100%;
                }
                .container-grid {
                    
                    position: relative;
                    width:100vw;
                    display: grid;
                    grid-template-columns:75vw 25vw; /*columns widths*/
                    
                  }
                  
                  .col-1 {
                    height:auto;
                    width:75vw;
                    grid-column:1 / 2;
                    
                    
                  }
                  .col-1 h2{
                    color:#ff2d2d;
                    padding:60px 20px 20px 60px;
                }
                .col-1 h1{
                    color:#080808;
                    padding:4vh 20px 20px 100px;
                    font-size:30px;

                }
                .col-1 p{
                    padding:2vh 20px 20px 120px;
                    font-size:17px;
                    overflow-wrap:normal;
                    width:65vw;
                    color:#664a4a;
                    grid-column:1 / 2;
                    
                    

                }
                  
                .col-2 {
                    position: sticky;
                    position: -webkit-sticky;
                    top: 0;
                    grid-column: 2;
                    grid-row: 1;
                    height:200;
                    width:22vw;
                    margin-top:20px;
                    margin-bottom:20px;
                    margin-right:50px;
                    box-shadow: -2px 1px 10px 2px #d6d6d6; 
                  }
                  .coucontainer{
                    /* float: left; */
                    display: grid;
                    grid-template-columns: 20% 55% 25%;
                    grid-template-rows: auto 1fr;
                    
                    width: 100vw;
                    padding-top:80px;
                    
                  
                  }
                  .cover {
                    grid-row: 1;
                    width:100vw;
                    color:black;
                    height:auto;
                    overflow: hidden;
                    grid-column: 1 / 4;
                    
                  }
                  .check-list {
                    padding:3vh 20px 20px 120px;
                    margin: 0;
                   
                  }
                  
                  .check-list li {
                    position: relative;
                    list-style-type: none;
                    padding-left: 2.5rem;
                    margin-bottom: 0.5rem;
                  }
                  
                  .check-list li:before {
                      content: '';
                      display: block;
                      position: absolute;
                      left: 0;
                      top: -2px;
                      width: 5px;
                      height: 11px;
                      border-width: 0 2px 2px 0;
                      border-style: solid;
                      border-color: #00a8a8;
                      transform-origin: bottom left;
                      transform: rotate(45deg);
                  }
                  
                  
                  

  
                `}
                <div className="coucontainer">
                    <div className="cover">

                        <img className='img' src={require('../assets/istqb.jpg')} alt='cover'></img>
                    </div>
                    <div className="container-grid">
                        <div className="col col-1">
                            <h2>Formation Test Manuel: ISTQB Foundation level </h2>
                            <h1>
                                Descriptif
                            </h1>
                            <p>
                                Cette formation vous forme pour devenir ISTQB (International Software Testing Qualifications Board) testeur niveau fondation. Elle vous permettra d’acquérir la terminologie des tests ISTQB ainsi que maîtriser les compétences et les bonnes pratiques des tests pour qu’ils soient efficaces. A la fin de cette formation, vous comprendrez les techniques de conceptions de tests principales.
                            </p>
                            <h1>
                                Modalité pédagogique
                            </h1>
                            <p>
                                Formation théorique avec quelques exercices de pratique.
                            </p>
                            <h1>
                                Objectifs
                            </h1>
                            <ul className="check-list">
                                <li>Acquérir la terminologie ISTQB des tests.</li>
                                <li>Connaître les types de test, leurs caractéristiques, leurs choix et leurs mises en œuvre dans les cycles de vie logiciel.</li>
                                <li>Maîtriser l'ensemble des activités d'un processus de test.</li>
                                <li>Appréhender les techniques et méthodes de tests.</li>
                                <li>Maîtriser les compétences et bonnes pratiques du métier du Tests.  Identifier les outils disponibles et connaître leurs caractéristiques.  </li>
                                <li>Réussir l’examen Testeur ISTQB Fondation basée sur le référentiel en version 2018.</li>
                            </ul>
                        </div>
                        <div className="col col-2">test</div>
                    </div>
                    {/* <div className="col col-2">test</div> */}
                </div>

            </Style>)
    }
}
export default Course;
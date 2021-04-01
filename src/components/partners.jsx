import React, { Component } from 'react'
import Style from 'style-it';
export class partners extends Component {
  render() {
    return (
      <div id="#partners" >
        <Style>
          {`
          .valuecont { 
            height:100vh;
            
            width:100vw;
            display:flex;
            background:#fff;
            flex-direction: column;
            align-items:center;
            justify-content: center;

                  }
          .title{
            font-size:10vh;
            width:100%;
            height:200;
            display:flex;
            width:100%;
            flex-direction: row;
            align-items:center;
            justify-content: center;
            


          }
          .cardcont{
            padding-top:20px;
            display:flex;
            width:100%;
            flex-direction: row;
            align-items:center;
            justify-content: center;

          }
          .card {
            position: relative;
            width: 25vw;
            height: 30vh;
            margin:20px;
            padding:10px;
            perspective: 150rem;
          }
          .card-front {
            color:#fff;
            font-size:20px;
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            border-radius: 5px;
            box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
            transition: 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
            backface-visibility: hidden;
            overflow: hidden;
          }
          .card-back {
            color:#fff;
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            border-radius: 5px;
            box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
            transition: 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
            backface-visibility: hidden;
            overflow: hidden;
          }
          .card-front:before, .card-front:after, .card-back:before, .card-back:after {
            position: absolute;
          }
/*           .card-front:before, .card-back:before {
            top: -40px;
            right: -40px;
            content: '';
            width: 80px;
            height: 80px;
            background-color: rgba(255, 255, 255, 0.08);
            transform: rotate(45deg);
            z-index: 1;
          } */
       /*    .card-front:after, .card-back:after {
            content: '+';
            top: 0;
            right: 10px;
            font-size: 24px;
            transform: rotate(45deg);
            z-index: 2;
          } */
          .card-front {
            width: 100%;
            height: 100%;
            background: linear-gradient(-45deg, #ff4671, #c7af57);
          }
          .card-front:after {
            color: #212f3c;
          }
          .card-back {
            display:flex;
            width:100%;
            flex-direction: row;
            align-items:center;
            justify-content: center;

            background: linear-gradient(-45deg, #c7af57, #ff4671);
            transform: rotateX(180deg);
          }
          .card-back:after {
            color: #11181f;
          }
          .card:hover .card-front {
            transform: rotateX(-180deg);
          }
          .card:hover .card-back {
            transform: rotateX(0deg);
          }
            }
          `}
          <div className="valuecont" id="partners">
            <div className="title">
              Nos partenaires
            </div>
            <div className="cardcont">
              <div className="card">
                <div className="card-back"> <div style={{ width: "80%" }}>  Entreprise de services du numérique spécialisée dans la RPA (Robotic Process Automation), présente en Tunisie, France et Canada</div> </div>
                <div className="card-front" style={{ display: "flex", flexDirection: "column" }}>
                  <img src={require('../assets/goldshard.png')} style={{ height: "70%", width: '70%', background: "transparent" }} />
                Goldshard </div>
              </div>
              <div className="card">
                <div className="card-back"> <div style={{ width: "80%" }}>Cabinet de conseil et de formation spécialisé dans le développement du bien-être professionnel, individuel et collectif ; ICF nous a accompagné dès le commencement de nos premiers pas, grâce à son expertise dans les formations en Soft Skills, nous nous engageons de mettre à la disposition de nos participants des programmes de formations variées et adaptés à leurs besoins.</div></div>
                <div className="card-front" style={{ display: "flex", flexDirection: "column" }}>
                  <img src={require('../assets/icf.png')} style={{ height: "70%", width: '70%' }} />
                    International Consulting Firm
                </div>
              </div>
              <div className="card">
                <div className="card-back"> <div style={{ width: "80%" }}>Nous bâtissons une éthique professionnelle pour le long terme, nos moteurs vers votre satisfaction sont l’engagement et le professionnalisme.</div></div>
                <div className="card-front" style={{ display: "flex", flexDirection: "column" }}>
                  <img src={require('../assets/rpa.png')} style={{ height: "70%", width: 'auto' }} />
                   Confiance
                  </div>
              </div>

            </div>

          </div>

        </Style>
        {/*  <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6" style={{ paddingTop: '50px' }}> <img src="img/about.jpg" className="img-responsive" alt="" /> </div>
            <div className="col-xs-12 col-md-6">

              <div className="about-text">
                <Style>
                  {`
                  .typewriter{
                    display: inline-block
                  }
                  .typewriter h1 {
                    
                    overflow: hidden;  Ensures the content is not revealed until the animation 
                    border-right: .15em solid orange; /* The typwriter cursor 
                    white-space: nowrap; /* Keeps the content on a single line 
                    margin: 0 auto; /* Gives that scrolling effect as the typing happens 
                    letter-spacing: .15em; /* Adjust as needed 
                    animation-iteration-count:infinite;
                    animation: 
                      typing 5s steps(40, end) infinite,
                      blink-caret .75s step-end infinite;
                  }
                  
                  /* The typing effect 
                  @keyframes typing {
                    0% {
                      width: 0;
                    }
                    80% {
                      width: 100%;
                    }
                    100%{
                      width:100%
                    }
                    /* from { width: 0 }
                  
                    to { width: 100% } 
                  }
                  
                  /* The typewriter cursor effect 
                  @keyframes blink-caret {
                    from, to { border-color: transparent }
                    50% { border-color: orange; }
                  }
                  
                

                
                  `}
                  <div className='typewriter'>
                    <h1>
                      Nos valeurs
                   </h1>

                  </div>

                </Style>
                <div className="list-style" style={{ paddingTop: '50px' }}>
                  <ul style={{ marginBottom: '40px', fontSize: '18px', color: 'black' }}>
                    Transparence: toujours dans l’optique de l’évolution, nos apprenants seront coachés par des experts qui s’engagent à transmettre les meilleurs conseils issus de leurs expériences professionnelles.
                  </ul>
                  <ul style={{ marginBottom: '40px', fontSize: '18px' }}>
                    Encadrement : nous orientons nos apprenants à travers un parcours personnalisé en adéquation avec leurs attentes professionnelles.  </ul>
                  <ul style={{ marginBottom: '40px', fontSize: '18px' }}>
                    Confiance : nous bâtissons une éthique professionnelle pour le long terme, nos moteurs vers votre satisfaction sont l’engagement et le professionnalisme. </ul>
                </div>


                {/*  <h3>Why Choose Us?</h3> */}
        {/*  <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>
                </div>
 }              </div>
            </div>

          </div>
        </div>
     */}  </div>
    )
  }
}

export default partners

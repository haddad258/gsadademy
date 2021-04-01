import React from 'react'
import Style from 'style-it';
import Particles from 'react-particles-js';
import TextField from '@material-ui/core/TextField';
/* import {
    Typography,
    Paper,
    Link,
    Grid,
    Button,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
} from '@material-ui/core'; */
class Formcourse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Course: "",
            Nom: "",
            Prenom: "",
            Email: "",
            Numero: "",
            payment: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount() {
        this.setState({ Course: this.props.data })
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
            <Style>{
                `
                .windowdiv{
                    background: #000;
                   /*  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,167,233,1) 96%, rgba(148,187,233,1) 100%); */
                    width:100vw;
                    height:90vh;
                    display: flex;
                    justify-content: center;
                    position:relative;
                    overflow:hidden;

                }
                .buttondiv{
                    display: flex;
                    justify-content: center;
                    width:100%;/* 
                    height:100% */
                }
                .formcard{
                    height: 400px;
                    width: 650px;
                    min-width: 250px;
                    padding: 3rem;
                    border-radius: 16px;
                    background: #eeedf1;
                    box-shadow: -1rem 0 3rem #000;
                    display: flex;
                    flex-direction: column;
                    transition: .2s;
                    margin: auto;
                    scroll-snap-align: start;
                    clear: both;
                    position: relative;
                }
                .floating-form {
                    width:700px;
                    display:flex;
                    flex-wrap:wrap;
                    
                  }
                  
                  /****  floating-Lable style start ****/
                  .floating-label { 
                    position:relative; 
                    margin-bottom:55px; 
                    
                    margin-left:26px;

                  }
                  .floating-input , .floating-select {
                    font-size:14px;
                    padding:4px 4px;
                    display:block;
                    width:250;
                    height:30px;
                    background-color: transparent;
                    border:none;
                    border-bottom:1px solid #757575;
                  }
                  
                  .floating-input:focus , .floating-select:focus {
                       outline:none;
                       border-bottom:2px solid #5264AE; 
                  }
                  
                  label {
                    color:#999; 
                    font-size:14px;
                    font-weight:normal;
                    position:absolute;
                    pointer-events:none;
                    left:5px;
                    top:5px;
                    transition:0.2s ease all; 
                    -moz-transition:0.2s ease all; 
                    -webkit-transition:0.2s ease all;
                  }
                  
                  .floating-input:focus ~ label, .floating-input:not(:placeholder-shown) ~ label {
                    top:-18px;
                    font-size:14px;
                    color:#5264AE;
                  }
                  
                  .floating-select:focus ~ label , .floating-select:not([value=""]):valid ~ label {
                    top:-18px;
                    font-size:14px;
                    color:#5264AE;
                  }
                  
                  /* active state */
                  .floating-input:focus ~ .bar:before, .floating-input:focus ~ .bar:after, .floating-select:focus ~ .bar:before, .floating-select:focus ~ .bar:after {
                    width:50%;
                  }
                  
                  *, *:before, *:after {
                      -webkit-box-sizing: border-box;
                      -moz-box-sizing: border-box;
                      box-sizing: border-box;
                  }
                  
                  .floating-textarea {
                     min-height: 30px;
                     max-height: 260px; 
                     overflow:hidden;
                    overflow-x: hidden; 
                  }
                  
                  /* highlighter */
                  .highlight {
                    position:absolute;
                    height:50%; 
                    width:100%; 
                    top:15%; 
                    left:0;
                    pointer-events:none;
                    opacity:0.5;
                  }
                  
                  /* active state */
                  .floating-input:focus ~ .highlight , .floating-select:focus ~ .highlight {
                    -webkit-animation:inputHighlighter 0.3s ease;
                    -moz-animation:inputHighlighter 0.3s ease;
                    animation:inputHighlighter 0.3s ease;
                  }
                  
                  /* animation */
                  @-webkit-keyframes inputHighlighter {
                      from { background:#5264AE; }
                    to 	{ width:0; background:transparent; }
                  }
                  @-moz-keyframes inputHighlighter {
                      from { background:#5264AE; }
                    to 	{ width:0; background:transparent; }
                  }
                  @keyframes inputHighlighter {
                      from { background:#5264AE; }
                    to 	{ width:0; background:transparent; }
                  }
                  
                  /****  floating-Lable style end ****/
                  .glow-on-hover {
                    width: 100px;
                    height: 50px;
                    border: none;
                    outline: none;
                    color: #fff;
                    background: #111;
                    cursor: pointer;
                    position: relative;
                    z-index: 0;
                    border-radius: 10px;
                }
                
                .glow-on-hover:before {
                    content: '';
                    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
                    position: absolute;
                    top: -2px;
                    left:-2px;
                    background-size: 400%;
                    z-index: -1;
                    filter: blur(5px);
                    width: calc(100% + 4px);
                    height: calc(100% + 4px);
                    animation: glowing 20s linear infinite;
                    opacity: 0;
                    transition: opacity .3s ease-in-out;
                    border-radius: 10px;
                }
                
                .glow-on-hover:active {
                    color: #000
                }
                
                .glow-on-hover:active:after {
                    background: transparent;
                }
                
                .glow-on-hover:hover:before {
                    opacity: 1;
                }
                
                .glow-on-hover:after {
                    z-index: -1;
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: #111;
                    left: 0;
                    top: 0;
                    border-radius: 10px;
                }
                
                @keyframes glowing {
                    0% { background-position: 0 0; }
                    50% { background-position: 400% 0; }
                    100% { background-position: 0 0; }
                }
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
               /*  label{
                    position: relative;
                  }
                  
                  input{
                    font-size: inherit;
                    font-family: inherit;
                    line-height: 2em;
                  }
                  
                  span{
                    position: absolute;
                    opacity: 0.6;
                    top: 0;
                    left: 2px;
                    cursor: text;
                    transition: all 0.5s ease-in-out;
                  }
                  
                  input.has-value + span,
                  input:focus + span{
                    opacity: 1;
                    transform: translate(-2px, -1.5em);
                    font-size: 0.8em;
                    cursor: default;
                  } */
               
                `
            }
                <div id="form" className="windowdiv">
                    <div style={{ position: 'absolute' }}>
                        <Particles params={{
                            "particles": {
                                "number": {
                                    "value": 80,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "#ffffff"
                                },
                                "shape": {
                                    "type": "circle",
                                    "stroke": {
                                        "width": 0,
                                        "color": "#000000"
                                    },
                                    "polygon": {
                                        "nb_sides": 5
                                    },
                                    "image": {
                                        "src": "img/github.svg",
                                        "width": 100,
                                        "height": 100
                                    }
                                },
                                "opacity": {
                                    "value": 0.5,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 3,
                                    "random": true,
                                    "anim": {
                                        "enable": false,
                                        "speed": 40,
                                        "size_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": true,
                                    "distance": 150,
                                    "color": "#ffffff",
                                    "opacity": 0.4,
                                    "width": 1
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 6,
                                    "direction": "none",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    },
                                    "onclick": {
                                        "enable": true,
                                        "mode": "push"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 400,
                                        "line_linked": {
                                            "opacity": 1
                                        }
                                    },
                                    "bubble": {
                                        "distance": 400,
                                        "size": 40,
                                        "duration": 2,
                                        "opacity": 8,
                                        "speed": 3
                                    },
                                    "repulse": {
                                        "distance": 200,
                                        "duration": 0.4
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                            "retina_detect": true
                        }} width="100vw" height="100vh" />
                    </div>
                    <div className="formcard">
                        <form onSubmit={this.handleSubmit}>
                            <div className="floating-form">
                                <div class="floating-label">
                                    <input name="Nom" class="floating-input" type="text" placeholder=" " onChange={this.handleChange} value={this.state.Nom} />
                                    <span class="highlight"></span>
                                    <label>Nom</label>
                                    <span>error</span>
                                </div>

                                <div class="floating-label">
                                    <input name="Prenom" class="floating-input" type="text" placeholder=" " onChange={this.handleChange} value={this.state.Prenom} />
                                    <span class="highlight"></span>
                                    <label>Prenom</label>
                                </div>

                                <div class="floating-label">
                                    <input name="Email" class="floating-input" type="text" placeholder=" " onChange={this.handleChange} value={this.state.Email} />
                                    <span class="highlight"></span>
                                    <label>E-mail</label>
                                </div>
                                <div class="floating-label">
                                    <input name="Numero" class="floating-input" type="password" placeholder=" " onChange={this.handleChange} value={this.state.Numero} />
                                    <span class="highlight"></span>
                                    <label>Numéro</label>
                                </div>
                                <div class="floating-label">
                                    <select class="floating-select" onChange={this.handleChange} value={this.state.Numero}>
                                        <option value=""></option>
                                        <option value="Espéce">Espéce</option>
                                        <option value="Chéque">Chéque</option>
                                        <option value="Facilité de paiement">Facilité de paiement</option>
                                    </select>
                                    <span class="highlight"></span>
                                    <label>Mode de paiement</label>
                                </div>


                            </div>
                            <div className="buttondiv">

                                <button className="glow-on-hover" type="submit" value="Envoyer" > Préinscrire</button>
                            </div>

                        </form>
                    </div>

                </div>

            </Style >

        )
    }
}

export default Formcourse;
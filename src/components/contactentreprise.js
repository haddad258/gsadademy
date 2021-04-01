import React, { Component } from "react";
import { useAlert } from 'react-alert';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
var urlbackend =require('../env/env')()




export class Contactentreprise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: "",
      fiscalid: "",
      numero: "",
      email: "",
      message: "",
      lastname:""




    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.notify = this.notify.bind(this);


  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;

    this.setState({
      [name]: value
    });
  }
  notify() {
    toast.dark('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  handleSubmit() {
    console.log(this.state.nom)
    axios.post(urlbackend+"/api/v1/entriprise1site",{
      name:this.state.nom,
      fiscalid: this.state.fiscalid,
      messag:this.state.message,
      email:this.state.email,
      phone: this.state.numero
    }).then(response=>{

      console.log(response.data)
      alert("succeful")
      window.location.reload()
    })
  
    console.log(this.state)
    
  }
  componentDidMount() {
    console.log("look i mounted ")
  }
  render() {
    return (

      <div id="contact">

        <div >
          <div className="container" style={{ width: "60vw" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "35vw" }}>
                <div style={{ color: "#fff", fontFamily: "Oswald", fontSize: "35px", textTransform: "uppercase" }}>Nous contacter <br/>espace entreprise  </div>
                <div style={{ color: "#fff", fontSize: "15px", fontFamily: "Oswald", fontWeight: "200", marginTop: "30px" }}>Nous sommes à votre disposition pour répondre à toutes vos questions.</div>
                <form name="sentMessage" id="contactForm" noValidate onSubmit={this.handleSubmit}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                  <input
                      type="text"
                      id="nom"
                      className="form-control"
                      style={{ width: "50%", margin:"2px", backgroundColor: "#292929" }}
                      placeholder="entreprise"
                      required="required"
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                    <input
                      type="text"
                      id="fiscalid"
                      style={{ width: "50%", margin:"2px", backgroundColor: "#292929" }}
                      className="form-control"
                      placeholder="fisacle"
                      required="required"
                      onChange={this.handleChange}
                      value={this.state.fiscalid}
                    />

                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                  
                  
                  <input
                      type="text"
                      id="numero"
                      className="form-control"
                      style={{ width: "50%", margin:"2px", backgroundColor: "#292929" }}
                      placeholder="Numéro"
                      required="required"
                      onChange={this.handleChange}
                      value={this.state.numero}
                    />
                    <input
                      type="text"
                      id="email"
                      style={{ width: "50%", margin:"2px", backgroundColor: "#292929" }}
                      className="form-control"
                      placeholder="Email"
                      required="required"
                      onChange={this.handleChange}
                      value={this.state.email}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>

                  <textarea
                    name="message"
                    style={{ width: "100%",margin:"2px",  backgroundColor: "#292929", color: "#ffffff" }}
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={this.handleChange}
                    value={this.state.message}
                  ></textarea>
                  </div>

                  <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "end", marginTop: "30px" }}> <button type="submit" style={{ marginLeft: "auto", backgroundColor: "#ecac24", padding: "10px 20px 10px 20px", border: "2px solid #ecac24", fontFamily: "Oswald", fontWeight: "500", fontSize: "15" }}>Envoyer</button></div>
                </form>
              </div>
              <div style={{ width: "25vw", marginLeft: "7vw" }}>
                <div style={{ color: "#fff", fontFamily: "Oswald", fontSize: "35px", textTransform: "uppercase" }}>Contact info </div>
                <div style={{ color: "#fff", fontFamily: "Oswald", fontSize: "18px", textTransform: "uppercase", marginTop: "25px" }}>Address </div>
                <div style={{ color: "#fff", fontSize: "15px", fontFamily: "Oswald", fontWeight: "200", marginTop: "10px" }}>61 rue taher ben brahim el menzah 9, Tunis</div>
                <div style={{ color: "#fff", fontFamily: "Oswald", fontSize: "18px", textTransform: "uppercase", marginTop: "25px" }}>Phone </div>
                <div style={{ color: "#fff", fontSize: "15px", fontFamily: "Oswald", fontWeight: "200", marginTop: "10px" }}>+21670861138/+21654754033</div>
                <div style={{ color: "#fff", fontFamily: "Oswald", fontSize: "18px", textTransform: "uppercase", marginTop: "25px" }}>Email</div>
                <div style={{ color: "#fff", fontSize: "15px", fontFamily: "Oswald", fontWeight: "200", marginTop: "10px" }}>contact@goldshard.fr</div>
                <div style={{ color: "#fff", fontFamily: "Oswald", fontSize: "18px", textTransform: "uppercase", marginTop: "25px" }}>Also follow us on social media</div>
                <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
                  <a href="https://www.facebook.com/Gold-Shard-Academy-104956521522020">
                    <img style={{ width: "3vw" }} src={require('../assets/social1.png')} />
                  </a>
                  <a href="">
                    <img style={{ width: "3vw", margin: "0px 10px" }} src={require('../assets/social2.png')} />
                  </a>
                  <a href="">
                    <img style={{ width: "3vw" }} src={require('../assets/social3.png')} />
                  </a>
                  <a href="https://www.linkedin.com/company/gold-shard-academy/?fbclid=IwAR1QVf0T3eQOrztlxP8BGZwh1k2LzxY9PiPl9Wo7zoySpUzof-Xzy96tVh0">
                    <img style={{ width: "3vw", margin: "0px 10px" }} src={require('../assets/social4.png')} />
                  </a>

                </div>
              </div>

            </div>
          </div>
        </div>
        <ToastContainer />
      </div>

    );
  }
}

export default Contactentreprise;

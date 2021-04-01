import React from 'react'
import Style from 'style-it';
import Rpa from '../assets/rpa.png'
import ISTQB from '../assets/ISTQB.png'
import Sel from '../assets/selenium.jfif'
import scrum from '../assets/scrum.png'
import soft from '../assets/soft.png'
class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coloreddot: "1",imagein:1
        };

    }
    clickdot(i) {
       // console.log(i)
        this.setState({ coloreddot: i.toString() })
    }

    componentWillReceiveProps() {
        // this.setState({imagein:this.state.imagein+1})
        // if(this.state.imagein <5){
        // setInterval(() => {
        //     this.clickdot(this.state.imagein)

        // }, 3000);
        // }else{
        //     this.setState({imagein:0})
        // }

        
            setInterval(() => {
                if(this.state.imagein <2){
                this.clickdot(this.state.imagein+1)
              this.setState({imagein:this.state.imagein+1})
                }else{
                    this.clickdot(0)
                    this.setState({imagein:0})

                }


            }, 5000);



    }

    componentDidMount() {
        this.props.data.map((i) => console.log(i.logo))
    }

    render() {
        return (
            <div id="#courses" style={{ width: "100vw", height: "auto", paddingLeft: "18vw", paddingRight: "18vw", paddingTop: "80px", paddingBottom: "60px", backgroundColor: "#ffe8b4" }}>
                <div style={{ margin: "auto", textAlign: 'center', paddingBottom: "15px", fontFamily: 'Oswald', color: "#323232", fontWeight: "500", fontSize: "40px", textTransform: "uppercase" }}>nos formations</div>
                <div style={{ margin: "auto", textAlign: "center", paddingBottom: "8px", fontSize: "17px", fontFamily: "Open Sans", color: "#5F5F5F" }}>Notre obsession et de de contribuer à la construction des métiers de demain en </div>
                <div style={{ margin: "auto", textAlign: "center", paddingBottom: "8px", fontSize: "17px", fontFamily: "Open Sans", color: "#5F5F5F" }}> entretenant l'évolution des potentiels humains</div>
                <div style={{ width: "100%", height: "auto", display: 'flex', flexDirection: "row", paddingTop: "20px" }}>

                    <a href={this.props.data[this.state.coloreddot].path} style={{ display: 'flex', margin: "auto", flexDirection: "column", width: "280px", height: "380px", backgroundColor: "#ffffff" }}>
                        <img src={this.props.data[this.state.coloreddot].logo} style={{ height: "55%", width: "auto", margin: "15px", borderBottom: "2px solid #f1c037", paddingBottom: "15px" }} />
                        <div style={{ marginLeft: "15px", fontFamily: 'Open Sans', fontSize: "15px", color: "#5f5f5f" }}> <span style={{ textTransform: "uppercase", color: "#f2c038", fontSize: "18px", fontFamily: 'Oswald', fontWeight: "00", paddingRight: "2px" }}>durée: </span> {this.props.data[parseInt(this.state.coloreddot)].duration}</div>
                        <div style={{ fontFamily: "Oswald", wordWrap: "break-word", marginLeft: "15px", color: "#323232", fontSize: "20px", fontFamily: "Oswald", textTransform: "uppercase" }}>{this.props.data[parseInt(this.state.coloreddot)].name}</div>
                        <div style={{ marginLeft: "15px", marginRight: "15px", fontFamily: 'Open Sans', fontSize: "15px", color: "#5f5f5f" }}>{this.props.data[parseInt(this.state.coloreddot)].previewText} </div>
                    </a>

                    <a href={this.props.data[parseInt(this.state.coloreddot) + 1].path} style={{ display: 'flex', margin: "auto", flexDirection: "column", width: "280px", height: "380px", backgroundColor: "#ffffff" }}>
                        <img src={this.props.data[parseInt(this.state.coloreddot) + 1].logo} style={{ height: "55%", width: "auto", margin: "15px", borderBottom: "2px solid #f1c037", paddingBottom: "15px" }} />
                        <div style={{ marginLeft: "15px", fontFamily: 'Open Sans', fontSize: "15px", color: "#5f5f5f" }}> <span style={{ textTransform: "uppercase", color: "#f2c038", fontSize: "18px", fontFamily: 'Oswald', fontWeight: "00", paddingRight: "2px" }}>durée: </span> {this.props.data[parseInt(this.state.coloreddot) + 2].duration}</div>
                        <div style={{ fontFamily: "Oswald", wordWrap: "break-word", marginLeft: "15px", color: "#323232", fontSize: "20px", fontFamily: "Oswald", textTransform: "uppercase" }}>{this.props.data[parseInt(this.state.coloreddot) + 1].name}</div>
                        <div style={{ marginLeft: "15px", marginRight: "15px", fontFamily: 'Open Sans', fontSize: "15px", color: "#5f5f5f" }}>{this.props.data[parseInt(this.state.coloreddot) + 1].previewText} </div>
                    </a>


                    <a href={this.props.data[parseInt(this.state.coloreddot) + 2].path} style={{ display: 'flex', margin: "auto", flexDirection: "column", width: "280px", height: "380px", backgroundColor: "#ffffff" }}>
                        <img src={this.props.data[parseInt(this.state.coloreddot) + 2].logo} style={{ height: "55%", width: "auto", margin: "15px", borderBottom: "2px solid #f1c037", paddingBottom: "15px" }} />
                        <div style={{ marginLeft: "15px", fontFamily: 'Open Sans', fontSize: "15px", color: "#5f5f5f" }}> <span style={{ textTransform: "uppercase", color: "#f2c038", fontSize: "18px", fontFamily: 'Oswald', fontWeight: "00", paddingRight: "2px" }}>durée: </span> {this.props.data[parseInt(this.state.coloreddot) + 2].duration}</div>
                        <div style={{ fontFamily: "Oswald", wordWrap: "break-word", marginLeft: "15px", color: "#323232", fontSize: "20px", fontFamily: "Oswald", textTransform: "uppercase" }}>{this.props.data[parseInt(this.state.coloreddot) + 2].name}</div>
                        <div style={{ marginLeft: "15px", marginRight: "15px", fontFamily: 'Open Sans', fontSize: "15px", color: "#5f5f5f" }}>{this.props.data[parseInt(this.state.coloreddot) + 2].previewText} </div>
                    </a>



                </div>
                <div style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", paddingTop: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "row", paddingLeft: "1vw", alignSelf: 'center', margin: "auto" }}>
                        {
                            Array.from(Array(3).keys()).map(i =>

                                <div style={{
                                    height: "12px", width: "12px", borderRadius: "50%", backgroundColor: this.state.coloreddot == i ? "#ECAC24" : "#bbb", marginTop: "2vh", marginRight: "3px"
                                }} onClick={this.clickdot.bind(this, i)} ></div>
                            )
                        }

                    </div></div>
            </div >





            /* <Style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');

               
                a {
                    text-decoration: none;
                }
                .formation {
                    height: calc(100vh-80px) ;
                    min-height: 90vh;
                    background: rgb(248 241 215);
                    /* background: linear-gradient(50deg, rgba(209,213,161,1) 0%, rgba(196,159,89,0.8547794117647058) 63%, rgba(244,238,172,1) 100%);
 */
            /* }
            
            .card-list {
                justify-content: center;
              
                align:center;
                
                display: flex;
                padding-top: 50px;
                
                padding-bottom: 50px;
                
                overflow-x: hidden;
                background:inherit;
                
                   }
            
            
            
            .card {
                height: 400px;
                width: 300px;
                min-width: 250px;
                padding: 3rem;
                border-radius: 16px;
                background: #eeedf1;
                box-shadow: -1rem 0 3rem #000;
                display: flex;
                flex-direction: column;
                transition: .2s;
                margin: 1.5rem;
                scroll-snap-align: start;
                clear: both;
                position: relative;
            }
            
            .card:focus-within~.card, .card:hover~.card {
                transform: translateX(130px);
            }
            
            .card:hover {
                transform: translateY(-1rem);
            }
            
            .card:not(:first-child) {
                margin-left: -120px;
            }
            
            
            .card-header {
                margin-bottom: auto;
            }
            
            .card-header p {
                font-size: 14px;
                margin: 0 0 1rem;
                color: #7a7a8c;
            }
            
            .card-header h2 {
                font-size: 20px;
                margin: .25rem 0 auto;
                text-decoration: none;
                
                border: 0;
                display: inline-block;
                cursor: pointer;
                background: linear-gradient(90deg,#ff8a00,#ddbe27);
                text-shadow: none;
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
                background-clip: text;
            }
            
            .card-header h2:hover {
                background: hsl(345, 2%, 38%);
                text-shadow: none;
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
                background-clip: text;
            }
            
            .card-author {
                margin: 3rem 0 0;
                display: grid;
                grid-template-columns: 75px 1fr;
                align-items: center;
                position: relative;
            }
            
            .author-avatar {
                grid-area: auto;
                align-self: start;
                position: relative;
                box-sizing: border-box;
            }
            
            .author-avatar img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: block;
                overflow: hidden;
                margin: 16px 10px;
            }
            
            .author-name {
                grid-area: auto;
                box-sizing: border-box;
                color:hsl(30, 2%, 67%);
            }
            
            .author-name-prefix {
                font-style: normal;
                font-weight: 700;
                color: #7a7a8c;
            }
            
            .half-circle {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 80px;
                height: 37px;
                fill: none;
                stroke: #ff8a00;
                stroke-width: 7;
                stroke-linecap: round;
                pointer-events: none;
            }
            
            .tags {
                margin: 4rem 0 2rem;
                padding: .5rem 0 1rem;
                line-height: 2;
                margin-bottom: 0;
            }
            
            .tags a {
                font-style: normal;
                font-weight: 700;
                color: #7a7a8c;
                font-size: 1.2rem;
                padding: .2rem .85rem .25rem;
                position: relative;
                display: inline-block;
            }
            
            .tags a:hover {
                background: linear-gradient(90deg,#ff8a00,#e52e71);
                text-shadow: none;
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
                -webkit-box-decoration-break: clone;
                background-clip: text;
                border-color: white;
            } */
            /* ` }
            <div id="courses" className='formation'>

                <div >
                    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
                        <h1>Nos Formations</h1>

                    </div>
                    <div className="card-list">
                        {
                            this.props.data.map((c) => <a className="card" href={c.path}>
                                <div class="card-header">

                                    <h2>{c.name}</h2>
                                </div>
                                <div class="card-author">
                                    <a class="author-avatar" >
                                        <img src={c.logo} />
                                    </a>
                                    <svg class="half-circle" viewBox="0 0 106 57">
                                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                    </svg>

                                    <div class="author-name">
                                        <div class="author-name-prefix"><b>Durée:</b></div>
                                        {c.duration}
                                    </div>
                                </div>
                                <div class="tags">

                                    <a >{c.previewText}</a>

                                </div>
                            </a>) */
            /* 
                                 <div className="card">
                                     <div class="card-header">
     
                                         <h2>ISTQB</h2>
                                     </div>
                                     <div class="card-author">
                                         <a class="author-avatar" href="/istqb">
                                             <img src={ISTQB} />
                                         </a>
                                         <svg class="half-circle" viewBox="0 0 106 57">
                                             <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                         </svg>
     
                                         <div class="author-name">
                                             <div class="author-name-prefix"><b>Durée:</b></div>
                                             5 jours / 25 heures
                                         </div>
                                     </div>
                                     <div class="tags">
                                         <a >béneficiez d'une formation en hibhfd cf c fejk cf f cf fc fc  f f f  f , ldsk ,sdc jdsc  jfc fkcdj fdjfdn </a>
     
                                     </div>
                                 </div>
                                 <div className="card">
                                     <div class="card-header">
     
                                         <h2>RPA</h2>
                                     </div>
                                     <div class="card-author">
                                         <a class="author-avatar" href="/test">
                                             <img src={Rpa} />
                                         </a>
                                         <svg class="half-circle" viewBox="0 0 106 57">
                                             <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                         </svg>
     
                                         <div class="author-name">
                                             <div class="author-name-prefix"><b>Durée:</b></div>
                                            50 heures, 3 semaines
                                         </div>
                                     </div>
                                     <div class="tags">
                                         <a >béneficiez d'une formation en hibhfd cf c fejk cf f cf fc fc  f f f  f , ldsk ,sdc jdsc  jfc fkcdj fdjfdn </a>
     
                                     </div>
                                 </div>
                                 <div className="card">
                                     <div class="card-header">
     
                                         <h2>Selenium</h2>
                                     </div>
                                     <div class="card-author">
                                         <a class="author-avatar" href="/test">
                                             <img src={Sel} />
                                         </a>
                                         <svg class="half-circle" viewBox="0 0 106 57">
                                             <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                         </svg>
     
                                         <div class="author-name">
                                             <div class="author-name-prefix"><b>Durée:</b></div>
                                            50 heures, 3 semaines
                                         </div>
                                     </div>
                                     <div class="tags">
                                         <a >béneficiez d'une formation en hibhfd cf c fejk cf f cf fc fc  f f f  f , ldsk ,sdc jdsc  jfc fkcdj fdjfdn </a>
     
                                     </div>
                                 </div>
                                 <div className="card">
                                     <div class="card-header">
     
                                         <h2>Scrum</h2>
                                     </div>
                                     <div class="card-author">
                                         <a class="author-avatar" href="/test">
                                             <img src={scrum} />
                                         </a>
                                         <svg class="half-circle" viewBox="0 0 106 57">
                                             <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                         </svg>
     
                                         <div class="author-name">
                                             <div class="author-name-prefix"><b>Durée:</b></div>
                                            50 heures, 3 semaines
                                         </div>
                                     </div>
                                     <div class="tags">
                                         <a >béneficiez d'une formation en hibhfd cf c fejk cf f cf fc fc  f f f  f , ldsk ,sdc jdsc  jfc fkcdj fdjfdn </a>
     
                                     </div>
                                 </div>
                                 <div className="card">
                                     <div class="card-header">
     
                                         <h2>Soft skills</h2>
                                     </div>
                                     <div class="card-author">
                                         <a class="author-avatar" href="/test">
                                             <img src={scrum} />
                                         </a>
                                         <svg class="half-circle" viewBox="0 0 106 57">
                                             <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                                         </svg>
     
                                         <div class="author-name">
                                             <div class="author-name-prefix"><b>Durée:</b></div>
                                            50 heures, 3 semaines
                                         </div>
                                     </div>
                                     <div class="tags">
                                         <a >béneficiez d'une formation en hibhfd cf c fejk cf f cf fc fc  f f f  f , ldsk ,sdc jdsc  jfc fkcdj fdjfdn </a>
     
                                     </div>
                                 </div>
                              *//* }</div>
</div>


</div>
</Style>  */
        );
    }
}



export default Cards;
import React from 'react'
import Style from 'style-it';
import props from 'prop-types';
import Divider from './Divider';
import logo from '../assets/istqb.jpg'
class Course extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }
    componentDidMount() {
        console.log(this.props.data)
    }
    render() {
        return (
            <Style>
                {`
                
                .corecont {
                    display: grid;
                    grid-template-columns: 20% 55% 25%;
                    grid-template-rows: auto;
                    padding-top:80px;
                  }
                  
                  .cover {
                    background: blue;
                    grid-row: 1;
                    grid-column: 1 / 4;
                  }
                  .img{
                    width: 100%;
                }
                  
                  .contentwrap {
                    
                    grid-column: 1 / 3;
                    grid-row: 2;
                  }

                  
                  .floatingcard {
                    
                    grid-column: 3;
                    grid-row:2;
                  }
                  
                  .floatingcarddiv  {
                    position: sticky;
                    border-radius: 9px;
                    top:120px;
                    /* height:200; */
                    width:22vw;
                    margin-top:80px;
                    margin-bottom:20px;
                    margin-right:50px;
                    box-shadow: -2px 1px 10px 2px #d6d6d6; 
                  }
                  .floatingcarddiv h3{
                    background: linear-gradient(90deg,#002c85,#d86464);
                    text-shadow: none;
                    -webkit-text-fill-color: transparent;
                    -webkit-background-clip: text;
                    background-clip: text;
                      color:#414141;
                      padding-left: 2vw;
                      padding-top: 2vw;
                      font-size: 1.5vw;
                  }
                  .contentwrap h2{
                    text-transform: none;
                    color:#000000;
                    padding:2vh 20px 0px 60px;
                    fontWeight: bold

                }
                .contentwrap h1{
                    color:#080808;
                    padding:1vh 20px 0px 100px;
                    font-size:30px;
                    fontWeight: bold

                }
                .contentwrap p{
                    padding:1vh 20px 20px 120px;
                    font-size:17px;
                    overflow-wrap:normal;
                    
                    color:#664a4a;
                    grid-column:1 / 2;
                    }
                    .check-list {
                        padding:1vh 20px 0px 120px;
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
                          transform-origin: bottom left;
                          transform: rotate(45deg);
                      }
                      .tags {
                        margin-left:2vw;
                        padding: .5rem 0 1rem;
                        line-height: 2;
                        margin-bottom: 0;

                    }
                        .tagcard {
                            margin-bottom:2px;
                            margin-right:2px;
                            background:white;
                            display:inline-block;
                            order: 1px solid #28242f;
                            box-shadow: -2px 1px 10px 2px #d6d6d6;
                            background: rgb(243,200,60)

                        }
                    .tagcard:hover{
                        background: linear-gradient(90deg,#ff8a00,#ff8a00);
                    }
                    
                    .tags   a {
                        
                        
                        font-size: 1vw;
                        color: #7a7a8c;
                        
                        /* border: 1px solid #28242f;
                        border-radius: 2rem; */
                        padding: .2rem .85rem .25rem;
                        margin-bottom:5px;
                        position: relative;
                        display:inline-block;

                        
                       /*  background: linear-gradient(90deg,#ff8a00,#e52e71); */
                       /*  text-shadow: none;
                        -webkit-text-fill-color: transparent;
                        -webkit-background-clip: text;
                        background-clip: text; */
                    }
                    
                    .tags a:hover {
                    
                        /* background: hsl(345, 2%, 38%);
                        text-shadow: none;/* 
                        -webkit-text-fill-color: transparent; */
                        -webkit-background-clip: text;
                        background-clip: text; */
                    }

                    a {
                        font-size: 1.5rem;
                        padding: 1rem 3rem;
                        color: #f4f4f4;
                        text-transform: uppercase;
                      }
                      
                      .btn {
                        text-decoration: none;
                        color: #ff461b;

                        width:auto;
                        border: 1px solid rgb(146, 148, 248);
                        position: relative;
                        overflow: hidden;
                        padding:10px 10px 10px 10px;
                      }
                      
                      .btn:hover {
                       // box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
                      }
                      
                      .btn:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        // background: linear-gradient(
                        //   120deg,
                        //   transparent,
                        //   rgba(146, 148, 248, 0.4),
                        //   transparent
                        // );
                        transition: all 650ms;
                      }
                      
                      .btn:hover:before {
                        left: 100%;
                      }
                      .centeredcont{
                        display: flex;
                        justify-content: center;
                        
                        padding-bottom:3vh;
                        height:auto;
                      }
                  
                  
                  

  
                `}
                <div className="corecont">
                    <div className='cover'>
                        
                        <img className='img' src={this.props.data.cover} alt='cover' />

                    </div>
                    <div className='contentwrap'>
                       <div class="row" >
                       <div class="form-group col-lg-2">
                       </div>

                       <div class="form-group col-lg-9">

                       <h2>{this.props.data.name} <span style={{color:"rgb(243,194,57)"}}>{this.props.data.name1}</span> </h2>
                        <h1>
                            Descriptif
                            </h1>
                        {
                            this.props.data.description.map((p) => <p>{p}</p>)
                        }


                        <h1>
                            Modalité pédagogique
                            </h1>

                        <p>{this.props.data.pedagogique}</p>
                        <h1>
                            Objectifs
                            </h1>
                       <div class="row" >
                       <div class="form-group col-lg-8">

                       <ul className="check-list">
                            {
                    
                    this.props.data.objectif.map((o) => <li style={{"font-size":"17px" ,"overflow-wrap":"normal","color":"#664a4a"}}>  <img style={{ width: "1vw" }} src={require('../assets/Tick mark-icon.png')} /> {"   "+ "  " + o}</li>)
                            }
                        </ul>
                       </div>
                       <div class="form-group col-lg-1">

                       </div>

                       </div>
                       </div>

                       </div>

                    </div>
                    <div className='floatingcard'>
                        <div className='floatingcarddiv'>
                            <h3>
                                Publique cible
                            </h3>
                            <div className="tags">
                                {
                                    this.props.data.cible.map((c) => <div className="tagcard"> <a >{c}</a></div>)
                                }

                            </div>
                            
                            <h3>
                                Prérequis:
                            </h3>
                            <div className="tags">
                                {
                                    this.props.data.prereq.essential.map((i) => <div className="tagcard"> <a > {i}</a></div>)

                                }
                            </div>

                           

                                {
                                    this.props.data.prereq.preferred.length > 0 ? <h3>Préférable </h3>
                                        : <div></div>
                                }
                                 <div className="tags">
                                {
                                    this.props.data.prereq.preferred.length > 0 ? this.props.data.prereq.preferred.map((p) => <div className="tagcard"> <a >{p}</a></div>)
                                        : <div></div>
                                }
                            </div>
                            <h3>
                                durée:
                            </h3>
                            <div className="tags">
                                <div className="tagcard"> <a>{this.props.data.duration}</a></div>
                            </div>
                            <div class="centeredcont">
                                <a href={"/contact"} class="btn">Préinscrire</a>
                            </div>



                        </div>
                    </div>
                </div>


            </Style>)
    }
}
export default Course;
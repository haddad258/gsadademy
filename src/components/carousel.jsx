import React, { Component } from 'react';
import PropTypes from 'prop-types';
import background from '../assets/BannerBackground.png'
import banner1 from '../assets/BannerIllustration.png'
/* import './carouselressources.js' */
import { Carousel } from './carouselressources'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, CarouselContext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coloreddot: "0",
            imagein: 0
        }
        /* this.clickdot = this.clickdot.bind(this) */
    }
    clickdot(i) {
       // console.log(i)
        this.setState({ coloreddot: i.toString() })
       // console.log(Carousel[this.state.coloreddot].picture)
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
                if(this.state.imagein <4){
                this.clickdot(this.state.imagein+1)
              this.setState({imagein:this.state.imagein+1})
                }else{
                    this.clickdot(0)
                    this.setState({imagein:0})

                }


            }, 5000);



    }




    /*     shouldComponentUpdate(nextProps, nextState) {
    
        } */

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div style={{ width: "100vw", backgroundSize: "auto", position: "relative", height: "auto"/* , backgroundImage: `url(${background})` */, paddingTop: "80px", backgroundColor: "transparent" }}>
                <img src={background} style={{ zIndex: "2", width: '100vw', height: 'auto' }} />
                <img src={Carousel[this.state.coloreddot].picture} style={{ zIndex: "3", position: "absolute", top: "20vh", left: "55vw", width: "30vw" }} />
                <div style={{ position: "absolute", width: "100vw", height: "80vh", top: "80px", left: "0px", zIndex: "3", display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "start" }}>
                    <div style={{ width: "40vw", display: "flex", marginLeft: "20vw", flexDirection: "column", marginBottom: "15vh" }}>
                        <div style={{ width: "32vw", textTransform: 'uppercase', fontSize: "4vh", fontWeight: 'bold', color: "#373737", marginBottom: "2vh" }} > {Carousel[this.state.coloreddot].title} <span style={{ color: "#ECAC24" }}>{Carousel[this.state.coloreddot].span}</span></div>
                        {this.state.coloreddot == "0" ? <div style={{ width: "32vw", color: "#5F5F5F", fontSize: "22px" }}>
                            Commencez maintenant des formations de plus haut niveau dans le domaine du Test logiciel, RPA, Agilité et Soft Skills...
                        </div> : <div></div>}
                        <div style={{ padding: "8px 10px", fontSize: "20px", fontWeight: "500", background: "#ECAC24", width: "13vw", textAlign: "center", marginTop: "5vh" }}> Nos formations</div>
                        <div style={{ display: "flex", flexDirection: "row", paddingLeft: "1vw" }}>
                            {
                                Array.from(Array(5).keys()).map(i =>

                                    <div style={{
                                        height: "15px", width: "15px", borderRadius: "50%", backgroundColor: this.state.coloreddot == i ? "#ECAC24" : "#bbb", marginTop: "2vh", marginRight: "3px"
                                    }} onClick={this.clickdot.bind(this, i)}></div>
                                )
                            }

                        </div>
                    </div>
                    {/* <img src={Carousel[this.state.coloreddot].picture} style={{ height: "60vh" }} /> */}
                </div>
            </div >
        );
    }
}

carousel.propTypes = {

};

export default carousel;
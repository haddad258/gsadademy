import React, { Component } from "react";
import Style from 'style-it';
import Carousel from "react-multi-carousel";
import { Swiper, SwiperSlide } from 'swiper/react';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
export class Header extends Component {
  render() {
    return (
      <Style>
        {`
          .frame {
    height:100vh;
    width: 99vw;
    align-self: center;
    background-color: black;

  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }

  .swiper-container {
    width: 100%;
    height: 100%;

  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

        `}
        <div className='frame'>
          <div class="swiper-container">

            <div class="swiper-wrapper">

              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>

            </div>

            <div class="swiper-pagination"></div>


            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>


            <div class="swiper-scrollbar"></div>
          </div>
          {/* <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel> */}
        </div>
        {/*  <header id="header">
          <div className="intro">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1>
                      {this.props.data ? this.props.data.title : "Loading"}
                      <span></span>
                    </h1>
                    <p>
                      {this.props.data ? this.props.data.paragraph : "Loading"}
                    </p>
                    <a
                      href="#features"
                      className="btn btn-custom btn-lg page-scroll"
                    >
                      Learn More
                  </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header> */}
      </Style>
    );
  }
}

export default Header;

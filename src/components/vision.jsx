import React, { Component } from 'react'

export class vision extends Component {
  render() {
    return (
      <div id="qsn">
        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Vision</h2>
                <p>Notre obsession est de contribuer à la construction des métiers de demain en entretenant l’évolution des potentiels humains.</p>

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
 */}              </div>
            </div>
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt="" /> </div>
          </div>
        </div>
      </div>
    )
  }
}

export default vision

import React from 'react'
import Style from 'style-it';
import { motion } from "framer-motion";
import Draggable from 'react-draggable';
class Rocket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }
    componentDidMount() {
    }

    render() {
        return (
            <Style>{`
            .frame{
                color:blue;
                height:300vh;
                width:100vw;
                justify-content: space-between;
                background:red;

            }
            .launchframe{
                height:90vh;
                width:100vw;
                background:green;
            }
            .outerspace{
                
            }
            .targetmoon{
                height:90vh;
                width:100vw;
                background:black;
            }

            `}
                <motion.div className="frame" >
                    <motion.div className="targetmoon">

                    </motion.div>

                    <motion.div className="launchframe">

                    </motion.div>
                </motion.div>

            </Style>
        );
    }
}



export default Rocket;
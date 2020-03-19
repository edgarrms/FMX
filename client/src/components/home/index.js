import React from "react";
import Card from "../card/index"
import Jumbotron from "../jumbotron"
import Row from "../grid/index"
import Counter from "../card/counter";

export default function Home(){
    return(
    <div>
        <Jumbotron/>
        <div className="container">
            <Row fluid={false}>
        <div className="col-md-8 col-xs-12">
            <Card userName="example user # 1"/>
        </div>
            <div className="col-md-4 col-xs-12">
                <h1>YOUR ADS HERE!!</h1>
            </div>
        </Row>
        </div>
        
    </div> 
    )
}
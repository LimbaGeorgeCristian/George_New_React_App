import react from 'react';
import React,{Component} from 'react';
import myPhoto from "../img/george.jpg"
class George extends Component {
    render(){
        let myname = {
            firstname: "George Cristian",
            lastname: "Limba"
        };

        let iLearn = "React";

        const createElement = React.createElement(
            "p",
            {id: "george_p"},
           "Aici am folosit functia React.createElement"

        )

        // const myPhoto = {
        //     eu: "../img/george.jpg"
        // }

        function myFullName(e){
            if(e){
                return e.firstname + " " + e.lastname
            }
            else{
                return "Necunoscut"
            }
            
        }
        return(
            <div>
                <p>{createElement}</p>
                <h1>
                     Numele meu este: {myFullName(myname)} si invat {iLearn}
                </h1>
                <span><h1 style={{color:"red"}} >Acesta sunt eu :</h1><img src={myPhoto}></img> </span>
            </div>
        )
    }
}

export default George;
import React from "react";
import Fire from "../firebase/Fire";
import {setUserData, setUserLogIn} from "../../redux-stores/actions/actions";
import {useDispatch} from "react-redux";

function SignIn (){

    const dispatch = useDispatch();
    const [input, updateInput] = React.useState({
        'email': '',
        'password': ''
    });

    const handleInput = prop => event => {
        updateInput({ ...input, [prop]: event.target.value })
    };

    const submitUserData = () => {
        Fire.auth().signInWithEmailAndPassword(input.email, input.password).then(() => {
            let user = Fire.auth().currentUser;


            console.log(user);
        }).catch((err) =>{
            const errCode = err.code;
            const errMessage = err.message;

            alert(`${errCode}: ${errMessage}`);
        });
    };

    return(
        <div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id={'password'}
                       onChange={handleInput('email')}
                       value={input.email}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id={'password'}
                       onChange={handleInput('password')}
                       value={input.password}/>
            </div>
            <button onClick={submitUserData}>Submit</button>
        </div>
    );
}

export default SignIn;
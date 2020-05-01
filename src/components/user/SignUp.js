import React from "react";
import Fire from "../firebase/Fire";
import {useDispatch} from "react-redux";
import {setUserLogIn, setUserData} from '../../redux-stores/actions/actions';

function SignUp (){

    const dispatch = useDispatch();
    const [input, updateInput] = React.useState({
        'name': '',
        'email': '',
        'password': '',
        'confirmPass': ''
    });

    const handleInput = prop => event => {
        updateInput({ ...input, [prop]: event.target.value })
    };

    const submitUserData = () => {
        Fire.auth().createUserWithEmailAndPassword(input.email, input.password).then(() => {
            let user = Fire.auth().currentUser;

            user.updateProfile({
                displayName: input.name
            }).then(() => {
                dispatch(setUserLogIn(true));
                dispatch(setUserData(user.email, user.displayName));
                updateInput({
                    email: "",
                    password: "",
                    name: ""
                });
            });
        }).catch((err) =>{
            const errCode = err.code;
            const errMessage = err.message;

            alert(`${errCode}: ${errMessage}`);
        });
    };

    return(
        <div className={'login-cont'}>
            <h2>Sign up</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id={'name'}
                       onChange={handleInput('name')}
                       value={input.name}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id={'email'}
                       onChange={handleInput('email')}
                       value={input.email}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id={'password'}
                       onChange={handleInput('password')}
                       value={input.password}/>
            </div>
            <div>
                <label htmlFor="confirmPass">Password</label>
                <input type="password" name='confirmPass' id={'confirmPass'}
                       onChange={handleInput('confirmPass')}
                       value={input.confirmPass}/>
            </div>
            <button onClick={submitUserData}>Submit</button>
        </div>
    );
}

export default SignUp;
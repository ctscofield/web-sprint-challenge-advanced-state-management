import axios from 'axios';

export const START_SMURF = "START_SMURF";
export const SUCCESS_SMURF = "SUCCESS_SMURF";
export const FAIL_SMURF = "FAIL_SMURF";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERR = "SET_ERR";

export const fetchSmurfs = () => dispatch => {
    dispatch({type: START_SMURF});
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res.data);
            dispatch({type: SUCCESS_SMURF, payload: res.data})
        })
        .catch(err => {
            dispatch({type: FAIL_SMURF, payload: err});
        })
}

export const startSmurf = () => {
    return({type: START_SMURF});
}

export const successSmurf = (smurf) => {
    console.log(smurf)
    return({type: SUCCESS_SMURF, payload: smurf});
}

export const failSmurf = (err) => {
    return({type: FAIL_SMURF, payload: err});
}

export const addSmurf = (smurf) => {
    return({type: ADD_SMURF, payload: smurf});
}

export const setErr = (err) => {
    return({type: SET_ERR, payload: err});
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
import { NAME, SALUTATION, RESET } from './greeter.constants';

export function updateName(name){
    return {
        type: NAME,
        payload: name
    };
}

export function updateSalutation(salutation){
    return {
        type: SALUTATION,
        payload: salutation
    };
}

export function reset(){
    return{
        type: RESET,
        payload: null
    };
}
import { NAME, SALUTATION, RESET } from './greeter.constants';

export default (state = {}, { type, payload}) => {
    switch(type){
        case NAME:
          return { salutation: state.salutation, name: payload};
        case SALUTATION:
          return { salutation: payload, name: state.name};
        case RESET:
          return { salutation: 'Hey ', name: 'You'};
        default:
          return state;
    }
};
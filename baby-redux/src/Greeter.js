import React from 'react';
import { connect } from 'react-redux';
import { updateName, updateSalutation, reset} from './greeter.actions';

export function Greeter({ salutation='Hey ', name='You', dispatch }) {
    return (
        <div>
            <div>
                <span>{salutation}</span>
                <span>{name}</span>
            </div>
            <label>
                Salutation:
            <input value={salutation} onChange={event => dispatch(updateSalutation(event.target.value))}type="text" />
            </label>
            <label>
                Name:
            <input value={name} onChange={event => dispatch(updateName(event.target.value))}type="text" />
            </label>
            <button onClick={() => dispatch(reset())}> Reset </button>
        </div>
    )
}

export default connect(
    state => ({ 
        name: state.name,
        salutation: state.salutation
    })
)(Greeter);
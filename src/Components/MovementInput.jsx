import React from "react";

const MovementInput = props => (
    <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
            <div className="field">
                <label className="label">{props.label}</label>
                <div className="control has-text-dark">
                    <input id={props.id} className="input is-primary" type="number" placeholder={props.label} value={props.value} onChange={props.setValue}/>
                </div>
            </div>
        </div>
    </div>
);

export default MovementInput;
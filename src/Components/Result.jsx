import React from "react";
const wilksCalculator = require('wilks-calculator');

function calculateResult(squat, benchPress, deadLift, bodyWeight) {
    const liftedWeight = parseFloat(squat) + parseFloat(benchPress) + parseFloat(deadLift);

    if (liftedWeight <= 0 || bodyWeight <= 0)  {
        return 0;
    }

    let wilks = wilksCalculator.calculateWilksScore('m', parseFloat(bodyWeight), liftedWeight);

    return Math.round(wilks * 100) / 100;
}

const Result = ({squat, benchPress, deadLift, bodyWeight}) => (
    <p className="content is-size-1">
        {calculateResult(squat, benchPress, deadLift, bodyWeight)} wilks points
    </p>
);

export default Result;
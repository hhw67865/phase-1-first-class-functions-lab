const returnFirstTwoDrivers = array => {
    const returnFirstTwoDrivers = [array[0], array[1]];
    return returnFirstTwoDrivers;
}

const returnLastTwoDrivers = array => {
    const returnLastTwoDrivers = [array[array.length-2], array[array.length-1]]
    return returnLastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return (fare) => multiplier*fare;
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(array, callback) {
    return callback(array);
}
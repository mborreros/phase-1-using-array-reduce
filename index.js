const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Create a new variable called totalBatteries, which holds the sum of all of the battery amounts in the batteryBatches array. You should use reduce() for this!

const totalBatteries = batteryBatches.reduce(function (accumulator, batteryElement) {
    return accumulator + batteryElement;
})
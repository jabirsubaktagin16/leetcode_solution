var ParkingSystem = function(big, medium, small) {
    this.slots = [big, medium, small];
};


ParkingSystem.prototype.addCar = function(carType) {
    this.slots[carType - 1] -= 1;
	return this.slots[carType - 1] >= 0;
};

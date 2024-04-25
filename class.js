class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = true; 
    }

    Availabilityofcar() {
        this.isAvailable = !this.isAvailable; 
    }
}


const myCar = new Car("Toyota", "Camry", 2020);
console.log(myCar); 
myCar.Availabilityofcar();
console.log(myCar); 
//2


    



class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car; 
        this.renterName = renterName; 
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate; 
    }

    
    calculateRentalDuration() {
        const start = this.rentalStartDate.getTime();
        const end = this.rentalEndDate.getTime();
        const durationInMilliseconds = end - start;
        const durationInDays = durationInMilliseconds / (1000 * 60 * 60 * 24);
        return Math.floor(durationInDays); 
    }
}


const car1 = new Car('Toyota', 'Camry', 2022);
const rental1 = new Rental(car1, 'John Doe', new Date('2024-04-20'), new Date('2024-04-25'));

console.log(rental1.calculateRentalDuration());

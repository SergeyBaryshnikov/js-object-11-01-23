function Cattle(brand, maxVolume, minVolume) {
  this.brand = brand;
  this.maxVolume = maxVolume;
  this.minVolume = minVolume;
  this.currentVolume = 0;
  this.isOn = false;
  /**
   *
   * @param {number} value
   * @returns {number | false}
   */
  this.addWater = function (value = 0) {
    if (value < 0) {
      return false;
    }
    this.currentVolume += value;
    if (this.currentVolume >= this.maxVolume) {
      return (this.currentVolume = this.maxVolume);
    }
    return this.currentVolume;
  };
  /**
   *
   * @param {number} value
   * @returns {number | false}
   */
  this.makeTea = function (value = 0) {
    if (value < 0) {
      return false;
    }
    this.currentVolume -= value;
    if (this.currentVolume <= 0) {
      return (this.currentVolume = 0);
    }
    return this.currentVolume;
  };
  /**
   *
   * @returns {boolean}
   */
  this.turnOn = function () {
    if (
      this.currentVolume <= this.maxVolume &&
      this.currentVolume >= this.minVolume
    ) {
      return (this.isOn = true);
    } else {
      return (this.isOn = false);
    }
  };
}

const cattle1 = new Cattle("Cattle1", 1500, 500);

console.log(cattle1.turnOn());
cattle1.addWater(400);
console.log(cattle1.currentVolume);
console.log(cattle1.turnOn());
cattle1.addWater(1300);
console.log(cattle1.currentVolume);
console.log(cattle1.turnOn());
cattle1.makeTea(1000);
console.log(cattle1.currentVolume);
console.log(cattle1.turnOn());
cattle1.makeTea(10);
console.log(cattle1.currentVolume);
console.log(cattle1.turnOn());
cattle1.addWater(200);
console.log(cattle1.currentVolume);
console.log(cattle1.turnOn());

// function Product(
//   name = "test",
//   price = 0,
//   currency = "uah",
//   isAvalible = false
// ) {
//   this.name = name;
//   this.price = price;
//   this.currency = currency;
//   this.isAvalible = isAvalible;
//   this.showInfo = function () {
//     return this.name + ":" + this.price + this.currency;
//   };
// }

// const product1 = new Product("milk", 35, "uah", true);
// const product2 = new Product("egg", 6.5);
// const product3 = new Product();

// console.log(product1.showInfo());

// function User(login, email, password) {
//   this.login = login;
//   this.email = email;
//   this.password = password;
//   this.showInfo = function () {
//     return this.login + " " + this.password;
//   };
// }
// const user1 = new User("sergey", "serg@gmail.com", "1111");

// console.log(user1.showInfo());

// function Country(name, population, area) {
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function () {
//     return this.population / this.area;
//   };
// }

// const country1 = new Country("Country1", 1000, 100);

// console.log(country1.getDensity());

// function Auto(name, maxSpeed) {
//   this.name = name;
//   this.maxSpeed = maxSpeed;
//   this.currentSpeed = 0;
//   /**
//    *
//    * @returns {number}
//    */
//   this.stop = function () {
//     return (this.currentSpeed = 0);
//   };
//   /**
//    *
//    * @param {number} value
//    * @returns {number | false}
//    */
//   this.accelerate = function (value = 0) {
//     if (value < 0) {
//       return false;
//     }
//     // if (this.currentSpeed + value >= this.maxSpeed) {
//     //   this.currentSpeed = this.maxSpeed;
//     // } else {
//     //   this.currentSpeed += value;
//     // }
//     // return this.currentSpeed;
//     this.currentSpeed += value;
//     if (this.currentSpeed >= this.maxSpeed) {
//       return (this.currentSpeed = this.maxSpeed);
//     }
//     return this.currentSpeed;
//   };
//   /**
//    *
//    * @param {number} value
//    * @returns {number | false}
//    */
//   this.deaccelerate = function (value = 0) {
//     if (value < 0) {
//       return false;
//     }
//     // if (this.currentSpeed - value <= 0) {
//     //   this.currentSpeed = 0;
//     // } else {
//     //   this.currentSpeed -= value;
//     // }
//     // return this.currentSpeed;
//     this.currentSpeed -= value;
//     if (this.currentSpeed <= 0) {
//       return (this.currentSpeed = 0);
//     }
//     return this.currentSpeed;
//   };
// }
// const car1 = new Auto("bmw", 270);
// console.log(car1.accelerate(350));
// console.log(car1.deaccelerate(150));
// console.log(car1.deaccelerate(150));

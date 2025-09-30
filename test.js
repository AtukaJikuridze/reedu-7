// 1) Triangle კლასი
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const s = this.getPerimeter() / 2; // ნახევარი პერიმეტრი
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)); // ჰერონის ფორმულა
  }

  isRightTriangle() {
    let sides = [this.a, this.b, this.c].sort((x, y) => x - y);
    return (
      Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2)
    );
  }
}

// let t = new Triangle(3, 4, 5);
// console.log(t.getPerimeter(), t.getArea(), t.isRightTriangle());

// 2) Smartphone & GamingPhone
class Smartphone {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }
}

class GamingPhone extends Smartphone {
  constructor(brand, model, releaseYear, gpuScore, batteryCapacity) {
    super(brand, model, releaseYear);
    this.gpuScore = gpuScore;
    this.batteryCapacity = batteryCapacity;
  }

  performanceIndex() {
    return (this.gpuScore * this.batteryCapacity) / 1000;
  }
}

// let gp = new GamingPhone("Asus", "ROG 6", 2023, 9000, 6000);
// console.log(gp.performanceIndex());

// 3) CryptoWallet
class CryptoWallet {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push({ type: "deposit", amount, date: new Date() });
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }
    this.balance -= amount;
    this.history.push({ type: "withdraw", amount, date: new Date() });
  }

  transfer(amount, toWallet) {
    if (amount > this.balance) {
      console.log("Insufficient funds for transfer");
      return;
    }
    this.withdraw(amount);
    toWallet.deposit(amount);
    this.history.push({
      type: "transfer",
      amount,
      to: toWallet.owner,
      date: new Date(),
    });
  }

  getHistory() {
    return this.history;
  }
}

// let w1 = new CryptoWallet("Giorgi");
// let w2 = new CryptoWallet("Nika");
// w1.deposit(100);
// w1.transfer(30, w2);
// console.log(w1.getHistory(), w2.getHistory());

// 4) Wishlist
class Wishlist {
  constructor() {
    this.items = [];
    this.nextId = 1;
  }

  addItem(name) {
    this.items.push({ id: this.nextId++, name });
  }

  deleteItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  updateItem(id, newName) {
    let item = this.items.find((i) => i.id === id);
    if (item) item.name = newName;
  }
}

// let wl = new Wishlist();
// wl.addItem("MacBook");
// wl.addItem("iPhone");
// wl.updateItem(1, "MacBook Pro");
// wl.deleteItem(2);
// console.log(wl.items);

// 5) Freelancer
class Freelancer {
  constructor(name, hourlyRate) {
    this.name = name;
    this.hourlyRate = hourlyRate;
  }

  calculateEarnings(hoursWorked, bonusRate = 1.5) {
    let baseHours = Math.min(hoursWorked, 160);
    let overtime = Math.max(0, hoursWorked - 160);

    let earnings =
      baseHours * this.hourlyRate + overtime * this.hourlyRate * bonusRate;
    return earnings;
  }
}

// let f = new Freelancer("Luka", 20);
// console.log(f.calculateEarnings(170)); // 160*20 + 10*20*1.5

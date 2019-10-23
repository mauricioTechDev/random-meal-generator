const menu = {
  _courses: {
    //these are the key in empty arrays
    appetizers: [],
    mains: [],
    desserts: [],
  },
  //here we are returning the said data
  get appetizers(){
    return this._courses.appetizers
  },
  get mains(){
    return this._courses.mains
  },
  get desserts(){
    return this._courses.desserts
  },
  //here are setting actual data
  set appetizers(appetizers){
    this._courses.appetizers = appeziters;
  },
  set mains(mains){
    this._courses.appetizers = mains;
  },
  set desserts(desserts){
    this._courses.appetizers = desserts;
  },
  //dont need parameters becouse we are just getting courses
  get courses(){
    return{
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  //functionality
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  //here we are calling the getRandomDishFromCourse method
  generateRandomMeal() {
const appetizers = this.getRandomDishFromCourse('appetizers');
const mains = this.getRandomDishFromCourse('mains');
const dessert = this.getRandomDishFromCourse('desserts');
const totalPrice = appetizers.price + mains.price + dessert.price;
    return `Your meal is ${appetizers.name}, ${mains.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'wings', 4.50);
menu.addDishToCourse('appetizers', 'fries', 5.00);

menu.addDishToCourse('mains', 'steak', 10.20);
menu.addDishToCourse('mains', 'salmon', 7.50);
menu.addDishToCourse('mains', 'tofu', 11.00);

menu.addDishToCourse('desserts', 'icecream', 3.0);
menu.addDishToCourse('desserts', 'coffee', 3.0);
menu.addDishToCourse('desserts', 'cake', 3.25);

const meal = menu.generateRandomMeal();
console.log(meal);

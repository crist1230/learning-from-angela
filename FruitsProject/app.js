
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB');

// A schema is basically a structure that the documents will follow.
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please insert a name for this fruit! :)']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

// First parameter is the singular form of the name of the collection you
// want to store the document in.
// Second parameter is the schema (the structure) you want the document
// formatted in.
// This is the model for a Fruit in the Fruits collection.
// The document will be called a fruit.
const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: 'Peach',
  rating: 10,
  review: 'Great on anything!'
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: 'Belongs on pizza.'
});

const banana = new Fruit({
  name: "Banana",
  rating: 4,
  review: 'Nice in smoothies.'
});

banana.save();

// // Save this document called fruit into a fruits collection inside a fruitsDB.
// fruit.save();

// Fruit.deleteOne({_id: '620aede41ea4738ad700855f'}, (err) =>{
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully deleted document.');
//   };
// });

// Fruit.find((err, fruits) => {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//
//     fruits.forEach( (fruit) => {
//       console.log(fruit.name);
//     });
//   };
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: 'Amy',
  age: 12,
  favoriteFruit: pineapple
});

// person.save();

Person.updateOne({name: 'John'}, {favoriteFruit: banana}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully updated one document.')
  }
})

// Person.deleteMany({name: 'John'}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Successfully deleted documents.');
//   };
// });

function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
};

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};

const instructorAgain = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return "says bye!";
    }
};

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}
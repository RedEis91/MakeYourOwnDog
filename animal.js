//created an animal object
class Animal {
  constructor(species){
    // set the species property of our animal to whatever parameter we pass through it
    this.species = species;
}
  //created a method for our animal to allow it to eat, and make a noise while doing so
 eatFood() {
    console.log('Nom Nom Nom!');
  }
  //created a method for our animal that allows it to speak to us
 speak(){
   console.log(this.species + " makes a sound")
 }
}
//extended on our animal to create an object class out of man's best friend, the dog
class Dog extends Animal{
  // gave our Dog a new property parameter of name, super in this case is left blank because we will not be sending back any properties to the parent object
  constructor(name){
    super ();
//set the name of our dog to be whatever we pass through our name parameter, set the species property of this object as dog permanently, so we do not have to provide the species parameter to create this object
    this.name = name;
    this.species = "Dog";
  }
  
  //gave our dog a new speak method to say "<name> says Hello!" , which will automatically override the previously defined method of it's parent class. we do not have to do or say anything for the extended class to inherit the eat method, it automatically inherited this method
  speak(){
   console.log(this.name + " says Hello!");
  }
}


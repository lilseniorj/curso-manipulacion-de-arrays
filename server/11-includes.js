const pets = ["Cat", "Dog", "Bat"];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "Dog") {
    includeInArray = true;
    break;
  }
}

const rta = pets.includes("Dog");
console.log("for", includeInArray);
console.log("includes", rta);
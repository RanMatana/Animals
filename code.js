////////////////////////////////////////////////////////
// Classes //
////////////////////////////////////////////////////////

/**
 Animal
 */
class Animal {
  constructor(pType, attr) {
    this.type = pType;
    // Composition
    this.animal = this.createAnimal(pType, attr);
  }

  createAnimal(type, attr) {
    switch (type) {
      case "elephant":
        return new Elephant(attr);
      case "rabbit":
        return new Rabbit(attr);
      default:
        return new Penguin(attr);
    }
  }
}

/**
 Penguin
 */
class Penguin {
  constructor(pSwimmingSpeed) {
    this.swimmingSpeed = pSwimmingSpeed;
    this.createElement();
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.className = "Penguin";
    this.element.onclick = () => {
      this.element.remove(this);
      listEmpty();
    };
    let atext = document.createElement("p");
    atext.innerHTML =
      "The Penguin Swimming Speed is:" + this.swimmingSpeed + "km/h";
    let aImage = document.createElement("img");
    aImage.src = "./images/img03.jpg";
    this.element.appendChild(aImage);
    this.element.appendChild(atext);
    return this.element;
  }
}
/**
 Rabbit
 */
class Rabbit {
  constructor(pSpeed) {
    this.speed = pSpeed;
    this.createElement();
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.className = "Rabbit";
    this.element.onclick = () => {
      this.element.remove(this);
      listEmpty();
    };
    let atext = document.createElement("p");
    atext.innerHTML = "The Rabbit Speed is:" + this.speed + "km/h";
    let aImage = document.createElement("img");
    aImage.src = "./images/img02.jpg";
    this.element.appendChild(aImage);
    this.element.appendChild(atext);
    return this.element;
  }
}

/**
 Elephant
 */
class Elephant {
  constructor(pWeight) {
    this.weight = pWeight;
    this.createElement();
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.className = "Elephant";
    this.element.onclick = () => {
      this.element.remove(this);
      listEmpty();
    };
    let atext = document.createElement("p");
    atext.innerHTML = "The Elephant Weight is:" + this.weight + "kg";
    let aImage = document.createElement("img");
    aImage.src = "./images/img01.jpg";
    this.element.appendChild(aImage);
    this.element.appendChild(atext);
    return this.element;
  }
}

////////////////////////////////////////////////////////
// Functions //
////////////////////////////////////////////////////////

// List empty
const listEmpty = () => {
  if (aList.children.length === 0) {
    let atext = document.createElement("p");
    atext.innerHTML = "The list is empty";
    atext.className = "empty";
    aList.appendChild(atext);
  }
};

// Remove all
const removeAllCildren = () => {
  while (aList.firstChild) {
    aList.removeChild(aList.lastChild);
  }
};

// Btn Init
const btn_init = document.getElementById("btn-init");
btn_init.onclick = () => {
  if (count !== aList.children.length) {
    init();
  }
};

// Btn Remove All without Penguins
const remove = document.getElementById("btn-remove");
remove.onclick = () => removeUnPenguin();
const removeUnPenguin = () => {
  if (count && aList.children[0].className !== "empty") {
    for (let i = 0; i < aList.children.length; i++) {
      const element = aList.children[i];
      if (element.className !== "Penguin") {
        aList.removeChild(element);
        i -= 1;
      }
    }
    // if the list is empty
    if (aList.children.length === 0) {
      let atext = document.createElement("p");
      atext.innerHTML = "You deleted all the penguins";
      atext.className = "deleted";
      aList.appendChild(atext);
    }
  }
};

const init = () => {
  if (aList.children.length !== 0) {
    removeAllCildren();
  }
  let aAnimal1 = new Animal("elephant", 550);
  let aAnimal2 = new Animal("rabbit", 750);
  let aAnimal3 = new Animal("penguin", 290);
  let aAnimal4 = new Animal("elephant", 150);
  let aAnimal5 = new Animal("penguin", 100);
  let aAnimal6 = new Animal("penguin", 850);
  let aAnimal7 = new Animal("elephant", 200);
  let aAnimal8 = new Animal("penguin", 60);
  let aAnimal9 = new Animal("rabbit", 850);
  let aAnimal10 = new Animal("sasas", 74);

  aList.appendChild(aAnimal1.animal.element);
  aList.appendChild(aAnimal2.animal.element);
  aList.appendChild(aAnimal3.animal.element);
  aList.appendChild(aAnimal4.animal.element);
  aList.appendChild(aAnimal5.animal.element);
  aList.appendChild(aAnimal6.animal.element);
  aList.appendChild(aAnimal7.animal.element);
  aList.appendChild(aAnimal8.animal.element);
  aList.appendChild(aAnimal9.animal.element);
  aList.appendChild(aAnimal10.animal.element);
  count = aList.children.length;
  if (count === 0) {
    let atext = document.createElement("p");
    atext.innerHTML = "No Items to show";
    aList.appendChild(atext);
  }
};

// Initilize
let aList = document.getElementById("Animals_div");
let count;
init();

deepCopy = obj => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let copy = {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
};

class ObjectUtilities {
  static mergeObjects = (objA, objB) => {
    return { ...objA, ...objB };
  };

  static removePassword = user => {
    let CloneObj = {};
    // Method 1 (Shallow Copy)
    // CloneObj = Object.assign({}, user);

    // Method 2 (Shallow Copy)
    CloneObj = { ...user };

    // Method 3 (Deep Copy)
    //CloneObj = deepCopy(user);

    // Method 4 (Deep Copy)
    //CloneObj = JSON.parse(JSON.stringify(user));

    delete CloneObj.password;
    return CloneObj;
  };

  static removePassword = ({ password, ...rest }) => rest;

  static freezeObj = cleanUser => {
    return Object.freeze(cleanUser);
  };

  static getOnlyValues = frozenUser => {
    return Object.values(frozenUser);
  };

  static getOnlyProperties = frozenUser => {
    return Object.keys(frozenUser);
  };
}

const objA = {
  name: "Falcon",
  favFood: "Pizza"
};

const objB = {
  password: "12345"
};

const user = ObjectUtilities.mergeObjects(objA, objB);
console.log(user);

const cleanUser = ObjectUtilities.removePassword(user);
console.log(cleanUser);

const frozenUser = ObjectUtilities.freezeObj(cleanUser);

const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
console.log(onlyValues);

const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
console.log(onlyProperties);

frozenUser.name = "Hello!";

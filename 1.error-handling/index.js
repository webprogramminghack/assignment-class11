class MissingPropertyError extends Error {
  // please update the class
  constructor(message) {
    super(message);
    this.name = 'MissingPropertyError';
  }
}

class InvalidTypeError extends Error {
  // please update the class
  constructor(message) {
    super(message);
    this.name = 'InvalidTypeError';
  }
}

function parseAndValidateJSON(jsonString) {
  try {
    let parsedData = JSON.parse(jsonString);
    // use if statements and throw the errors
    if (!parsedData.name) {
      throw new MissingPropertyError(`Property "name" is missing`);
    }
    
    if (!parsedData.age) {
      throw new MissingPropertyError(`Property "age" is missing`);
    }
    
    if (typeof parsedData.name !== 'string') {
      throw new InvalidTypeError(`Property "name" should be of type "string"`);
    }

    if (typeof parsedData.age !== 'number') {
      throw new InvalidTypeError(`Property "age" should be of type "number"`);
    }

    return parsedData;
  } catch (error) {
    // handle the error here
    console.log(error.message);
  }
}

// -------- Don't edit the code below --------
parseAndValidateJSON('{"name": "John", "age": 30}');
parseAndValidateJSON('{"name": "John"}'); // Output: MissingPropertyError: Property "age" is missing
parseAndValidateJSON('{"name": "John", "age": "30"}'); // Output: InvalidTypeError: Property "age" should be of type "number"
parseAndValidateJSON('{name: "John", age: 30}'); // Output: SyntaxError: Unexpected token n in JSON at position 1
parseAndValidateJSON('{"name": "John", "age": 30, }'); // Output: SyntaxError: Unexpected token } in JSON at position ...

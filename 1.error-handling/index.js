class MissingPropertyError extends Error {
  // please update the class
  constructor(message) {
    super(`Property "${message}" is missing`);
    this.name = 'MissingPropertyError';
  }
}

class InvalidTypeError extends Error {
  // please update the class
  constructor(message, options) {
    super(`Property "${message}" should be of type "${options}"`);
    this.name = 'InvalidTypeError';
    this.options = options;
  }
}

function parseAndValidateJSON(jsonString) {
  try {
    let parsedData = JSON.parse(jsonString);
    // use if statements and throw the errors
    if (!parsedData.name) {
      throw new MissingPropertyError("name");
    }
    if (!parsedData.age) {
      throw new MissingPropertyError("age");
    }
    if (parsedData.age !== Number(parsedData.age)) {
      throw new InvalidTypeError(`age`, `number`);
    }
    if (parsedData.name !== String(parsedData.name)) {
      throw new InvalidTypeError(`name`, `string`);
    }

    return parsedData;
  } catch (error) {
    // handle the error here
    console.log(`${error.name}: ${error.message}`)
  }
}

// -------- Don't edit the code below --------
parseAndValidateJSON('{"name": "John", "age": 30}');
parseAndValidateJSON('{"name": "John"}'); // Output: MissingPropertyError: Property "age" is missing
parseAndValidateJSON('{"name": "John", "age": "30"}'); // Output: InvalidTypeError: Property "age" should be of type "number"
parseAndValidateJSON('{name: "John", age: 30}'); // Output: SyntaxError: Unexpected token n in JSON at position 1
parseAndValidateJSON('{"name": "John", "age": 30, }'); // Output: SyntaxError: Unexpected token } in JSON at position ...

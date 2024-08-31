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

    if (!parsedData.age) {
      // console.log(`MissingPropertyError: Property "age" is missing`);
      throw new MissingPropertyError(`Property "age" is missing`);
    } else if (typeof parsedData.age !== "number") {
      // console.log(`InvalidTypeError: Property "age" should be of type "number"`);
      throw new InvalidTypeError(`Property "age" should be of type "number"`);
    }

    return parsedData;
  } catch (error) {
    // handle the error here
    if (error instanceof SyntaxError) {
      // console.log('SyntaxError:', error.message);
      throw new SyntaxError(error.message)
    }
  }
}

// -------- Don't edit the code below --------
parseAndValidateJSON('{"name": "John", "age": 30}');
parseAndValidateJSON('{"name": "John"}'); // Output: MissingPropertyError: Property "age" is missing
parseAndValidateJSON('{"name": "John", "age": "30"}'); // Output: InvalidTypeError: Property "age" should be of type "number"
parseAndValidateJSON('{name: "John", age: 30}'); // Output: SyntaxError: Unexpected token n in JSON at position 1
parseAndValidateJSON('{"name": "John", "age": 30, }'); // Output: SyntaxError: Unexpected token } in JSON at position ...

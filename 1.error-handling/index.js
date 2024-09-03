class MissingPropertyError extends Error {
  // please update the class
  constructor(property) {
    super(`Property "${property}" is missing`);
    this.name = 'MissingPropertyError';
  }
}

class InvalidTypeError extends Error {
  // please update the class
  constructor(property, expectedType) {
    super(`Property "${property}" should be of type "${expectedType}"`);
    this.name = 'InvalidTypeError';
  }
}

function parseAndValidateJSON(jsonString) {
  try {
    let parsedData = JSON.parse(jsonString);
    if (typeof parsedData.name === 'undefined') {
      throw new MissingPropertyError('name');
    }
    if (typeof parsedData.age === 'undefined') {
      throw new MissingPropertyError('age');
    }
    if (typeof parsedData.name !== 'string') {
      throw new InvalidTypeError('name', 'string');
    }
    if (typeof parsedData.age !== 'number') {
      throw new InvalidTypeError('age', 'number');
    }

    return parsedData;
  } catch (error) {
    // handle the error here
    if (error instanceof SyntaxError) {
      console.error('SyntaxError:', error.message);
    } else if (error instanceof MissingPropertyError || error instanceof InvalidTypeError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error('Unexpected:', error.message);
    }
  }
}

// -------- Don't edit the code below --------
parseAndValidateJSON('{"name": "John", "age": 30}');
parseAndValidateJSON('{"name": "John"}'); // Output: MissingPropertyError: Property "age" is missing
parseAndValidateJSON('{"name": "John", "age": "30"}'); // Output: InvalidTypeError: Property "age" should be of type "number"
parseAndValidateJSON('{name: "John", age: 30}'); // Output: SyntaxError: Unexpected token n in JSON at position 1
parseAndValidateJSON('{"name": "John", "age": 30, }'); // Output: SyntaxError: Unexpected token } in JSON at position ...

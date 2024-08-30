class MissingPropertyError extends Error {
  constructor(property) {
    super(`Property "${property}" is missing`);
    this.name = 'MissingPropertyError';
  }
}

class InvalidTypeError extends Error {
  constructor(property, expectedType) {
    super(`Property "${property}" should be of type "${expectedType}"`);
    this.name = 'InvalidTypeError';
  }
}

function parseAndValidateJSON(jsonString) {
  try {
    let parsedData = JSON.parse(jsonString);

    // Validate that the required properties are present
    if (!parsedData.hasOwnProperty('name')) {
      throw new MissingPropertyError('name');
    }
    if (!parsedData.hasOwnProperty('age')) {
      throw new MissingPropertyError('age');
    }

    // Validate the types of the properties
    if (typeof parsedData.name !== 'string') {
      throw new InvalidTypeError('name', 'string');
    }
    if (typeof parsedData.age !== 'number') {
      throw new InvalidTypeError('age', 'number');
    }

    return parsedData;
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Handle JSON parsing errors
      console.error(`SyntaxError: ${error.message}`);
    } else if (
      error instanceof MissingPropertyError ||
      error instanceof InvalidTypeError
    ) {
      // Handle custom errors
      console.error(`${error.name}: ${error.message}`);
    } else {
      // Handle other errors
      console.error(`Unexpected error: ${error.message}`);
    }
  }
}

// -------- Don't edit the code below --------
parseAndValidateJSON('{"name": "John", "age": 30}');
parseAndValidateJSON('{"name": "John"}'); // Output: MissingPropertyError: Property "age" is missing
parseAndValidateJSON('{"name": "John", "age": "30"}'); // Output: InvalidTypeError: Property "age" should be of type "number"
parseAndValidateJSON('{name: "John", age: 30}'); // Output: SyntaxError: Expected property name or '}' in JSON at position 1
parseAndValidateJSON('{"name": "John", "age": 30, }'); // Output: SyntaxError: Expected double-quoted property name in JSON at position 28

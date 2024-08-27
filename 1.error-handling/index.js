class MissingPropertyError extends Error {
  // please update the class
}

class InvalidTypeError extends Error {
  // please update the class
}

function parseAndValidateJSON(jsonString) {
  try {
    let parsedData = JSON.parse(jsonString);
    // use if statements and throw the errors

    return parsedData;
  } catch (error) {
    // handle the error here
  }
}

// -------- Don't edit the code below --------
parseAndValidateJSON('{"name": "John", "age": 30}');
parseAndValidateJSON('{"name": "John"}'); // Output: MissingPropertyError: Property "age" is missing
parseAndValidateJSON('{"name": "John", "age": "30"}'); // Output: InvalidTypeError: Property "age" should be of type "number"
parseAndValidateJSON('{name: "John", age: 30}'); // Output: SyntaxError: Unexpected token n in JSON at position 1
parseAndValidateJSON('{"name": "John", "age": 30, }'); // Output: SyntaxError: Unexpected token } in JSON at position ...

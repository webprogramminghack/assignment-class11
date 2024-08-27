# JSON Parsing with Custom Error Handling in JavaScript

## Objective

The objective of this assignment is to learn how to handle errors during JSON parsing in JavaScript. You will implement custom error classes, use `try...catch` blocks to catch and handle errors, and differentiate between various types of errors using the `instanceof` operator.

## Instructions

### Step 1: Implement the `MissingPropertyError` Class

Create a custom error class called `MissingPropertyError` that:

- Extends the built-in `Error` class.
- Accepts a `message` parameter.
- Sets the `name` property of the error to `"MissingPropertyError"`.

### Step 2: Implement the `InvalidTypeError` Class

Create a custom error class called `InvalidTypeError` that:

- Extends the built-in `Error` class.
- Accepts a `message` parameter.
- Sets the `name` property of the error to `"InvalidTypeError"`.

### Step 3: Implement the `parseAndValidateJSON` Function

Create a function `parseAndValidateJSON` that:

- Accepts a JSON string as a parameter.
- Uses `JSON.parse` to parse the JSON string.
- Validates that the parsed object contains the properties `name` and `age`.
- Checks that `name` is a string and `age` is a number.
- Throws a `MissingPropertyError` if a required property is missing.
- Throws an `InvalidTypeError` if a property has the wrong type.
- Uses a `try...catch` block to handle errors.
- Logs appropriate error messages based on the error type.

### Initial Code

```javascript
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
```

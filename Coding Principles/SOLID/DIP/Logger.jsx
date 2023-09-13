//

// The Component component accepts a logger function as a prop,
// allowing you to inject different logging implementations.
// This adheres to DIP by depending on abstractions (functions)
// rather than concrete implementations.

//

function Logger(message) {
  console.log(`Logging: ${message}`);
}

export default Logger;

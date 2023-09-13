# Factory Method Pattern 🏭

The Factory Method pattern is a creational design pattern that defines an interface for creating objects but allows subclasses to alter the type of objects that will be created. It provides a way to create objects without specifying their exact class.

**Key Characteristics:**

- Defines an abstract interface for creating objects.
- Subclasses implement the Factory Method to produce objects of specific types.
- Provides flexibility in object creation by deferring instantiation decisions to subclasses.

**Use Cases:**

- Creating objects when the exact class may vary depending on runtime conditions.
- Implementing object creation in a way that promotes loose coupling.

**Example:**
In a JavaScript application, you can create a factory method for generating API clients:

```javascript
class ApiClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  // Common methods for interacting with the API
}

class ApiClientFactory {
  static create(type) {
    if (type === "REST") {
      return new ApiClient("https://api.example.com/rest");
    } else if (type === "GraphQL") {
      return new ApiClient("https://api.example.com/graphql");
    }
  }
}

const restApiClient = ApiClientFactory.create("REST");
const graphqlApiClient = ApiClientFactory.create("GraphQL");
```

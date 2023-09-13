# Observer (Publish-Subscribe) Pattern 🔍

The Observer pattern, also known as the Publish-Subscribe pattern, defines a one-to-many dependency between objects. When one object (the subject) changes its state, all its dependents (observers) are notified and updated automatically.

**Key Characteristics:**

- Subjects maintain a list of observers and notify them of state changes.
- Observers subscribe to specific events or changes of interest.
- Promotes loose coupling between subjects and observers.

**Use Cases:**

- Implementing event handling and notification systems.
- Building components that react to changes in data or state.

**Example:**
In a React application, you can use the Observer pattern to handle state changes and re-render components:

```javascript
// React Example
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach((observer) => observer.update());
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`${this.name} has been updated.`);
  }
}

const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify(); // Outputs: "Observer 1 has been updated." and "Observer 2 has been updated."
```

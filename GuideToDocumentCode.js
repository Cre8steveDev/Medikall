// This file is to serve as a boiler plate for how to
// Properly document Typescript/Javascript code

// 1. A Function
/**
 * Calculates the sum of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function calculateSum(a, b) {
  return a + b;
}

// A React Functional Component
/**
 * A simple greeting component.
 *
 * @param {Object} props - Component props.
 * @param {string} props.name - The name of the person to greet.
 * @returns {JSX.Element} A greeting message.
 */
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// A Function that Has Multiple Parameters
/**
 * A simple greeting component.
 *
 * @param {Object} props - Component props.
 * @param {string} props.name - The name of the person to greet.
 * @returns {JSX.Element} A greeting message.
 */
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// A Function that has multiple parameters
/**
 * Calculates the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the rectangle with the appropriate unit.
 */
function calculateArea(width, height, unit) {
  const area = width * height;
  return `${area} ${unit}²`;
}

// React Class Component
/**
 * A simple counter component.
 *
 * @param {Object} props - Component props.
 * @param {number} props.initialCount - The initial count.
 * @returns {JSX.Element} A counter with increment and decrement buttons.
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }

  increment = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  decrement = () => {
    this.setState((state) => ({ count: state.count - 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

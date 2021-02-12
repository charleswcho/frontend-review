import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/prism';

const scrollTo = (id) => {
  document.querySelector(`#${id}`).scrollIntoView();
};

const JavascriptReview = () => (
  <>
    <div className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
      Top
    </div>
    <div id="index" className="index">
      <h1>Index</h1>

      <div onClick={() => scrollTo('values')}>1. Values</div>
      <div onClick={() => scrollTo('functions')}>3. Functions</div>
      <div onClick={() => scrollTo('data')}>4. Data</div>
      <div onClick={() => scrollTo('higher-order-functions')}>
        5. Higher Order Functions
      </div>
      <div onClick={() => scrollTo('objects')}>
        6. The Secret Life of Objects
      </div>
      <div onClick={() => scrollTo('errors')}>8. Bugs and Errors</div>
      <div onClick={() => scrollTo('regex')}>9. Regular Expressions</div>
      <div onClick={() => scrollTo('async')}>11. Asynchronous Programming</div>
      <div onClick={() => scrollTo('browser')}>
        13. Javascript and the Browser
      </div>
      <div onClick={() => scrollTo('events')}>15. Handling Events</div>
    </div>
    <h1 id="values">1. Values</h1>
    <p>number, string, Boolean, undefined / null / NaN*</p>
    <p>*Basic values are all immutatable and pass by value</p>
    <p>*Can't update strings but can access them</p>
    <br />
    <p>short-circuit evaluation</p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`console.log(null || 'user')    // → user
console.log('Agnes' || 'user') // → Agnes
console.log(false && 'user')   // → false`}
    </SyntaxHighlighter>
    <h1 id="functions">3. Functions</h1>
    <p>
      <i>scope</i> - the part of the program which the binding is visible
    </p>
    <p>
      <strong>var</strong> has function scoping
    </p>
    <p>
      <strong>let</strong> and <strong>const</strong> have block scoping
    </p>
    <p>
      Each block creates a new scope. Parameters and bindings declared in a
      given scope are local and not visible from the outside. Bindings declared
      with var behave differently—they end up in the nearest function scope or
      the global scope.
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40}`}
    </SyntaxHighlighter>
    <h2>Declaration notation</h2>
    <p>function variable binding does not hoist</p>
    <p>
      function <i>declaration</i> does
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}`}
    </SyntaxHighlighter>
    <h2>Closure</h2>
    <p>
      This feature—being able to reference a specific instance of a local
      binding in an enclosing scope—is called closure. A function that
      references bindings from local scopes around it is called a closure.
    </p>
    <h1 id="data">4. Data</h1>
    <h2>Rest Parameters</h2>
    <p>Allow for a function to accept any number of arguments</p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9}`}
    </SyntaxHighlighter>
    <p>Can call a function with an array of arguments</p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7`}
    </SyntaxHighlighter>
    <h1 id="higher-order-functions">5. Higher Order Functions</h1>
    <p>
      Functions that operate on other functions, either by taking them as
      arguments or by returning them
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true`}
    </SyntaxHighlighter>
    <h2>Reduce</h2>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`arr.reduce(callback(accumulator, currentValue[, index[, array]]) {
  // return result from executing something for accumulator or currentValue
}[, initialValue]);

[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue
})`}
    </SyntaxHighlighter>
    <h2>Character codes</h2>
    <p>http://www.asciitable.com/</p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`const codes = '09AZaz';

for (let i = 0; i < codes.length; i++) {
  console.log(codes.charCodeAt(i));
}

// 0-9 48-57
// A-Z 65-90
// a-z 97-122`}
    </SyntaxHighlighter>
    <h1 id="objects">6. The Secret Life of Objects</h1>
    <h2>prototype</h2>
    <p>
      A prototype is another object that is used as a fallback source of
      properties. When an object gets a request for a property that it does not
      have, its prototype will be searched for the property, then the
      prototype’s prototype, and so on.
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`console.log(Object.getPrototypeOf({}) ==
            Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null`}
    </SyntaxHighlighter>
    <p>
      The new object’s prototype will be the object found in the prototype
      property of the constructor.
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`function Animal(age) {
  this.age = age;
}

Animal.prototype.eat = function() {
  console.log('Eating');
}

function Snake(age, danger) {
  Animal.call(this, age);
  this.danger = danger;
}

Snake.prototype = new Animal;

Snake.prototype.attack = function() {
  console.log('Attacking! Danger', this.danger);
}

const a = new Animal(5);

console.log(a.age);
a.eat();

const s = new Snake(4, 10);

console.log(s.age);
console.log(s.danger);
s.attack();
s.eat();

console.log(Snake.prototype)

// 5
// Eating
// 4
// 10
// Attacking! Danger 10
// Eating
// Animal { a: undefined, attack: [Function] }`}
    </SyntaxHighlighter>
    <h2>Polymorphism</h2>
    <p>
      When a piece of code is written to work with objects that have a certain
      interface—in this case, a toString method—any kind of object that happens
      to support this interface can be plugged into the code, and it will just
      work. This technique is called polymorphism. Polymorphic code can work
      with values of different shapes, as long as they support the interface it
      expects.
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`const s = '123';
const arr = ['1', '2', '3'];
const m = new Map([['a', '1'], ['b', '2'], ['c', '3']]);

for (let c of s) {
  console.log(c);
}

for (let el of arr) {
  console.log(el);
}

for (let [_, val] of m) {
  console.log(val);
}

// 1, 2, 3`}
    </SyntaxHighlighter>
    <h2>Iterators</h2>
    <p>
      The object given to a for/of loop is expected to be iterable. This means
      it has a method named with the Symbol.iterator symbol (a symbol value
      defined by the language, stored as a property of the Symbol function).
      When called, that method should return an object that provides a second
      interface, iterator. This is the actual thing that iterates. It has a next
      method that returns the next result. That result should be an object with
      a value property that provides the next value, if there is one, and a done
      property, which should be true when there are no more results and false
      otherwise.
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y === this.matrix.height) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y)
    };

    this.x++;

    if (this.x === this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}`}
    </SyntaxHighlighter>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};`}
    </SyntaxHighlighter>
    <h1 id="errors">8. Bugs and Errors</h1>
    <h2>Strict mode</h2>
    <p>
      Protects the global scope from write and makes the this binding undefined
      in functions that are not called as methods. Strict mode does a few more
      things. It disallows giving a function multiple parameters with the same
      name and removes certain problematic language features entirely.
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}

canYouSpotTheProblem();
// → ReferenceError: counter is not defined`}
    </SyntaxHighlighter>
    <h2>Simple testing setup</h2>
    <p>Karma, Mocha lite</p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`function test(label, body) {
  if (!body()) console.log(\`Failed: \${label}\`);
}

test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO";
});`}
    </SyntaxHighlighter>
    <h1 id="regex">9. Regular Expressions</h1>
    <h2>Character groups</h2>
    <p>
      /abc/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A sequence of characters
      <br />
      /[abc]/&nbsp;&nbsp;&nbsp;&nbsp; Any character from a set of characters
      <br />
      /[^abc]/&nbsp;&nbsp; Any character not in a set of characters
      <br />
      /[0-9]/&nbsp;&nbsp;&nbsp;&nbsp; Any character in a range of characters
      <br />
      \d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Any
      digit character
      <br />
      \w&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; An
      alphanumeric character (“word character”)
      <br />
      \s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Any
      whitespace character (space, tab, newline, and similar)
      <br />
      \D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A
      character that is not a digit
      <br />
      \W&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A
      nonalphanumeric character
      <br />
      \S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A
      nonwhitespace character
      <br />
      .&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Any character except for newline
      <br />
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`console.log(/[0123456789]/.test("in 1992"));
// → true
console.log(/[0-9]/.test("in 1992"));
// → true`}
    </SyntaxHighlighter>
    <h2>The Date Class</h2>
    <p>
      Timestamps are stored as the number of milliseconds since the start of
      1970, in the UTC time zone. This follows a convention set by “Unix time”,
      which was invented around that time. You can use negative numbers for
      times before 1970. The getTime method on a date object returns this
      number. It is big, as you can imagine.
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`console.log(new Date(2013, 11, 19).getTime());
// → 1387407600000
console.log(new Date(1387407600000));
// → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)`}
    </SyntaxHighlighter>
    <h2>The Replace Method</h2>
    <p>
      String values have a replace method that can be used to replace part of
      the string with another string.
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`console.log("papa".replace("p", "m"));
// → mapa`}
    </SyntaxHighlighter>
    <p>
      The first argument can also be a regular expression, in which case the
      first match of the regular expression is replaced. When a g option (for
      global) is added to the regular expression, all matches in the string will
      be replaced, not just the first.
    </p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`console.log("Borobudur".replace(/[ou]/, "a"));
// → Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar`}
    </SyntaxHighlighter>
    <h1 id="async">11. Asynchronous Programming</h1>
    <h2>Promise</h2>
    <p>Simple promise implementation</p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`class MyPromise {
  constructor(init) {
    this.listeners = [];

    init(this.resolve, this.reject);
  }

  resolve = (val) => {
    let prevVal = val;

    this.listeners.forEach(listener => {
      prevVal = listener(prevVal);
    });
  }

  reject = (err) => {
    this.catchError(err);
  }

  then = (listener) => {
    this.listeners.push(listener);

    return this;
  }

  catchError = (err) => {
    console.error(err);
  }
}`}
    </SyntaxHighlighter>
    <h2>Debounce</h2>
    <p>Add a debounce to any function</p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`function debounce(fn, ms) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(null, args);
    }, ms);
  }
}`}
    </SyntaxHighlighter>
    <h1 id="async">11. Asynchronous Programming</h1>
    <h2>Promise</h2>
    <p>Simple promise implementation</p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`class MyPromise {
  constructor(init) {
    this.listeners = [];

    init(this.resolve, this.reject);
  }

  resolve = (val) => {
    let prevVal = val;

    this.listeners.forEach(listener => {
      prevVal = listener(prevVal);
    });
  }

  reject = (err) => {
    this.catchError(err);
  }

  then = (listener) => {
    this.listeners.push(listener);

    return this;
  }

  catchError = (err) => {
    console.error(err);
  }
}`}
    </SyntaxHighlighter>

    <h1 id="browser">13. Javascript and the Browser</h1>

    <h2>The Web</h2>

    <p>
      To become part of the Web, all you need to do is connect a machine to the
      Internet and have it listen on port 80 with the HTTP protocol so that
      other computers can ask it for documents. Each document on the Web is
      named by a Uniform Resource Locator (URL), which looks something like
      this:
    </p>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`  http://eloquentjavascript.net/13_browser.html
 |      |                      |               |
 protocol       server               path`}
    </SyntaxHighlighter>

    <h2>HTML</h2>

    <h3>URL encoding</h3>

    <p>{'< → &lt;'}</p>
    <p>{'> → &gt;'}</p>

    <h1 id="events">15. Handling Events</h1>

    <h2>Creating and removing listeners</h2>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`<button>Act-once button</button>
<script>
  let button = document.querySelector("button");
  function once() {
    console.log("Done.");
    button.removeEventListener("click", once);
  }
  button.addEventListener("click", once);
</script>`}
    </SyntaxHighlighter>

    <h2>Propagation (event bubbling)</h2>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`<p>A paragraph with a <button>button</button>.</p>
<script>
  let para = document.querySelector("p");
  let button = document.querySelector("button");
  para.addEventListener("mousedown", () => {
    console.log("Handler for paragraph.");
  });
  button.addEventListener("mousedown", event => {
    console.log("Handler for button.");
    if (event.button == 2) event.stopPropagation();
  });
</script>`}
    </SyntaxHighlighter>

    <h2>Delegation</h2>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`<button>A</button>
<button>B</button>
<button>C</button>
<script>
  document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.textContent);
    }
  });
</script>`}
    </SyntaxHighlighter>

    <h2>Events</h2>

    <h3>Key Events</h3>

    <ul>
      <li>keydown</li>
      <li>keyup</li>
    </ul>

    <h4>Related event properties</h4>

    <ul>
      <li>
        <i>key </i>: holds a string that, for most keys, corresponds to the
        thing that pressing that key would type.
      </li>
    </ul>

    <h3>Pointer Events</h3>

    <ul>
      <li>click</li>
      <li>dblclick</li>
      <li>mousedown</li>
      <li>mouseup</li>
      <li>mousemove</li>
    </ul>

    <h4>Related event properties</h4>

    <ul>
      <li>
        <i>clientX</i>: event’s coordinates (in pixels) relative to the top-left
        corner of the window
      </li>
      <li>
        <i>clientY</i>
      </li>
      <li>
        <i>pageX</i>: relative to the top-left corner of the whole document
        (which may be different when the window has been scrolled).
      </li>
      <li>
        <i>pageY</i>
      </li>
    </ul>

    <h3>Scroll Events</h3>

    <ul>
      <li>scroll</li>
    </ul>

    <h4>Related event properties</h4>

    <ul>
      <li>
        <i>innerHeight</i>: the height of the window
      </li>
      <li>
        <i>innerWidth</i>
      </li>
      <li>
        <i>scrollHeight</i>: the total scrollable height
      </li>
      <li>
        <i>scrollWidth</i>
      </li>
    </ul>

    <h3>Focs Events</h3>

    <ul>
      <li>focus</li>
      <li>blur</li>
    </ul>

    <h3>Load Events</h3>

    <ul>
      <li>load</li>
      <li>beforeunload</li>
    </ul>

    <h2>Web workers</h2>

    <p>squareworker.js</p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`addEventListener("message", event => {
  postMessage(event.data * event.data);
});`}
    </SyntaxHighlighter>
    <p>index.js</p>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`let squareWorker = new Worker("code/squareworker.js");
squareWorker.addEventListener("message", event => {
  console.log("The worker responded:", event.data);
});
squareWorker.postMessage(10);
squareWorker.postMessage(24);`}
    </SyntaxHighlighter>
  </>
);

export default JavascriptReview;

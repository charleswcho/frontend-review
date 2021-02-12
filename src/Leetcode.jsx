import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const LeetCode = () => (
  <>
    <h1>Numbers</h1>

    <h2>common techniques</h2>

    <h3>iterate through number</h3>

    <p>Save O(n) time instead of converting to string</p>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`function printNumber(num) {
    while (num >= 1) {
      const remainder = num % 10;

      console.log(remainder);

      num = Math.floor(num / 10);
    }
}

printNumber(123); // 3, 2, 1`}
    </SyntaxHighlighter>

    <h1>Arrays</h1>

    <h2>common techniques</h2>

    <h3>calculate middle index</h3>

    <p>Used commonly in binary search</p>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`Math.floor((leftIdx + rightIdx) / 2);`}
    </SyntaxHighlighter>

    <h3>Constant space hashing</h3>

    <p>Used in string matching (anagrams)</p>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`const alpha = new Array(26);`}
    </SyntaxHighlighter>

    <h3>Search optimization with extra data</h3>

    <p>
      Used in search problems where you need an index. Saving the first
      occurance idx saves another iteration
    </p>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`for (let i = 0; i < s.length; i++) {
  const c = s[i];
  
  if (freq[c]) {
    freq[c].count++;
  } else {
    freq[c] = { count: 1, i };
  }
}`}
    </SyntaxHighlighter>

    <h2>common methods</h2>

    <h3>splice(start, deleteCount, insertionItem?)</h3>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]`}
    </SyntaxHighlighter>

    <h1>Trees</h1>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Tree: a
//     b   c
const tree = new TreeNode('a', new TreeNode('b'), new TreeNode('c'));`}
    </SyntaxHighlighter>

    <h2>common algorithms</h2>

    <h3>Depth first search recursive</h3>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`function DFS(root) {
  if (!root) {
    return;
  }

  DFS(root.left);

  console.log(root.val);

  DFS(root.right);
};

DFS(tree) // b, a, c`}
    </SyntaxHighlighter>

    <h3>Depth first search iterative (stack)</h3>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`function DFS(root) {
  const s = [];
  let curr = root;

  while (curr || s.length) {
    while (curr) {
      s.push(curr);
      curr = curr.left;
    }

    curr = s.pop();

    console.log(curr.val);

    curr = curr.right;
  }
};

DFS(tree) // b, a, c`}
    </SyntaxHighlighter>

    <h3>Breath first search with level tracking</h3>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`// Tree: a
//     b   c
const tree = new TreeNode('a', new TreeNode('b'), new TreeNode('c'));

function BFS(root) {
  const q = [root, null];
  
  while (q.length) {
    const curr = q.shift();

    if (!curr) {
      if (!q.length) {
        break;
      }
      
      console.log('New Level');

      q.push(null);
      continue;
    }

    console.log(curr.val);
    
    if (curr.left) 
      q.push(curr.left);
   
    if (curr.right) 
      q.push(curr.right);
  }
};

BFS(tree) // a, 'New Level', b, c`}
    </SyntaxHighlighter>

    <h3>Binary search</h3>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`// Tree: 2
//     1   3
const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));

function search(root, val) {
  let result = null;
  
  function bSearch(node) {
    if (!node) {
      return;
    }
    
    if (node.val < val) {
      bSearch(node.right);
    } else if (node.val > val) {
      bSearch(node.left);
    } else {
      result = node;
      return;
    }
  }
  
  bSearch(root);
  
  return tree;
};

search(tree, 2) // TreeNode(val = 2)`}
    </SyntaxHighlighter>

    <h1>Graphs</h1>

    <h2>common algorithms</h2>

    <SyntaxHighlighter language="javascript" style={docco}>
      {`// Agacency List: a → b → c

const list = {
  a: ['b'],
  b: ['c'],
}

function BFS(list) {
  const firstKey = Object.keys(list)[0];
  const queue = [firstKey];

  while (queue.length) {
    const currVertex = queue.shift();

    console.log(currVertex);

    if (list[currVertex]) {
      list[currVertex].forEach(vertex => {
        queue.push(vertex);
      });
    }
  }
}

BFS(list) // a, b, c`}
    </SyntaxHighlighter>
  </>
);

export default LeetCode;

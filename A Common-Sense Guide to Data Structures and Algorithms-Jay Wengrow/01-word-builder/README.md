# World Builder — Learning Notes & Solution Progression

## Context

While reading **_A Common-Sense Guide to Data Structures and Algorithms: Level Up Your Core Programming Skills_** by **Jay Wengrow**, I came across the exercise **“World Builder”**.

Although the book provides a solution, I intentionally **did not jump directly to it**. Instead, I decided to attempt the problem myself to reason through the logic step by step.

This exercise turned out to be especially valuable because it **clarified my fundamentals around `for` loops**, loop boundaries, index handling, and how small logical mistakes can significantly change program behavior.

---

## Problem Summary (World Builder)

Given an array of characters, build all possible two-character “words” by combining:

- The current character
- With every other character **except itself**

### Example Input

```js
["a", "b", "c", "d"]
```

### Conceptual Output

- `"a"` → `"ab"`, `"ac"`, `"ad"`
- `"b"` → `"ba"`, `"bc"`, `"bd"`
- `"c"` → `"ca"`, `"cb"`, `"cd"`
- `"d"` → `"da"`, `"db"`, `"dc"`

---

## Approach Taken

Instead of aiming for the final solution immediately, I worked through **multiple iterations**, each refining my understanding of:

- Loop direction (forward vs backward)
- Nested loop relationships
- Loop termination conditions
- Avoiding invalid index access
- Separating concerns instead of over-optimizing early

Each file represents a **learning checkpoint**, not just a code change.

---

## File Structure & Progression

```
.
├── step-1-trial-01.js
├── step-2-trial-02.js
├── step-3-trial-03.js
└── step-4-trial-04.js
```

### `step-1-trial-01.js`

- First raw attempt
- Focused on getting something working
- Contained redundant logic and edge-case issues

### `step-2-trial-02.js`

- Improved loop structure
- Better separation between left-side and right-side traversal
- Reduced unnecessary operations

### `step-3-trial-03.js`

- Experimented with combining loops
- Helped uncover misunderstandings about:
  - Loop conditions
  - The comma operator vs logical operators
- Important learning step even though the approach was flawed

### `step-4-trial-04.js` 

- Final and most efficient version
- Clean, readable, and logically correct
- Uses clear nested loop logic
- Avoids premature optimization
- Matches the intent of the problem precisely

---

## Key Learnings

- Clarity beats cleverness in loop design
- Independent traversals should usually remain independent
- The comma operator (`,`) is **not** a logical AND
- Nested loops are easier to reason about when each loop has a single responsibility
- Writing incorrect solutions is still progress if you understand *why* they’re incorrect

---

## Why This Exercise Mattered

This was less about solving the **World Builder** problem and more about:

- Strengthening my mental model of `for` loops
- Understanding how JavaScript evaluates loop conditions
- Becoming more comfortable reasoning through index-based problems

Trying before looking at the solution made the learning stick.
# Data Structures and Algorithms with JavaScript: A Comprehensive Curriculum

## Statement of Need

This `README.md` serves as a comprehensive overview of the Data Structures and Algorithms (DSA) curriculum, specifically tailored for implementation and understanding using JavaScript. The curriculum aims to equip learners with essential programming and problem-solving skills, ranging from foundational JavaScript logic to advanced algorithmic techniques. This document provides a structured textual guide to the course content, mirroring the logical progression and depth of the interactive web application it represents.

## Curriculum Overview

The curriculum is meticulously organized into sequential modules, termed "Videos," each designed to progressively build understanding in DSA. Each module focuses on specific concepts and practical problem-solving, with a strong emphasis on hands-on application.

The distribution of key learning items (questions and core conceptual topics) across the major modules is as follows:

- **V1: Basic Logic:** 9 items
- **V2: Conditionals:** 6 items
- **V3: Loops:** 15 items
- **V4: Patterns:** 2 items
- **V5: Array:** 9 items
- **V6: String:** 7 items
- **V7: OOP:** 5 items
- **V8: Adv. Array:** 8 items
- **V9: Sorting Pt.1:** 3 items
- **V10: Sorting Pt.2:** 2 items
- **V11: Cyclic Sort:** 3 items
- **Binary Search:** 6 items
- **Hashing:** 8 items
- **Linked List:** 7 items
- **Queue & Stack:** 6 items
- **Recursion & Backtracking:** 13 items
- **Binary Tree:** 9 items
- **BST:** 3 items
- **Graph:** 5 items

---

## Module Details

### Video 01: Basic Logic in JS

This introductory module lays the groundwork by focusing on the fundamental building blocks of JavaScript programming, including variables, operators, and basic mathematical operations.

- **Q1. Sum of two integer.**
  - Understanding how to perform basic arithmetic addition. Example: `num1 + num2`
- **Q2. Relation between integer & string.**
  - Exploring JavaScript's type coercion and how strings and numbers interact, especially with the `+` operator. Example: `5 + "hello"` (concatenation) vs. `5 + parseInt("10")` (numeric addition).
- **Q3. Sum and message.**
  - Combining numerical results with textual output for user-friendly messages. Example: `console.log("The sum is: " + (num1 + num2))`
- **Q3. Accept and print the answer.**
  - Learning to take input from the user (e.g., via `prompt()`) and display results (e.g., via `alert()` or console).
- **Q4. Swap two variables by three methods.**
  - Investigating different techniques for exchanging the values of two variables, such as using a temporary variable, arithmetic operations, or ES6 destructuring.

#### Operators and their questions

A detailed exploration of various JavaScript operators: arithmetic, assignment, comparison, logical, and bitwise operators, along with practical questions to solidify understanding.

#### Math functions

Introduction to the built-in JavaScript `Math` object, providing access to common mathematical constants (like `Math.PI`) and functions (like `Math.sqrt()`, `Math.pow()`, `Math.random()`).

#### Math problems:

- **Q5. calculate area and perimeter of rectangle.**
  - Applying formulas: Area = `length * width`, Perimeter = `2 * (length + width)`.
- **Q6. Area of triangle by heron's formula.**
  - Implementing Heron's formula: For a triangle with sides a, b, c, and semi-perimeter s = (a+b+c)/2, Area = `sqrt(s*(s-a)*(s-b)*(s-c))`.
- **Q7. Circumference of circle.**
  - Calculating circumference: Circumference = `2 * π * r` (or `2 * Math.PI * radius`).

---

### Video 02: Conditional Statement

This module introduces control flow mechanisms using conditional statements, allowing programs to make decisions and execute different blocks of code based on specific conditions.

- **Q8. Valid user.**
  - Implementing logic to check user credentials or permissions, often involving `if-else` statements.
- **Q9. Shop discount.**
  - Applying discounts based on criteria like purchase amount or customer type, demonstrating practical use of conditional logic.
- **Q10. Electricity Bill.**
  - Calculating electricity bills based on tiered consumption rates, requiring multiple conditional checks.
- **Q11. BDT/INR Denomination.**
  - Breaking down a currency amount into the minimum number of notes/coins, often using a series of conditional checks or loops with division/modulo.

#### Ternary operator, switch and one case handling multiple values

Exploring alternative conditional structures:

- **Ternary operator:** A concise way to write simple `if-else` statements. Example: `condition ? valueIfTrue : valueIfFalse`.
- **Switch statement:** Handling multiple possible values for a single expression efficiently. Includes understanding `case`, `break`, and `default`.
- **One case handling multiple values:** Using fall-through in `switch` statements (by omitting `break`) to execute the same code block for multiple cases.

---

### Video 03: Loop

This module covers different types of loops (`for`, `while`, `do-while`), which are essential for performing repetitive tasks and iterating over collections of data.

#### Loop

General introduction to the concept of loops and their importance in programming for automation and repetition.

#### for Loop

Focuses on the `for` loop, a common structure for iterating a specific number of times or over array elements.

- **Q12. Print n numbers of 'hello worlds'.**
  - Basic `for` loop usage for repeating an action `n` times.
- **Q13. One to n numbers and vice versa.**
  - Using `for` loops to print sequences in ascending (1 to n) and descending (n to 1) order.
- **Q14. Sum of n natural numbers and factorial of number.**
  - Calculating sum: `Σi (from i=1 to n) = n*(n+1)/2` (can be done with a loop or formula).
  - Calculating factorial: `n! = n * (n-1) * ... * 1` (typically using a loop).
- **Q15. Factors of number.**
  - Finding all divisors of a given number by iterating up to the number (or its square root for optimization).
- **Q16. Prime numbers.**
  - Determining if a number is prime by checking for factors, and finding primes within a range.

#### while Loop

Explores the `while` loop, which continues as long as a specified condition is true. Useful when the number of iterations is not known beforehand.

- **Q17. Sum of digits.**
  - Calculating the sum of individual digits of a number, often using modulo and division operations within a `while` loop.
- **Q18. Reverse of number.**
  - Reversing the order of digits in a number.
- **Q19. strong number.**
  - Identifying strong numbers (sum of factorials of digits equals the number itself). This combines loops and factorial calculation.

#### do-while Loop

Covers the `do-while` loop, which is similar to `while` but guarantees the loop body executes at least once before checking the condition.

- **Q20. Repeat hello.**
  - A simple demonstration of `do-while` loop's guaranteed first execution.
- **Q21. dummy/sastra calculator.**
  - Creating a simple menu-driven calculator that continues operations until the user chooses to exit, a good use case for `do-while`.
- **Q22. Guess the number.**
  - Implementing a number guessing game where the user repeatedly guesses until they find the correct number.

---

### Video 04: Pattern Programming

This module explores the creative use of nested loops to generate various textual and numerical patterns (e.g., stars, numbers arranged in specific shapes). It's excellent practice for mastering loop control and logic.

#### Nested Loop

Understanding how loops within loops (nested loops) work. The outer loop controls rows, and the inner loop typically controls columns or elements within each row for pattern generation.

#### Pattern Questions

A variety of problems involving printing different kinds of patterns, such as:

- Right-angled triangles (stars, numbers)
- Inverted triangles
- Pyramids
- Diamonds
- Hollow patterns

These questions help build strong logical thinking and control over loop structures.

---

### Video 05: Array

This module introduces Arrays, a fundamental linear data structure used for storing an ordered collection of elements. JavaScript arrays are dynamic and can hold elements of mixed types.

#### Array

A general overview of what arrays are, their purpose (storing multiple values in a single variable), and basic terminology (elements, index).

#### Introduction

More detailed introduction to arrays in JavaScript, including how to declare and initialize them.

#### Fixed and Dynamic size Array

Discussing the nature of arrays in JavaScript, which are dynamically sized (can grow or shrink) unlike fixed-size arrays in some other languages.

#### accept value from user and assign in the Array

Techniques for populating arrays with data provided by the user, often involving loops and input methods.

- **Q23. sum of Array's element.**
  - Calculating the total sum of all numerical elements within an array, typically using a loop to iterate through elements.
- **Q24. max element from Array.**
  - Finding the largest element present in an array by iterating and comparing elements.
- **Q25. second max element from Array.**
  - Identifying the second largest element, which requires careful comparison and tracking of both the largest and second largest values.
- **Q26. reverse the Array.**
  - Reversing the order of elements within an array, either by creating a new reversed array or by swapping elements in-place.
- **Q27. All zeroes to left and all ones to right.**
  - Reordering array elements (typically 0s and 1s) such that all zeros are grouped to the left and all ones to the right, often using a two-pointer approach.

---

### Video 06: String

This module covers Strings, which are sequences of characters. It explores JavaScript's built-in string properties and methods for manipulation and analysis.

#### Introduction of string

Defining strings in JavaScript, their immutable nature (meaning string methods return new strings rather than modifying the original), and how they are created (literals, `String` constructor).

#### Methods of string

Exploring a variety of commonly used built-in string methods, such as:

- `length` property
- `charAt(index)`, `charCodeAt(index)`
- `substring(startIndex, endIndex)`, `slice(startIndex, endIndex)`
- `indexOf(searchValue)`, `lastIndexOf(searchValue)`
- `toUpperCase()`, `toLowerCase()`
- `trim()`, `split(separator)`, `join(separator)` (for arrays of strings)
- `replace(searchValue, newValue)`, `includes(searchValue)`

- **Q28. print each character on new line.**
  - Iterating through a string (e.g., using a `for` loop or `for...of`) and printing each character on a separate line.
- **Q29. print in reverse order.**
  - Reversing a string character by character and printing the result.
- **Q30. check if string is pallindrom or not.**
  - Determining if a string reads the same forwards and backward (e.g., "madam", "level"). This often involves comparing the string with its reversed version.
- **Q31. Toggle each character.**
  - Changing the case of each character in a string (e.g., lowercase to uppercase, and uppercase to lowercase).
- **Q32. Frequency of each character.**
  - Counting the occurrences of each unique character within a string, often using an object (hash map) to store frequencies.

---

### Video 07: OOP (class and object)

This module introduces the core concepts of Object-Oriented Programming (OOP) in JavaScript, focusing on classes (introduced in ES6) and objects, which are fundamental to building more complex and organized applications.

#### class and object

Understanding how classes serve as blueprints for creating objects. Objects are instances of classes, encapsulating data (properties) and behavior (methods).

#### constructor

Learning about the special `constructor` method within a class, which is automatically called when a new object is created (instantiated) and is used for initializing the object's properties.

#### prototype object

Exploring JavaScript's unique prototype-based inheritance model. Understanding that objects inherit properties and methods from their prototype. While ES6 classes provide syntactic sugar, prototypes are still at the core.

#### this keyword

Gaining a clear understanding of the `this` keyword's context and how its value is determined in different JavaScript scenarios (e.g., within object methods, constructors, event handlers, arrow functions).

#### design problems

Applying OOP principles (encapsulation, inheritance, polymorphism - though JavaScript's take is unique) to solve practical software design challenges. This involves thinking about how to model real-world entities or system components as objects and classes for modular, reusable, and maintainable code.

---

## Advanced Topics

This section marks the transition to more advanced Data Structures and Algorithms. These topics are crucial for tackling complex problems and are frequently encountered in software engineering interviews and development.

---

### Video 08: Advance Array problems

This module delves into more complex array manipulation techniques and algorithms, crucial for optimizing performance and solving challenging problems often encountered in technical interviews.

- **Q33. Left and Right rotation by k element.**
  - Implementing efficient algorithms for rotating array elements to the left or right by a specified number of positions `k`. Techniques might include using a temporary array, reversing segments, or Juggling Algorithm.
- **Q34. Remove duplicates from the sorted Array.**
  - Optimizing sorted arrays by efficiently removing redundant elements in-place, typically using a two-pointer approach.
- **Q35. Merge sorted Array.**
  - Combining two distinct sorted arrays into a single, comprehensive sorted array. This can be done by creating a new array or merging in-place if one array has enough capacity.
- **Q36. Best time to buy and sell stocks.**
  - Developing strategies to find the maximum profit that can be achieved from buying and selling a single stock (or multiple transactions in variations of the problem). Often involves iterating through prices and tracking minimum buy price and maximum profit.
- **Q37. Sort the color.**
  - Solving the "Dutch National Flag" problem: sorting an array containing only 0s, 1s, and 2s in-place and in a single pass, typically using a three-pointer approach.
- **Q38. Maximum Subarray/kadane's algorithm.**
  - Finding the contiguous subarray within a one-dimensional array of numbers which has the largest sum. Kadane's algorithm provides an efficient O(n) solution.
- **Q39. Majority Element/Moore's voting algorithm.**
  - Identifying the element that appears more than `⌊ n/2 ⌋` times in an array. Moore's Voting Algorithm is an efficient way to solve this.
- **Q40. Trapping Rain water.**
  - Calculating the maximum amount of water that can be trapped between vertical bars of varying heights represented in an array. This problem can be solved using various approaches, including pre-calculating left/right max heights or using a two-pointer approach.

---

### Video 09: Sorting Algorithm- Part1

This module introduces fundamental comparison-based sorting algorithms. While not always the most efficient for large datasets, they are important for understanding core sorting concepts.

#### Bubble sort

A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. Time complexity: O(n^2).

#### Selection sort

An in-place comparison sorting algorithm. It divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of philanthroPY. Time complexity: O(n^2).

#### Insertion sort

A simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort, but it can be efficient for small datasets or nearly sorted data. Time complexity: O(n^2).

---

### Video 10: Sorting Algorithm- Part2

This module covers more efficient and widely used sorting algorithms, often based on the "divide and conquer" paradigm, leading to better average and worst-case time complexities for large datasets.

#### Quick sort

A highly efficient, in-place, divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. Average time complexity: O(n log n), Worst-case: O(n^2).

#### Merge sort

A stable, divide-and-conquer sorting algorithm. It divides the unsorted list into `n` sublists, each containing one element (a list of one element is considered sorted). Then it repeatedly merges sublists to produce new sorted sublists until there is only one sorted list remaining. Time complexity: O(n log n) in all cases. Requires O(n) auxiliary space.

---

### Video 11: Cyclic sort

This module focuses on Cyclic Sort, an efficient in-place sorting algorithm that is particularly useful for problems involving arrays where numbers are in a specific range (e.g., 1 to N).
The core idea is to place each number at its correct index. If the number `x` is at index `i` but should be at index `x-1` (for 1-based indexing converted to 0-based), swap it with the element at index `x-1`. Repeat until all numbers are correctly placed.

- **Q41. Missing number.**
  - Given an array containing `n` distinct numbers taken from `0, 1, ..., n`, find the one that is missing from the array. Cyclic sort can place numbers at their correct indices, making it easy to find the first index that doesn't match its value.
- **Q42. Find all the disappeared in Array.**
  - Given an array of integers where `1 ≤ a[i] ≤ n` (n = size of array), some elements appear twice and others appear once. Find all the elements from `[1, n]` inclusive that do not appear in this array. Cyclic sort can help place numbers, then iterate to find missing ones.
- **Q43. First positive number.**
  - Given an unsorted integer array, find the smallest missing positive integer (i.e., > 0). This can be adapted using cyclic sort ideas to place positive numbers in their correct positions.

---

### Binary Search

This section thoroughly explores Binary Search, an extremely efficient algorithm for searching in sorted data structures (typically arrays). It works by repeatedly dividing the search interval in half. Time complexity: O(log n).

- **Q44. Binary search.**
  - Implementing the core binary search algorithm to find a target element in a sorted array. Involves maintaining low, high, and mid pointers.
- **Q45. Search Insert position.**
  - Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
- **Q46. Search in rotated sorted Array.**
  - Searching for a target value in a sorted array that has been rotated at an unknown pivot point. This requires a modified binary search to handle the rotation.
- **Q47. Book allocation.**
  - A classic problem where you need to allocate books to students such that the maximum number of pages assigned to a student is minimized. This can be solved using binary search on the answer (the maximum pages).
- **Q48. Koko eating.** (Koko eating bananas)
  - Koko has to eat `N` piles of bananas before the guards come back in `H` hours. Find the minimum integer `K` (eating speed in bananas per hour) such that she can eat all the bananas within `H` hours. Solved by binary searching on possible values of K.
- **Q49. Threshold limit.**
  - Problems that involve finding an optimal threshold value based on certain conditions or constraints, often solvable with binary search on the possible range of threshold values. For example, "Find the smallest divisor such that the sum of division results is less than or equal to a threshold".

---

### Hashing

This section introduces Hashing, a technique used for efficient data storage and retrieval. It involves mapping keys to indices in a hash table using a hash function. In JavaScript, objects and `Map` objects are commonly used to implement hash-based structures.

- **Q50. Print the frequency of each number.**
  - Counting the occurrences of each unique element within an array using a hash map (e.g., a JavaScript object or `Map`) to store elements as keys and their frequencies as values.
- **Q51. Print the unique element.**
  - Identifying and printing elements that appear only once in a collection. This can be done by first finding frequencies using hashing.
- **Q52. Check if sentence is Pangram.**
  - Determining if a given sentence contains every letter of the alphabet at least once. A hash set (or a boolean array for alphabet characters) can be used to track seen letters.
- **Q53. Sort the people.**
  - Given an array of names and an array of corresponding heights, sort the people by their heights in descending order. Hashing can be used to associate names with heights before sorting.
- **Q54. Two sum.**
  - Given an array of integers, find two numbers such that they add up to a specific target sum. Hashing can solve this in O(n) time by storing numbers seen so far and checking if `target - currentNumber` exists in the hash map.
- **Q55. Subarray sum equal to K.**
  - Counting the number of contiguous subarrays whose sum equals a given target `K`. This can be solved efficiently using a hash map to store prefix sums and their frequencies.
- **Q56. Longest Subarray with sum K.**
  - Finding the length of the longest contiguous subarray whose sum equals a given target `K`. Similar to the previous problem, prefix sums and a hash map are useful here.
- **Q57. Longest consecutive sequence.**
  - Finding the length of the longest sequence of consecutive elements in an unsorted array. A hash set can be used to store all numbers for O(1) lookups, then iterate and extend sequences.

---

### Linked List

This section covers Linked Lists, a dynamic linear data structure where elements (nodes) are not stored at contiguous memory locations but are linked using pointers. Each node contains data and a reference (or link) to the next node in the sequence.

#### Implementation

Learning to build a basic Linked List structure from scratch. This typically involves defining a `Node` class (with `data` and `next` properties) and a `LinkedList` class with methods to manage the list (e.g., `head`, `tail`, `size`, `add`, `remove`).

- **Q58. Design Linked List.**
  - Implementing common Linked List operations such as:
    - `get(index)`: Get the value of the index-th node.
    - `addAtHead(val)`: Add a node of value `val` before the first element.
    - `addAtTail(val)`: Append a node of value `val` to the last element.
    - `addAtIndex(index, val)`: Add a node of value `val` before the index-th node.
    - `deleteAtIndex(index)`: Delete the index-th node.
- **Q59. Middle of the Linked List.**
  - Finding the middle node of a singly linked list efficiently, often using the "slow and fast pointer" technique.
- **Q60. Linked List cycle.**
  - Detecting if a given singly linked list contains a cycle (i.e., a node points back to a previous node). Floyd's cycle-finding algorithm (tortoise and hare) is commonly used.
- **Q61. Reverse Linked List.**
  - Reversing the order of nodes in a singly linked list, typically by iterating through the list and changing `next` pointers. Can be done iteratively or recursively.
- **Q62. Delete the node in Linked List.**
  - Deleting a specific node from a singly linked list. The approach varies if you're given the head and the value to delete, or a direct reference to the node to be deleted (and it's not the tail).
- **Q63. Reverse Node in K-Group.**
  - Reversing the nodes of a linked list `k` at a time and returning its modified list. If the number of nodes is not a multiple of `k`, then left-out nodes, in the end, should remain as it is.

---

### Queue and Stack

This section explores Queue (First-In, First-Out - FIFO) and Stack (Last-In, First-Out - LIFO), two fundamental linear data structures with distinct access patterns and numerous applications.

#### Implementation of stack and queue

Learning to build these data structures from scratch.

- **Stack:** Can be implemented using arrays (with `push` and `pop`) or linked lists (adding/removing from the head).
- **Queue:** Can be implemented using arrays (requires careful management of front/rear pointers or shifting elements) or linked lists (adding to tail, removing from head).

- **Q64. Valid parenthesis.**
  - Checking if a string containing only '(', ')', '{', '}', '\[', and '\]' is valid (i.e., all opening brackets are closed by the same type of brackets in the correct order). Stacks are ideal for this.
- **Q65. Implement stack using queue.**
  - Creating a stack's LIFO functionality using one or more queues (which are FIFO). This involves clever manipulation of queue operations.
- **Q66. Implement queue using stack.**
  - Creating a queue's FIFO functionality using one or more stacks (which are LIFO). This typically involves using two stacks.
- **Q67. Next larger element.**
  - For each element in an array, find the first element to its right that is greater than it. If no such element exists, consider it -1. Stacks can be used efficiently here.
- **Q68. Largest Rectangle in histogram.**
  - Given an array of integers representing heights of bars in a histogram, find the area of the largest rectangle that can be formed within the histogram. Stacks can help find the nearest smaller bars to the left and right for each bar.

---

### Recursion and Backtracking

This section covers Recursion, a powerful programming technique where a function calls itself to solve smaller instances of the same problem, and Backtracking, an algorithmic technique for solving problems recursively by trying to build a solution incrementally and abandoning paths that don't work.

- **Q69. print n hello times.**
  - A basic recursive function to demonstrate repetitive tasks by calling itself `n` times with a base case to stop.
- **Q70. print 1-n natural number.**
  - Implement a recursive function to print numbers in ascending order from 1 to `n`.
- **Q71. print n-1 natural number.** (Likely means n down to 1)
  - Implement a recursive function to print numbers in descending order from `n` down to 1.
- **Q72. sum of n natural number.**
  - Calculate the sum of the first `n` natural numbers recursively: `sum(n) = n + sum(n-1)`.
- **Q73. fact of n natural number.**
  - Compute the factorial of a number `n` recursively: `fact(n) = n * fact(n-1)`.
- **Q74. print the sum of digit.**
  - Recursively calculate the sum of the digits of a number: `sumDigits(num) = (num % 10) + sumDigits(Math.floor(num / 10))`.
- **Q75. Fibonacci series (both version).**
  - Implement the Fibonacci sequence (`F(n) = F(n-1) + F(n-2)`) using both a naive recursive approach (which is inefficient due to repeated calculations) and an optimized version (e.g., using memoization/dynamic programming, or an iterative approach for comparison).
- **Q76. Tower of Hanoi.**
  - Solve the classic Tower of Hanoi puzzle using a recursive algorithm.
- **Q77. Josephous problem.** (Josephus problem)
  - Solve the Josephus circle problem (where people are eliminated in a circle) using recursion to find the survivor.
- **Q78. Subset.**
  - Generate all possible subsets (the power set) of a given set of elements using recursion/backtracking.
- **Q79. Permutation.**
  - Generate all possible permutations (arrangements) of a given set of distinct elements using recursion/backtracking.
- **Q80. Letter combination sum.** (Likely "Letter Combinations of a Phone Number")
  - Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent on a standard phone keypad. Solved with backtracking.
- **Q81. Sudoku Solver.**
  - Write a program to solve Sudoku puzzles by filling the empty cells using a backtracking algorithm.

---

### Binary Tree

This section introduces Binary Trees, a hierarchical data structure where each node has at most two children, referred to as the left child and the right child. They are fundamental in computer science for representing hierarchical data and enabling efficient searching and sorting.

#### Implementation

Learning to build a basic Binary Tree structure. This typically involves defining a `Node` class (with `value`, `left` child, and `right` child properties) and methods to insert nodes and traverse the tree.

#### DFS traversals - teeno version (all three versions)

Depth-First Search (DFS) explores as far as possible along each branch before backtracking.

- **Inorder Traversal:** Traverse the left subtree, visit the root, then traverse the right subtree (Mnemonic: Left -> Root -> Right). Often used to get elements in sorted order from a BST.
- **Preorder Traversal:** Visit the root, traverse the left subtree, then traverse the right subtree (Mnemonic: Root -> Left -> Right). Often used to create a copy of the tree or to get prefix expressions.
- **Postorder Traversal:** Traverse the left subtree, traverse the right subtree, then visit the root (Mnemonic: Left -> Right -> Root). Often used to delete a tree or to get postfix expressions.

- **Q82. Maximum depth of binary tree.**
  - Find the length of the longest path from the root node to any leaf node. This can be solved recursively.
- **Q83. Symmetric tree.**
  - Check if a binary tree is a mirror image of itself (i.e., symmetric around its center). This involves a recursive helper function comparing left and right subtrees.
- **Q84. BFS traversal.** (Breadth-First Search / Level Order Traversal)
  - Traverse a tree level by level, visiting all nodes at the current depth before moving to the next depth. Typically implemented using a queue.
- **Q85. Left view.**
  - Print the leftmost node at each level of the binary tree. Can be solved using BFS or DFS.
- **Q86. Top view.**
  - Print the nodes that are visible when viewing the tree from the top. This involves considering horizontal distances from the root. Typically solved using level order traversal with horizontal distance tracking.
- **Q87. LCA common ancestor.** (Lowest Common Ancestor)
  - Find the lowest common ancestor of two given nodes in a binary tree. The LCA is the deepest node that has both given nodes as descendants.
- **Q88. Construct binary tree from preorder and inorder.**
  - Reconstruct a unique binary tree given its preorder and inorder traversal sequences. This is a classic recursive problem.

---

### Binary search tree-> BST

This section focuses on Binary Search Trees (BSTs), a special type of binary tree where the value of each node is greater than or equal to all values in its left subtree and less than or equal to all values in its right subtree. This property enables efficient search, insertion, and deletion operations (typically O(log n) on average for balanced trees).

- **Q89. Validate binary search tree.**
  - Check if a given binary tree adheres to the properties of a Binary Search Tree (i.e., for every node, all values in the left subtree are smaller, and all values in the right subtree are larger, and this holds recursively). This often involves an inorder traversal or passing down min/max range constraints.
- **Q90. KTH smallest element in BST.**
  - Find the `k`th smallest element in a Binary Search Tree. An inorder traversal visits nodes in ascending order, so the `k`th node visited is the answer.
- **Q91. Delete node in BST.**
  - Delete a node with a given key from a Binary Search Tree while preserving its BST properties. This involves handling three cases: node is a leaf, node has one child, or node has two children (requiring finding inorder successor or predecessor).

---

### Graph

This section introduces Graphs, a non-linear data structure consisting of a set of vertices (nodes) and a set of edges that connect pairs of vertices. Graphs are used to model relationships and networks in various domains.

#### Implementation

Learning to build a basic Graph structure. Common representations include:

- **Adjacency List:** An array of lists, where each index `i` corresponds to vertex `i`, and the list at that index contains all vertices adjacent to `i`. Efficient for sparse graphs.
- **Adjacency Matrix:** A 2D array where `matrix[i][j] = 1` (or weight) if there's an edge from vertex `i` to `j`, and 0 otherwise. Efficient for dense graphs or quick edge checking.

- **Q92. BFS and DFS traversal.**
  - **Breadth-First Search (BFS):** Traverses the graph level by level, exploring all neighbors of a node before moving to their neighbors. Uses a queue. Useful for finding shortest paths in unweighted graphs.
  - **Depth-First Search (DFS):** Traverses the graph by exploring as far as possible along each branch before backtracking. Uses a stack (often implicitly via recursion). Useful for cycle detection, topological sort, finding connected components.
- **Q93. Cycle detection.**
  - Detecting the presence of cycles in both directed graphs (e.g., using DFS and tracking recursion stack) and undirected graphs (e.g., using DFS and keeping track of parent nodes, or using Disjoint Set Union - DSU).
- **Q94. Topological sort.**
  - For a Directed Acyclic Graph (DAG), find a linear ordering of its vertices such that for every directed edge `uv` from vertex `u` to vertex `v`, `u` comes before `v` in the ordering. Kahn's algorithm (using in-degrees and a queue) or DFS-based approach can be used.
- **Q95. Shortest path Alorithm's.** (Algorithms)
  - Introduction to fundamental shortest path algorithms:
    - **Dijkstra's Algorithm:** Finds the shortest paths from a single source vertex to all other vertices in a weighted graph with non-negative edge weights.
    - **Bellman-Ford Algorithm:** Finds shortest paths from a single source vertex to all other vertices in a weighted graph, and can handle negative edge weights (also detects negative cycles).

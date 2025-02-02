﻿---
title: "Week 3 Assignment (Part 2 - Exercise)"
language: "en"
published: true
tags: ["FH Aachen", "Thesis"]
---

A Caesar cipher is a simple encryption technique. The encryption using a [Ceasar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) replaces a letter in the plain text with a letter that is a fixed number down in the alphabet. For example, with a shift of 5 the following substitutions would take place:

+ a → f
+ b → g
+ c → h
+ ...
+ v → a
+ w → b
+ ...
+ z → e

Using this substitutions, a plain text can be encrypted:

+ Plaintext: programming python is fun!
+ Encrypted text: uwtlwfrrnsl udymts nx kzs!

Your task for the assignment is to implement a Caesar cipher with a shift of 5. The program should ask the user for a plain text sentence and print the encrypted text.

Here is an example execution of the program:

```
Please enter a sentence: python is fun!
The encrypted sentence is: udymts nx kzs!
```

<br>

Note that your program should not encrypt special characters like a space or an exclamation mark. If no substitution is defined for a character, the plain text character is used in the encryption as well (e.g. the ! in the example above).

### Hint

1. There are several approaches to solve this exercise. The simplest solution would be to create a dictionary containing the necessary substitutions.
1. To avoid handling upper and lower case letters it is best to first convert the user input to lower case. After that you only need to take into account lower case letters. A string can be converted into lower case using the *.lower()* method.

The result of the following example

```
s = "TEST"
s = s.lower()
print(s)
```

<br>

is:

```
test
```

---

[< Previous unit](/teaching/python-mooc/week3_assignment_questions) | [Next unit >](/teaching/python-mooc/week3_assignment_exercise_solution) |
[Course Overview](/teaching/python-mooc)
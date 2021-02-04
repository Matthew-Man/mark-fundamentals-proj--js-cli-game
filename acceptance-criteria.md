# Acceptance Criteria for Quiz game ported from Python

Original python quiz created by Sharon and Emmanuel

---

Criteria 1:
- Given the user has started the game and the user has been prompted to select from the categories
- When the user inputs a choice from the list
- Then being the quiz for the given category

Criteria 2:
- Given the user has started the game and has been prompted to select from the categories
- When the user inputs a choice which is NOT in the given list
- Then inform the user the input is incorrect and prompt then to re-enter their choice

Criteria 3:
- Given the user is in a specific quiz game (e.g. quiz on continents have started)
- When the user still has lives
- Display question for category, generate and display the anagram for the question

Criteria 4: 
- Given the user is in a specific quiz game (e.g. quiz on continents have started) and a question has been prompted
- When the user inputs a correct answer
- Then inform them it is correct, add 1 to their score, print their score, and move onto the next question

Criteria 5:
- Given the user is in a specific quiz game (e.g. quiz on continents have started) and a question has been prompted
- When the user inputs a incorrect answer
- Then inform the user the answer is wrong and ask if they would like a clue

Criteria 6:
- Given the user has been prompted if they would like a clue
- When the user inputs yes
- Then give a clue of the first letter in the anagram

Criteria 7:
- Given the user has gotten an answer incorrect
- When the user has zero lives
- Then tell the user the game is over, tell them what score they got, and end the program

Criteria 8 (UPDATE - INCORRECT ASSUMPTION IGNORE):
- Given the user has gotten an answer incorrect and has been given a clue
- When the user inputs an incorrect answer (again)
- Then inform the user it is incorrect and move onto the next question

Criteria 9:
- Given the user has finished a category quiz
- When the user is prompted to select another category to carry on playing
- Then ensure that previously played categories are no longer displayed and cannot be played


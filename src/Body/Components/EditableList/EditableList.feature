Feature: Editable List

  Scenario: The lists does not have any items
    Given the list is empty
    Then only an a text field and add button should exist

  Scenario: The list has items
    Given there are items in the list
    Then a list should exists
    Then an editable field should exists on each list item
    Then a delete button should exists on each list item

  Scenario: Adding an item
    Given there is a list
    When the user adds an item
    Then a new entry should be added

  Scenario: Pressing Enter in the add section
    Given there is a value in the add field
    When the user presses Enter
    Then a new entry should be added

  Scenario: Deleting an item
    Given there is a list
    When the user deletes an item
    Then an entry should be deleted

  Scenario: Editing an item
    Given there is an item in the list
    When the user changes the value in the item
    Then the entry should be updated

  Scenario: Leaving an item empty
    Given there is an item in the list
    When the user empties the field and loses focus
    Then the entry should be deleted

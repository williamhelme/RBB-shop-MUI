Feature: Insert Form

  Scenario: Loading the form
    Given the Form has loaded
    Then the form should exist
    Then a name, description, instructions and image input field should exist
    Then an insert button should exist

  Scenario: Submitting the form
    Given the form has been submitted
    When a name and description are provided
    Then it should insert a new recipe

# Scenario: Viewing the ingredients
#   Given the Card has loaded
#   When it is in a default state
#   Then it should not show the ingredients
#   When the user selects view ingredients
#   Then it should show the ingredients
#   Then it should not show the recipe
Feature: Card

  Scenario: Loading the Card
    Given the Card has loaded
    Then a title, description and image should exist
    Then buttons for view recipe and view ingredients should exist

  Scenario: Viewing the recipe
    Given the Card has loaded
    When it is in a default state
    Then it should not show the recipe
    When the user selects view recipe
    Then it should show the recipe
    Then it should not show the ingredients

  Scenario: Viewing the ingredients
    Given the Card has loaded
    When it is in a default state
    Then it should not show the ingredients
    When the user selects view ingredients
    Then it should show the ingredients
    Then it should not show the recipe
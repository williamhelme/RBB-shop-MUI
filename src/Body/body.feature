Feature: Body

  Scenario: Loading the App body
    Given the Body has loaded
    Then a page title should exist

  Scenario: Displaying the content
    Given the Body has loaded
    When it is setup correctly
    Then a 3 column grid should exist for desktop
    Then a 2 column grid should exist for tablet
    Then a 1 column grid should exist for mobile

  Scenario: Displaying the insert form
    Given the Body has loaded
    When the route is for the insert form
    Then the insert form should be displayed
    Then the grid of items should not exist
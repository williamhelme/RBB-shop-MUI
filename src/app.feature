Feature: Application

  Scenario: Loading the App
    Given I am testing the app works
    Then the app should render

  Scenario: The app contains a body
    Given the app has rendered
    Then a body should be available

  Scenario: The app contains a header
    Given the app has rendered
    And a header should be available


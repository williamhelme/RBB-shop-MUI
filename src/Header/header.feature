Feature: Header

Scenario: Loading the App header
  Given the header has loaded
  Then there should be a header tag

Scenario: Should skew the background
  Given a skew property is provided
  Then the background should skew

Scenario: it renders correctly
  Given it has rendered
  Then it should match the snapshot
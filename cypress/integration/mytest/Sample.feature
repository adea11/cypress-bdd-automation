Feature: Password Reset

  I want to reset my password

  Scenario: Password Retrival
    Given I navigate to url home page
    When I input an invalid password
    And I click Retrive Password button
    Then Retrival email should be sent
    


    

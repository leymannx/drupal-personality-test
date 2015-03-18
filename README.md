# Drupal Personality Test Module

This is a very simple personality test module for D7. On install it adds a new custom content type 'personality test'. When adding a new personality test you are supposed to add three possible outcomes and then add a bunch of questions with three possible answers each. Match each answer to one outcome.

When doing the test you have to choose one radio option for each question. In the end your score will be stored in a session variable which then fires the display of one possible result text you entered earlier.

After you read your result you are able to press a simple reset button to start the personality test again. Due to a little script the radios will be displayed in a different order everytime you start over.

### TO DO
- reduce match options according prior options (prevent matching all options to one result)

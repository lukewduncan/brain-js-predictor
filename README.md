# score_predictor
The app is based around brain.js which is a javascript neural network (https://github.com/harthur/brain). A user can select two teams from the English Premier league which are then input into the "brain" on the backend which calculates a projected winner in the next match they play based on the results from the 2014/2015 premier league fixtures that have already happened. 

To build this application, I utilized:
- node.js
- jquery
- mongodb
- brain.js
- underscore.js

The site was deployed on Heroku and can be found at: scorepredictor.herokuapp.com

Future uses
This app was originally created just to test the waters with Javascript neural networks. To increase the learning of the "brain" more variables would have to be introduced e.g. weather of past games, players that played in the lasts games, home or away teams etc. Brain.js would work great for predicting fantasy sports and certain players to play which I want to eventually build in the future. 

Difficulties
- Figuring out how brain.js initially worked
- Retrieving quality data (It would have been awesome to use an API to retrieve scores but sport data API's are very expensive - no good ones out there)

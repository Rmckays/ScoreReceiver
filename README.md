# ScoreReceiver

### Summary
---
Score Receiver allows users to find game data from the NFL for the last 30 years.  The back-end is built using Python Flask with a REST API interface
that serves the game data to a React/Redux front-end.  The NFL game data is retrieved and read using Python from this [Github Repo](https://github.com/fivethirtyeight/nfl-elo-game/blob/master/data/nfl_games.csv). 


![ScoreReceiver Screenshot](https://github.com/Rmckays/ScoreReceiver/blob/master/Images/ScoreRec.JPG)

#### [Try it here!](https://score-receiver.herokuapp.com/)

### Instructions
---
Please follow the steps below to get ScoreReceiver running on your local machine.
1. Fork and clone the repo to your local machine.
1. Navigate into the client folder via the command line and run *"npm install"*
1. Now while still in the client folder run *"npm run build"*.
1. In order to run it on your local machine you will need to update the port.
    1. In the *app.py* file add the port as shown ` if __name__ == "__main__":
    app.run(port = "CHOOSE YOUR PORT")`
1. In your command line now run either *"python app.py"* if you are on a Mac and have Python3 installed, or,
*"python3 app.py"* if you are running on a windows machine.


### Technologies & Libraries Used
---
* Back-End
    * Python w/Flask
* Front-End
    * React w/Hooks
    * Redux
    * Axios
    * D3
    * Material-UI


### Author
---
* Rustyn Simmons - Full Stack Software Developer - [Website](https://www.rustynsimmons.com) | [LinkedIn](https://www.linkedin.com/in/rustyn-simmons-851a9253/)
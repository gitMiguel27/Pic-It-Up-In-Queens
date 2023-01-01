# Pic-It-Up (In Queens)

## A ReactJS front-end with Ruby on Rails back-end website. This is a game which aims to get more people to visit and explore Queens, NY!

Pic-it-up (In Queens) works similarly to a scavenger hunt - the aim is to get people in the NYC area to explore different parts of NYC (particularly Queens for this project as I see this application can expand to Manhattan, Brooklyn, etc.) through photography. This app posts various cropped photos of a particular place in Queens, which users would be challenged to find and explore, and take their own pic at the site of the location. Some photos are more encompassing of the location and are easier to find, others are intensely cropped to make it harder for users to find and replicate! 

As a user YOU can:
* Look up new challenge photos from the feed
* Post your own photo to a challenge thread
* Like another user’s photo
* See your name on the leaderboard

## How to install this project using VS Code and/or Terminal

1. Clone this project
2. Npm install --prefix client for all front-end packages
    * npm install react-router-dom
    * npm install react-scroll
    * npm install typical
    * npm install piexifjs

## How to run the app in the development mode

#### npm start --prefix client

Runs the front-end.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### rails s

Runs the back-end
You must reload the entire app if you make changes to the back-end.

## How to tweak this project for your own uses

Since this is my personal project, completed for the Flatiron School, I would advise for you to clone and rename this project to use for your own purposes.

## Known issues (Work in progress)

This project is still ongoing. ~~The date does not update dynamically when a user submits a post to a challenge.~~ UPDATE: The date bug has been fixed and now is dynamically submitted with a user's post! The validation for the location of the uploaded picture is still in progress but works hard-codedly. These are coming soon!

## Like this project?

Connect with me on LinkedIn:
[My Profile](https://www.linkedin.com/in/miguel-nazario/)
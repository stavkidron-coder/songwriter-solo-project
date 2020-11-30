# SONGWRITER

Duration: 2 weeks

## DESCRIPTION

SONGWRITER is a web application that stores song information digitally to alleviate the problem of misplacing
hand written song information during the song writing process. This way, not only will the song information be secure,
but it will also be easy to find, edit, add, or delete from.

To see the fully functional site, please visit: DEPLOYED APP

## PREREQUISITES

  - Node.js
  - Nodemon
  - PostgreSQL
  - Redux
  - Bootstrap-React
  - Font Awesome
  - Moment.js
  - Express

## INSTALLATION

  - Create database called "songwriter"
  - The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on PostgreSQL, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
  - Open your editor and run an npm install
  - npm run server
  - npm run client

## USAGE

  1. Either register as a new user or click the login link to be redirected to the login page if you are already a user.

  2. Once on the homepage, you can click on the "My Songs" button in the navbar and select either "in progress" or "completed" songs

  3. On every song card displayed, you can click on the dropdown button on the top right of each card to either edit the song or view it.

  4. When on the edit song page, you can change or add any information you'd like, toggle the completed status of each song, add sections and chords by clicking the "Add Section" button, save the changes, or delete the song entirely which will redirect you back to the home page.

  5. When on the View Song page, you can view the song information more comfortably as a full page layout. You can hit the edit song button under the title to go to edit the song if you'd like.

  6. In order to add a new song, you can navigate either back to the home page or hit the "My Songs" dropdown button in the navbar and select "Add Song". You will be redirected to the new song page where you will be able to fill in the song information and save the song.

  7. Back at the home page, if you scroll down, you can view the five most recently created songs to get right back to work on them.

  8. To delete a song, hit the dropdown button on the top right of the song card and navigate to the edit song page. From there, you can scroll to the bottom of the page and select the "Delete Song" button. You will be warned with a modal asking if you are sure you want to delete the song. If you chose to delete the song, the song will be permanently deleted and you will be redirected to the home page.

## BUILT WITH:

  - Moment.js
  - Express
  - Redux
  - Node
  - postgreSQL
  - React
  - Bootstrap-React
  - Font Awesome

  ## ACKNOWLEDGEMENTS

  Thanks to my instructors at Prime (Casie and Kris), to my amazing cohort, and to Prime Digital Academy for making this project a reality!
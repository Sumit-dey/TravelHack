# TravelHack

Welcome to TravelHack, a clone of Airbnb with CRUD operations to keep track of all your notes.

<h2>Summary</h2>

TravelHack is an Airbnb clone with slight html/CSS alterations. Users can sign up/login and post listings to the website. Registered users can also delete/edit their own listings and view others listings. Registered users can also leave reviews on listings.


<h2>Structure</h2>
The app has two features: Listings with full CRUD functionality, Reviews with Create and Read functionality.

<h2>Live Link </h2>
 Live-link in Heroku : https://travelhack.herokuapp.com/

<h3>List Of Feature</h3>
<ul>
  <li>Create an account.</li>
  <li>Login and logout.</li>
  <li>Create a listing.</li>
  <li>Edit a listing.</li>
  <li>Delete a listing.</li>
  <li>Leave a review on a listing.</li>
  <li>Search all spots by clicking "I'm Flexible"</li>
  <li>Search Atlanta, San Jose and Athens</li>
  <li>Search for spots by city name, using the search bar</li>
</ul>
  
 <h2>Backend</h2>
 
 All backend routes were designed in Express. This app uses a Sequelize database.
 
 <h2>Frontend</h2>
 
 All frontend routes and components were designed in React. All styling for the app was done with vanilla CSS.
 
 <h2>Home Page</h2>
 When a user first visits the site they hit the homepage, as shown below. Un-registered users can see the full site, but they cannot create listings, edit listings, delete listings, or leave reviews. Using either the search bar(searching by city), the "I'm flexible" button(to see all listings), or using "explore nearby" to search the four listed locations. Un-registered users can sign up in the top right of the navbar or click the link further down the page. Registered users can login from the navbar in the top right. Once you are logged in, the navbar changes from displaying "log in" and "sign up", to "create a listing".
 
 
 
 
![Screenshot (622)](https://user-images.githubusercontent.com/45556028/145685582-6e553d66-f8ff-4d8a-b188-296e3ab2496a.png)



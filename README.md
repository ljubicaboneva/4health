<h2> 4health </h2>
<tr>
<h3>1. About</h3>
<tr>
Project made by Ljubica Boneva 161069 <br>
Web Programming - Faculty of Computer Science and Engeneering, Skopje
<h3>2. Short description of the application</h3>
<tr>

4health is a web application that offers some effective ways to stay healthy and fit. It contains some popular exercises and you 
can choose who are your favourites and add them to the favourites page, 
it has a page with recommended diets (you can choose one diet which suits you best),
list of meals which you can filter and see how many calories they have. 
Also the application provides a shop page where your can choose supplements for your own purpose and put them in your cart.
You can create, remove, edit all of the above mentioned items because the application is fixed on one user admin with userId="ljubica123".
(the idea was to have users and admins and i left the code that i tried for spring security; you also can add,delete,edit new users but they
will not be useful, you can only view them in a table)
 
 <h3>3. Starting the application</h3>
 
<h3>Back-end</h3>
You need to create the database with:
<br>
<b>name:4health</b>
<br>
<b>username:postgres</b>
<br>
<b>password:internet</b>
<br>
or change them if you like in the <b>application.properties</b>.
Then you need to build the project and run the main class <b>HealthApplication</b> stored in the package mk.ukim.finki.wp.health.<br>
Also you should execute the script <b>'schema.sql'</b> stored in package <b>src\main\resources\db</b> to populate the database
with the necessary data. (you need the user with <b>userId: 'ljubica123'</b> which is added in the script for the app to work)


<h3>Front-end</h3>
You need to open the terminal and navigate to <b>"4healthreact"</b> folder and then run:<br>
<b>npm install</b><br>
<b>npm start</b><br>
After that you should open <a href="http://localhost:3000">http://localhost:3000</a> in the browser.
 

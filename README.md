# eloof: Universal Children's Holiday Wishbook Application

# Installation 
This is a a React application deployed via Heroku and uses Semantic UI, Mongo, and Axios. Please uses the following installation commands before running the application:
### npm install
### npm install semantic-ui-react semantic-ui-css
### npm install --save @rumess/react-flip-countdown

The application will be invoked with the following command:
### npm start

The specific features of the application are outlined in the Usage section of this document. 

If you want to set up your own instance of this application to modify the existing code, please use the following steps:

1. Clone this repository using either the SSH: 
### git clone git@github.com:JoseBurgos1993/Eloof.git
or 
clone using HTTP:
### git clone https://github.com/JoseBurgos1993/Eloof.git
and run npm i in the cloned repository's root directory to install the node module dependencies.

2. In the config.json file, update the "development" password & database name to match your local Mongo server information. You may need to create your database if this is the first time setting up a local instance of this app, in which case, make sure the database name you create matches the one you add to the config.json file.

3. Start the server by running the application as before using:
### npm start 
If everything worked correctly, you should be able to see the landing page when navigating to localhost:3000.

# Usage
To use the app, navigate [here](https://eloof.herokuapp.com/)! 
You are able to create a child's account (denoted as Believer) or an adult account (denoted as Elf) with your email and a strong password after selecting the sign-up option.
The child's account includes an additional form to complete that includes a child's details that will be able to be used in an "email to Santa."
You will be automatically redirected to the appropriate user homepage upon account creation.
Each child's account will have access to a universal Wishbook and their profile that houses their information and their wishlist. To access, click on the corresponding navigation link once signed in. For adults, their is a public list view of items and their profile page that houses selected wishlists. 
Wishlists are accessed at current by the email assoicated with the account. 
Click the Logout link to logout of the app and be returned to the landing page.
To log back in, simply enter the information on the login form you provided during signup to access your account again.
Note: Please note at current that the application uses Target's API for the Wishbook for demonstration purposes. You will need to create your own account with Target to use the Wishbook portion of the application.

![eloof](https://user-images.githubusercontent.com/57579330/101791172-395e7680-3ad1-11eb-9494-27610219e34d.gif)

# Contributions
Your contribution is most welcome! Please refer to the contributing guidelines when making contributions to this project.
Please note that this project is released with a Contributor Code of Conduct. By participating in this project, you agree to abide by its terms.
Current contrubuitors include: 
@summerhealey
@CatalinaPatel
@phakpa
@JoseBurgos1993

# Questions
For additional information, please e-mail the contributors of the project.

# License
MIT copyright (c) 2020 Catalina Patel, Jose Burgos, Pha Kpa, and Summer Healey.
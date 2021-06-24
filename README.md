<h2>JavaScript/React</h2>

- The purpose of the application is to provide users with an insight into the list of dogs/cats they can adopt and it also offers the option for the user to post information about the pet he want to give up for adoption.

- There are two types of navigation. In the first one, on the left, the user has the option to change the application language from Spanish to English and vice versa (the i18next doesn't work on GH pages so at the moment it is not possible to change the language), while on the right there are options for 'Log In / Log out' and 'Sign up'.

- Clicking on 'Sign up' appears a form where the user is asked to enter their data in order to register. All fields are mandatory. The 'Log in' form allows users to log in if they already have an account. All fields are also required. After logging in/registering, the application takes user directly to the 'About' page.

- In the second navigation there are the following options:

- About Us - in this section user can find information about Hogar Animal.
- Adopt a Pet - contains a list of pets. User can choose between cat and dog on a click. There is also pagination.
- Adopted Pets - this section contains a list of pictures of pets that have already been adopted.
- Blog - contains a list of blogs.
- Contatc Us - contains information on how the user can contact 'Hogar Animal'.
- Rehome your Pet - this section can be accessed only if the user is logged in / registered. Here, the user has the opportunity to give his pet up for adoption by entering the data about the pet.

- There is a 'Scroll to top' button in the footer that allows user to scroll to the top of the page.

<br>

-Router:

npm install --save react-router-dom

-Popoup:

npm install reactjs-popup --save

-@fortawesome:

npm i --save @fortawesome/fontawesome-svg-core <br/>
npm i --save @fortawesome/fontawesome-svg-core <br/>
npm install --save @fortawesome/free-solid-svg-icons <br/>
npm install --save @fortawesome/react-fontawesome <br/>
npm install --save @fortawesome/free-brands-svg-icons <br/>

-i18next:

npm install i18next --save <br/>
npm install react-i18next i18next --save <br/>
npm install i18next-browser-languagedetector <br/>
npm install i18next-xhr-backend <br/>

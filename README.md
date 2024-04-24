# CS50 Web Activities

## Week 7: Scalability & Security
No code exercises this week. 
Section slides can be found [here](https://docs.google.com/presentation/d/1DyT7e0cvB0AHDqg9PuySIj6DzDkWDeSRJnfJX55CoGA/edit?usp=sharing).

Thanks everyone for a great course!

## Week 6: Testing & CI/CD
Example solutions can be found in the `week6/solution` directory. Note that only the example tests for the Commerce project will be posted (rather than the whole solution to the project).
Section slides can be found [here](https://docs.google.com/presentation/d/1lqAw20kUo69YS0Xq4INHseR6mreqWVpMJqQ-QQIVzKc/edit?usp=sharing).

### Activity Goals:
#### Python Testing
You've written a snazzy binary search, but now you need to determine if it actually works. Using Unittest, write a set of tests in `python_testing/tests.py` to root out any bugs.

#### Selenium Testing
Your friends sent you a Javascript based guessing game, but you're a busy individual and don't have time to sit around taking thousands of guesses. Write a Selenium script instead to quickly discover what the number is. You might find these Selenium intro [docs](https://www.selenium.dev/documentation/webdriver/getting_started/first_script/) helpful.

Make sure you have installed both Selenium via `pip install selenium` and the ChromeDriver (or browser of choice driver) via `pip install chromedriver-py`.

#### Django Testing
Download the [staff solution](https://vault.cs50.io/f37ab9cd-9ab5-4ebc-9971-f193defd1037) to the Commerce project. In `auctions/tests.py`, write a set of tests to ensure that the app is working as intended. Solution test code is in `week6/solution/examples/commerce_example/`


## Week 5: User Experience/Interaction and React
Example solution to the React activity will be posted after section in the `week5` directory. Code for the CSS animation activity is already available in the same directory. 
Section slides can be found [here](https://docs.google.com/presentation/d/1oCrXw_t4TP7uCuEjLe9wMPC5tXm0hg0Cm1ossaEiOrQ/edit?usp=sharing).

#### A note regarding the React activity solution: 
Within the solution Django app, there are two approaches to this problem, each its own Django route. Functionally, they are equivalent, but the design of the approaches differs.

`/example1` (and corresponding files `index1.html` and `script1.js`) is the approach we reviewed together in section. Although it works and served as an initial foray into the topic, from a React design perspective, it has room for improvement. 

`/example2` (and corresponding files `index2.html` and `script2.js`) is a more React idiomatic solution that uses slightly more complex React functionality than that reviewed in section or lecture, but is as a result more in-line with how React apps are designed in the wild. It is heavily commented to highlight differences between `example1` and `example2`. 

I encourage folks to reach out with any questions on the two approaches!

### Goal:
Using React, implement a Quizzlet Lite app that lets a user view a deck of hardcoded flash cards. The user should be able to click on the cards to view the opposite side of the card. The user should also be able to see the previously answered cards.

The Django app has already been fully configured. Although this activity uses hardcoded flash cards, you could also imagine writing an API to pull card info out of a model.


#### Where to start (if implementing `/example1`):
1. `git pull` to pick up any updates, or clone the repo if you have not already.
2. Take a read through `templates/flash_cards/index1.html`, and `static/styles/style.css` (if you wish). Note that `index1.html` is pretty empty.
3. Open up `static/scripts/script1.js` and read through the existing skeleton code.
4. Start by trying to render the first card out of the Deck.
5. Add buttons and event handlers to advance the cards.
6. Update the Card component to respond to user clicks.
7. Update your button handlers to display previously viewed cards in their respective divs using the `renderSeenCards()` function.


## Week 4: Javascript
Example solution will be posted after section in the `week4/` directory.
Section slides can be found [here](https://docs.google.com/presentation/d/1Ekawt2oZqhu-2gc5Lv5Bm-x0zohPqI9SAF2vkKokOF0/edit?usp=sharing).

### Goal:
Create a Javascript based page that queries our app's API for pets available for adoption, and then dynamically displays information about the pets.

Already defined in `adoption/views.py` and `adoption/urls.py` are a couple API endpoints to query data out of the `Pet` model. The data is returned as a JSON, and both enpoints are `GET` endpoints.

#### Where to start:
1. `git pull` to pick up any updates, or clone the repo if you have not already.
2. Familiarize yourself with the `Pet` model and the API endpoints.
3. Start your web server, and from the browser, try getting some data from one of the endpoints.
4. Write some Javascript such that when the page loads, an API call is made, and the data is dynamically added to the existing `<ul>`. 
5. Implement additional Javascript features, such as displaying additional pet features on click, and additional UX features like highlighting which pet was clicked on.
6. As time allows, add some CSS to make the website look a little nicer.

## Week 3: SQL, Models, & Migrations
Example solution can be found in the `week3/` directory.
Slides from section can be found [here](https://docs.google.com/presentation/d/1i7-8WdxeY-RL-hDLCwPLvWFSDoAxuNjwof1ucM_N5TE/edit?usp=sharing).

### Goal:
Create a simple website to view students and their enrolled classses. Bonus if you add the ability to enroll a student. 

You should define both a Student and a Class model. These models should be related to each other in some way -- consider which of ForeignKey, many-to-many, or One-to-One relationships are most appropriate. (*Tip*: There is an example definition of a Student model in the slides!)

Remember your **migration** workflow:
1. Define models in the app's model.py
2. run `python manage.py makemigrations` from the project directory
3. run `python manage.py migrate` from the project directory


## Week 2: Django
Example solution can be found in the `week2/` directory.
Slides from section can be found [here](https://docs.google.com/presentation/d/1AN9WcLl3K5C1ymNnMJTX23PZXb0dx6E6t6bL2HC7Gds/edit?usp=sharing).

### Goal
Make a Django project with one sub app that displays your age on one page, and gets your age on another via a form.

To make a new Django project, run `django-admin startproject PROJECT_NAME` in the appropriate directory.

To make a new app, run `python manage.py startapp APP_NAME`.

To start your project, run `python manage.py runserver`.

**Note:** You might have to install the `dateutil` Python module.


## Week 1: HTML, CSS + SASS, Python & Git
Starter files are in the `week1/` directory.
Slides from section can be found [here](https://docs.google.com/presentation/d/1iUx2GvqXVAplir9XyqwtCR2qoVmLpDyDuUumAv5JHU8/edit?usp=sharing).
### Goal
Make a simple HTML page about yourself. Your page should include the following:
* Your name
* Two fun facts
* At least 3 pictures (can be of anything)
* A link to your favorite Google search

You should include but are not limited to the following html tags:
* h1
* li
* img
* a

In styles/style.scss, write some styles to make your page look a little nicer. **Bonus points** if you use flexbox or boostrap on top of your own styles.

#### Where To Start
1. Fork this repo
2. Clone a copy of this repo to your local machine
    * do so using `git clone https://github.com/braun01/cs50_web_activities.git` (via https) or you can use SSH
3. Write some html
4. Make a commit
5. Write some styles

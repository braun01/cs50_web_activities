# CS50 Web Week 1 Activities

## Week 3: SQL, Models, & Migrations
Example solution can be found in the `week3` directory.
Slides from section can be found [here](https://docs.google.com/presentation/d/1i7-8WdxeY-RL-hDLCwPLvWFSDoAxuNjwof1ucM_N5TE/edit?usp=sharing).

### Goal:
Create a simple website to view students and their enrolled classses. Bonus if you add the ability to enroll a student. 

You should define both a Student and a Class model. These models should be related to each other in some way -- consider which of ForeignKey, many-to-many, or One-to-One relationships are most appropriate. (*Tip*: There is an example definition of a Student model in the slides!)

Remember your **migration** workflow:
1. Define models in the app's model.py
2. run `python manage.py makemigrations` from the project directory
3. run `python manage.py migrate` from the project directory


## Week 2: Django
Example solution can be found in the `week2` directory.
Slides from section can be found [here](https://docs.google.com/presentation/d/1AN9WcLl3K5C1ymNnMJTX23PZXb0dx6E6t6bL2HC7Gds/edit?usp=sharing).

### Goal
Make a Django project with one sub app that displays your age on one page, and gets your age on another via a form.

To make a new Django project, run `django-admin startproject PROJECT_NAME` in the appropriate directory.

To make a new app, run `python manage.py startapp APP_NAME`.

To start your project, run `python manage.py runserver`.

**Note:** You might have to install the `dateutil` Python module.


## Week 1: HTML, CSS + SASS, Python & Git
Starter files are in the `week1` directory.
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

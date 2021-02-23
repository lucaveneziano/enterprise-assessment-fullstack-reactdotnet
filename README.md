# Blogmodo

## The Technical Assessment

Are you ready to put your skills to the test and have some full-stack hacking fun? This assessment is like a day-long, solo sprint where you get to build a full stack application using the same skills and technologies your company plans to use. You can expect to reinforce concepts and techniques you are familiar with while also learning some new content.

### Before Starting

1. Confirm that all communication applications and tools are turned off, closed, and put away so that you can focus.
2. Fork this repo. **Do not push your work any time during this assessment until you are ready to turn it in.**

### Guidelines

You must manage your time effectively during this assessment. This assessment will be evaluated as if it was a coding challenge given to you as part of a job application process. Not only will the functionality of your code be important, the professionalism with which you write it will also be reviewed. Consider the style and organization of your code. Make frequent commits with informative and consistent commit messages. Be professional and informative with your comments.

See [Getting Started](#getting-started) for a guide on how to get started with development in this repository.

### Available resources

The ultimate goal of this assessment is to give you an opportunity to demonstrate your abilities as an engineer. Avoid anything that will obscure our ability to see your best efforts at work and anything that could undermine your ability to meet the goal.

* You **may** only use official documentation of the outlined technical stack.
* You **may not** copy and paste from available online resources.

### Submitting Your Work

Your work will be submitted through the [Learn website](https://learn-2.galvanize.com/):

1. Make a final commit
2. Fill out the `closing_comments.txt` file.
3. Commit the changes to `closing_comments.txt` and `README.md`.
   * NOTE: This commit should only contain changes to these two files - no other changes are allowed
4. Push your code to your fork of this repository
5. Paste a link to your fork in the answer to the Learn assessment

## Running the Application

### Prerequisites

In order to make it beyond step four, you need to have Docker installed. If you already have both `node` and `dotnet` installed, please wait to install Docker until you reach a step that requires it.

#### Docker

To find out if you have Docker installed, run the following in your terminal:

```sh
docker -v
```

If the command cannot be found, Docker is not installed correctly on your system.

#### .NET and Node

To find out if you have the CLIs for both .NET and Node, run the following two commands in your terminal:

```sh
node -v

dotnet --version
```

If either command cannot be found, that tool is not installed correctly on your system.

### Getting Started

#### Getting Started With Docker

[`./docker.sh`](./docker.sh) contains wrapper functions to start the containers for development.  You can run them by executing `./docker.sh <command-name>` in a Linux terminal (including Windows Subsystem for Linux).

The exposed functions are `start-ui`, `start-server`, `start-db`, `kill-ui`, `kill-server`, and `kill-db`.  The kill functions are utilities in the event that your container continues to run despite sending a `SIGTERM`, but you can easily use the docker cli to perform the same functions.

#### Getting Started with .NET and Node

##### Server

The [`server`](./server) directory contains a .NET API bootstrapped using the `dotnet` command line interface.

To start a development server, navigate into the directory and run:

```sh
dotnet watch run
```

The server will rebuild with every saved change.

##### User Interface

The [`ui`](./ui) directory contains a React app bootstrapped using `create-react-app` through Node's default package manager `npm`.

To start a development server that will hot reload your application, navigate into the directory and run:

```sh
npm start
```

The development server will serve up a fresh version of the bundle with every saved change.

## Directions

*For best experience, please view this file in the browser or a markdown viewer*.

You will create a full-stack application that implements several features for a multi-author blogging platform. Your app will eventually display four views:

1. a **Feed** of all the blog posts
2. an individual **Post**
3. a **Create** view for authors to create new posts
4. an **Admin** view for blog administrators to see stats about each post

Each of your user stories will have a checklist of acceptance criteria after the story and any graphical renderings.

IMPORTANT NOTE: This assessment *contains more work than you will be able to complete in a day* by design. Do not be concerned about completing all of the steps below. Rather, **please work on the following steps ***in order***, moving on to the next step only after the one you are working on is complete. **Commit frequently** with informative messages. While there are instructions to commit at the end of each step, these should not be your only commits.

### Your Tech Stack

* Client: [React](https://reactjs.org/)
* Server: [.NET Core](https://docs.microsoft.com/en-us/dotnet/api/?view=netcore-3.1)
* Database: Eventually [MongoDB](https://mongodb.com)
* Additional libraries and tools:
  * Client-side AJAX libraries
    * [Axios](https://github.com/axios/axios), as an optional, promise-based alternative to  jQuery's `$.ajax`
  * [Moment.js](https://momentjs.com/) for reader-friendly date formatting
  * [Place Corgi](http://placecorgi.com/) or [Unsplash Source](https://source.unsplash.com/) for placeholder images

---

### Before You Begin

Complete these setup tasks before you begin:

* [ ] In your terminal, navigate to this assessment's directory and run `git remote rm origin` to prevent yourself from accidentally pushing your code during the assessment.
* [ ] Follow the steps in [Getting Started](#getting-started) if you have not done so already.
* [ ] Start both the ui and server of your application.
* [ ] Study the given codebase before beginning the steps below. Consider what has been provided to you, what you will need to refactor, and what you will need to create as you work through the steps below.

**WHEN ALL OF THESE TASKS ARE COMPLETE:** plase proceed to Step One.

---

### Step One: The Blog Feed View

**Implement the following user story:**
> As a reader, when I load the app, I expect to see a feed (or list) of all the blog posts.

![part one][one]

**Implement this user story by doing the following:**

* [ ] Refactor the [**Feed** component](./ui/src/components/Feed.js) to dynamically render the sample data in `sample_data.js`. Each object in sample_data represents one blog post.
  * You may create additional components and/or refactor existing components as necessary.
* [ ] Use the [Moment.js](https://momentjs.com) library to display the post dates using relative time - for example, "21 hours ago" or "10 minutes ago."
* [ ] In the server, complete the request handler that will respond to `GET` requests to `/api/blogs` with the template data from [`Fake_Data/blogs.cs`](server/Fake_Data/blogs.cs).
* [ ] Make an AJAX request from your client to the `/api/blogs` route of your server when the App (or Feed) component gets loaded. Replace the sample data in your client with data obtained from your server.
* [ ] Ensure that the blog posts in your feed appear in reverse-chronological order (with the most recent post appearing first in the feed.)

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step one"

---

### Step Two: The Blog Post View

**Implement the following user stories:**
> As a reader, when I click the headline of a blog post in the feed, I expect to be able to see that entire blog post.
> As a reader, when I click the thumbnail photo of a blog post in the feed, I expect to be able to see that entire blog post.

![part two][two]

**Implement this user story by doing the following:**

* [ ] Study the comments explaining the workings of the "view switcher" in your client-side framework's `App` component.
  * **DO NOT** attempt to replace the view switcher React Router
* [ ] Refactor your client-side `Feed` component so that when a user clicks on either on the title or thumbnail image of a blog post, they are shown the entire blog post. *Note: there are many ways to achieve this - it is a good idea to take a little bit of time to carefully plan.*
* [ ] Refactor the [**Post** component](./ui/src/components/Post.js) to render one blog post.
  * You may create or refactor other components as necessary.
  * You may create any new server-side routes as necessary.
* [ ] Use the [Moment.js](https://momentjs.com) library to display the post dates using relative time - for example, "21 hours ago" or "10 minutes ago."
* [ ] Ensure that your `Post` properly displays the post as a series of paragraphs.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step two"

---

### Step Three: The Admin View and Tracking Views on our Blog Post

**Implement the following user stories:**
> As a blog administrator, I want to know how many times each story has been viewed.
> As a blog administrator, I want to use a link in the app's nav bar to access the Admin page.

![part three][three]

**Implement these user stories by doing the following:**

* [ ] In your server, create a request handler that will respond to a `PATCH` request to the route `/api/blogs/:blogId`. Your request handler should find the blog post in the database with the corresponding `_id`, then increment that blog post's `views` counter.
  * Use `route parameters` to get the `blogId` out of your request URL.
* [ ] Refactor your `Post` component in such a way that every time it is rendered, an AJAX `PATCH` request is made to the server route you have just created.
* [ ] Create a new `Admin` component, which will render a list of blog posts showing. Each item in the list should display the blog post's *title, author, and `views` count*.
  * To aid you in crafting the structure, styling, and layout of the HTML elements in this component, we have provided an HTML "skeleton" for this component. You can find it at `mockups/Admin.html`.
  * You may create or refactor other components as necessary.
* [ ] In the `App` component for your client, refactor the view switcher in such a way that setting the value of `view` will cause your new `Admin` component to be rendered.
* [ ] Refactor the navigation section of the `App` to allow the user to navigate to the `Admin` view by clicking "Admin" in the nav bar at the top of the app.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step three"

---

### Step Four: Connecting a Database

**Implement the following user story:**
> As a blog author, I want my posts to persist regardless of any application or networks faults.

**Implement these user stories by doing the following:**

* [ ] Use [Docker Compose](https://docs.docker.com/compose/) to configure and start each of your services.
  * Docker Compose is included in Docker Desktop - if you have Docker Desktop installed, you should be able to use compose without any problem
  * If you do not have Docker installed, you can download it [here](https://docs.docker.com/engine/install/)
  * If you do not have Compose installed, you can download it [here](https://docs.docker.com/compose/install/)
* [ ] Connect your server container to your database container
* [ ] Refactor all existing routes to consume data from the database rather than the in-memory cache that was used previously.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step four"

---

### Step Five: The Create View

**Implement the following user story:**
> As a blog author, I want an editor tool that lets me write and publish new posts

![part four][four]

**Implement this user story by doing the following:**

* [ ] Create a new `Create` component, which will display a form with several inputs: one input each for the _title, author, and imageUrl_ of the post, a `textarea` for the _body_ of the post, and a `button` that will submit the post. Additionally, the `Create` component will display a preview of the blog post, which you will implement in the next step.
  * To aid you in crafting the structure, styling, and layout of the HTML elements in this component, we have provided an HTML "skeleton" for this component. You can find it at `mockups/Create.html`.
* [ ] In your server, create a request handler that will respond to a `PUT` request to the route `/api/blogs/`. Your request handler should take the data sent in the body of the request, and use that data to create and save a new blog post to your in-memory "cache".
* [ ] In the `App` component for your client, refactor the view switcher in such a way that setting the value of `view` will cause your new `Create` component to be rendered.
* [ ] Refactor the navigation section of the `App` to allow the user to navigate to the `Create` view by clicking "Write a Post" in the nav bar at the top of the app.
  * **NOTE** - You may use the [Place Corgi](http://placecorgi.com/) or [Unsplash Source](https://source.unsplash.com/) services to provide filler images as you implement this component. Do not waste your time trying to find images.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step five"

---

### Step Six: Adding Support for Markdown Formatting

**Implement the following user story:**
>As a blog author, I want to use Markdown to format my blog posts

**Implement this user story by doing the following:**

* [ ] Inside `utils/markdownParser.js` in your client directory, write a module that implements a basic Markdown parser. This module should export a function that accepts a string of Markdown-formatted text and returns that same text but converted into HTML formatting.
  * **DO NOT** use or reference the docs/source code for any existing Markdown Parsing module.
  * For the purpose of this assignment, please only implement these three Markdown features:
    * **bold text** - text wrapped a set of asterisks, like this: `this text is normal, *this text should be bold*, and finally this text is normal again`
    * _italicized text_ - text wrapped in a set of underscores, like this: `this text is normal, _this text should be italicized_, and finally this text is normal again`
    * Headers - if a line begins with a pound sign (`#`) character, it should be rendered as a header. Multiple pound signs indicate the level of header.
  * Do not implement any additional Markdown features in your parser.
  * Ensure that your Markdown parser is not susceptible to XSS attacks.
* [ ] Refactor the `Post` component to make use of your Markdown Parser module.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step six"

---

### Step Seven: Improving the `Create` View - Live Preview

**Implement the following user story:**
>As a blog author, I want to see a formatted preview of my blog post as I type it.

**Implement this user story by doing the following:**

* [ ] Refactor your `Create` component to accommodate this new feature.
  * You may create additional components or refactor existing components as necessary.
  * Use your Markdown Parser module from the previous step in your implementation.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step seven"

---

### Step Eight: Authentication and User Roles

**Implement the following user stories:**
>As the administrator of this site, I want to make sure only I can see post statistics.
>As the administrator of this site, I want to make sure only my authors and I can create posts.
>As the administrator of this site, I want to make sure my readers can only see the blog feed and any individual posts.

**Implement this user story by doing the following:**

* [ ] Add a `Users` schema/model to your database.
* [ ] Add user authentication to your server, with `reader`, `author`, and `admin` roles.
* [ ] Create components that allow for user sign-in and account creation.
* [ ] Prevent users from being able to see views that are beyond their role's level of permissions.
* [ ] Remove the `author` input from the `Create` component, use the signed-in user's username in the AJAX request that saves a blog post to the database.
* [ ] Create or refactor any other schemas, models, API routes, client components, or helper utilities as necessary.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step eight"

---

### Step Nine: Tracking Users' Activity on the Site

**Implement the following user stories:**
>As a reader, I want to see recommendations for what posts to check out next
>As a reader, I want recommended posts to be relevant to my interests and activities on this blog

**Implement these user stories by doing the following:**

* [ ] Create or refactor any schemas, models, API routes, client components, or helper utilities as necessary.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step nine"

---

### Step Ten: Improving the `Feed` View - Featured Posts

**Implement the following user stories:**
> As a reader, I expect more important stories to take up more space in the blog feed.
> As an admin, I want to mark certain posts as "featured" to make them stand out in the blog feed.

**Implement these user stories by doing the following:**

* [ ] Create or refactor any schemas, models, API routes, client components, or helper utilities as necessary.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step ten"

---

### Step Eleven: Improving the `Admin` View - Sortable/Filterable Table

**Implement the following user stories:**
> As an admin, I want to see metrics about my posts in a table that can be sorted and filtered.

**Implement these user stories by doing the following:**

* [ ] Create or refactor any schemas, models, API routes, client components, or helper utilities as necessary.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step eleven"

---

[one]: mockups/step_one.gif
[two]: mockups/step_two.gif
[three]: mockups/step_three.gif
[four]: mockups/step_four.gif

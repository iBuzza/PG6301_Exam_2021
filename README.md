# PG6301_Exam_2021

### Introduction
This is my hand-in for the PG6301 Exam. The base idea for the application is for users
to be able to log in with a username and chat with other people who are also connected to 
the same client. This application us built with NodeJS and an Express server. Users can also 
register new users to the application.

### Install
- run npm install && npm test && npm start

### Functionality
 **Implemented:
- Installation runs without issues
- Some tests
- Routing with links and url-update
- Login with express-session
- API calls
- Register new users
- Working connection between two clients with WebSockets
 **Not implemented:
- List users
- Decent test coverage
- Authentization
- Good file structure
- Structured components

### Shortcomings
Where do I even begin? This project has so many that I might as well just refer to the function list above. I miscalculated my
own efficiency, and figured it would be a good idea to start with the chat function, having misunderstood the core concept of
the assignment. I spent so much time on this (and didn't even finish) that I had no time to implement the other requirements.
Unfortunately I discovered this way to late in the process which left me starved for time. I thought I had a much bigger understanding
of this subject than I actually did. It has been a rough lesson learned, but a lesson none the less. I don't think theres much 
point in trying to elaborate on what's missing from this SPA, as it is all just one big mess. But if I have to mention something it would be that 
session login doesn't have a password, and that the userlisting-page is not showing. It was working at one point, but it stopped working at some point.
I didn't have the time to fix these basic issues, as the deadline came suddenly. There's also next to no styling on the pages. I also wanna mention the test coverage. I didn't really grasp the importance of this until the exam stated, and by then it was alreadt too late. 

### Collaboration
I haven't collaborated on talked to any of my fellow students for this exam. All the code has been created by following the lectures,
but nothing has been copy-pasted. I decided to follow the lectures again (as I had only attended them during the semester, without doing much practice) to atleast get some knowledge out of this.

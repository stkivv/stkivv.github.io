---
title: "TriviaPenguin"
date: "2025-10-10"
github: "https://github.com/stkivv/quiz-app"
---
This is a webapp for creating quizzes and playing them in real time with others. I developed this after graduating from university and before landing my first job in the field.

# Tech stack

    frontend: Angular + Tailwind
    backend: Spring Boot
    database: PostgreSQL
    server config: nginx

# Gameplay

The concept of the game is simple - players will be shown a series of questions and they need to pick the right answer from the list.
The game flow is implemented with websockets. A user is able to "host" a quiz they have created, after which they are given a randomly generated 4-character alphanumeric passcode. Players can then use this passcode to join the host's game (note that an account is not required for playing).
Generally the host controls the game progress (moves to next question, ends the game etc.), but I did set it up to automatically detect some game states for convenience. For example, if all players have answered the question, the "round" ends automatically and a scoreboard is displayed.

# Authentication

This webapp uses JWT-based authentication. Both the access token and the refresh token are sent to the client inside httpOnly cookies.
As it stands I use just username and password to verify identity, but in hindsight I think it might have been good to implement OAuth2 because third-party login is very nice for the user.

# Spring Boot

I made my backend in Spring Boot. I had used Spring before in a university course, but I felt that I needed to refresh my knowledge a little bit. Still, there were parts of Spring that I hadn't come into contact with before, such as Spring Security.
Using Spring was a good experience overall. I think I personally still prefer .NET, but it might be because I just have more experience with that one.

# Angular and Tailwind

Both Angular and Tailwind were completely new to me when I started this project. I picked these because they are popular choices (especially Angular) and I wanted to understand for myself what has made them the preferred choice of many developers.

I am pleased to say that my experience with Angular has been great. It feels like a very "batteries-included" framework, in the sense that Angular just seemed to have a standard solution for anything I needed, whether that be DI, interceptors, routing or something else.
Perhaps because of this, Angular also felt fairly opinionated. I don't think that's necessarily a bad thing though, enforcing standards and consistency is more often than not advantageous in my opinion.
All in all, I liked Angular quite a lot. It's very likely that I will use it again in some future hobby project.

When it comes to Tailwind though, I have mixed feelings. It definetly feels weird to write what is essentially inline CSS, but it also felt really good to skip making up arbitrary class names and focus entirely on the styling, which is what really matters.
I initially had some trouble keeping the styling consistent across different pages, but I found that once I had refactored some of my code into reusable components, this problem pretty much went away. At one point in time I even decided to change the colorscheme on the whole website from orange to blue and it was a surprisingly painless process.
Probably my biggest concern with Tailwind is that it makes for fairly messy HTML. It never got too bad for me, but I imagine that if I had a more complex UI design, things could get a bit out of hand.
I think I have to use Tailwind a bit more to really form an opinion on it, but at the very least I can say that I did not dislike it.

# Closing thoughts

This project was a huge learning experience for me, as I had no or minimal prior experience with many of the technologies that I used here (websockets, Angular, Tailwind, nginx, etc.).
It was also my first time actually hosting my webapp on a virtual server. That meant going through the process of buying a domain and pointing it to my server, figuring out how to get SSL/TLS certificates, configuring nginx and more.
There are a lot more improvements that could be made to the webapp, but I feel that I have already accomplished my goals with this project and I've overcome the most interesting and difficult challenges that this project has to offer. Therefore, I won't be continuing the development of this webapp for now.

# Screenshots

![screenshot](/images/quiz/landingpage.webp)
![screenshot](/images/quiz/dashboard.webp)
![screenshot](/images/quiz/create.webp)

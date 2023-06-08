📚 Welcome to The Code Wizard's Handbook 🧙‍♂️

The Code Wizard's Handbook is an extensive documentation website designed to empower software engineers at all levels, from beginners to advanced, in their journey to master the art of programming. 🚀

This repository serves as the central hub for The Code Wizard's Handbook, providing a wealth of knowledge on various topics essential to the field of software engineering. Dive deep into the realms of data structures, algorithms, and other fundamental ideas that form the backbone of programming. 💡

🌟 Key Features:
✨ Beginner-friendly explanations: We believe in demystifying complex concepts, breaking them down into simple, easy-to-understand explanations.
✨ Comprehensive coverage: Explore a wide range of topics, including data structures, algorithms, design patterns, system design, and more.
✨ Interactive code examples: Get hands-on experience through interactive code snippets and real-world scenarios.
✨ Progressive learning paths: Follow carefully curated learning paths, progressing from foundational knowledge to advanced techniques.
✨ Visual aids and illustrations: Enhance your understanding with visual diagrams and illustrations that elucidate abstract ideas.
✨ Community-driven contributions: Join our vibrant community of learners and contribute your insights to enrich the content.

Whether you are a newcomer taking your first steps into the world of programming or a seasoned professional seeking to enhance your skills, The Code Wizard's Handbook is here to empower you on your learning journey. 🌈✨

Visit our website at se-docs.vercel.app to unlock the secrets of software engineering and become a proficient Code Wizard! ⚡️

✨ Join our Community

Let's embark on an enchanting adventure into the depths of code wizardry! 🧙‍♂️✨

# Run locally

- Have `pnpm` package manager
- Have `Node` runtime installed
- Open code `dir` in editor
- Open `Terminal` and run:

```pnpm
pnpm i
```

- The run:

```pnpm
pnpm dev
```

- Open up localhost to see website

# Issues and resolutions

Deploying on vercel:

- Deploy normally however set a environment variable

```
VERCEL_FORCE_NO_BUILD_CACHE=1
```

Changing folder / file names:

- When you create a file make sure to have the stander:

- No caps lock an space is `-`

```
file-name
```

# Todo

rewrite all learning materials using the new format promt below

Done:

- Fundamentals: name checked, ordered them, renamed folder - fundamentals - data structures.
- Fundamentals: rewrite with new format.
- Data Structures: rewrite with new format.
- Data Structures: markdown is correct order `# ##`
- Renamed all questions and answers to use number points.
- Algorithms: added algorithms and in format.

Later to do:

- Sit done and listen / proof read all of it.
- Add SEO, og images and descriptions like next.site or use there api to make your own

Fact check each file and make sure they are consistent

## Chat GPT prompt used to make http material (Good standers to be used)

a comprehensive learning material guide for `HTTP ` = subject or `make me a step-by-step learning guide for variables and data types in programming:`

- Then prompt by saying explain `point one`
- Continue above until all points from guide have been met.

```
Sure! Here's a comprehensive learning material guide for HTTP (Hypertext Transfer Protocol):

## Learning Material Guide: HTTP

### 1. Introduction to HTTP
- Tutorial: [HTTP Tutorial for Beginners](https://www.tutorialspoint.com/http/index.htm)
- Article: [Introduction to HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- Video: [HTTP Explained](https://www.youtube.com/watch?v=iYM2zFP3Zn0)

### 2. HTTP Request Methods
- Tutorial: [HTTP Request Methods](https://www.tutorialspoint.com/http/http_methods.htm)
- Article: [HTTP Methods (GET, POST, PUT, DELETE)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- Video: [HTTP Methods Explained](https://www.youtube.com/watch?v=wWnFw3lRfBU)

### 3. HTTP Headers
- Tutorial: [HTTP Headers Tutorial](https://www.tutorialspoint.com/http/http_headers.htm)
- Article: [HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- Video: [HTTP Headers Explained](https://www.youtube.com/watch?v=SYdBOEYxWCA)

### 4. HTTP Status Codes
- Tutorial: [HTTP Status Codes Tutorial](https://www.tutorialspoint.com/http/http_status_codes.htm)
- Article: [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- Video: [HTTP Status Codes Explained](https://www.youtube.com/watch?v=9Eoh9merYlE)

### 5. HTTP Cookies
- Tutorial: [HTTP Cookies Tutorial](https://www.tutorialspoint.com/http/http_cookies.htm)
- Article: [HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- Video: [HTTP Cookies Explained](https://www.youtube.com/watch?v=9UOo91PDEBU)

### 6. HTTP Caching
- Tutorial: [HTTP Caching Tutorial](https://www.tutorialspoint.com/http/http_caching.htm)
- Article: [HTTP Caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
- Video: [HTTP Caching Explained](https://www.youtube.com/watch?v=SmZ_FEWLtoI)

### 7. Security and HTTPS
- Tutorial: [HTTP vs. HTTPS Tutorial](https://www.tutorialspoint.com/http/http_https.htm)
- Article: [HTTP vs. HTTPS](https://developer.mozilla.org/en-US/docs/Web/Security/HTTP_vs_HTTPS)
- Video: [HTTP vs. HTTPS Explained](https://www.youtube.com/watch?v=OEI8tqCq14o)

### 8. RESTful APIs and HTTP
- Tutorial: [RESTful API Tutorial](https://www.tutorialspoint.com/restful/index.htm)
- Article: [Building a RESTful API with HTTP](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_APIs)
- Video: [RESTful API Concepts](https://www.youtube.com/watch?v=Q-BpqyOT3a8)

### 9. Advanced Topics
- Tutorial: [HTTP/2 Tutorial](https://www.tutorialspoint.com/http/http2.htm)
- Article: [HTTP/2](https://developer.mozilla.org/en-US/docs/Glossary/HTTP_2)
- Video: [HTTP/2 Explained](https://www.youtube.com/watch?v=MCV3x2JPtKU)

### 10. Hands-On Projects and Practice
- Build a

 simple HTTP server using a programming language of your choice (e.g., Python, Node.js) and experiment with different HTTP methods and headers.
- Create a RESTful API using a framework like Flask or Express.js and test it with various HTTP clients (e.g., cURL, Postman).

By following this learning material guide, you will gain a comprehensive understanding of HTTP and its various aspects. Start with the basics and progressively move towards advanced topics and hands-on projects to solidify your knowledge and practical skills in working with HTTP.
```

`give me a introduction to http ` then `rewrite it in markdown and organise it into sections ` then `now explain HTTP Request Methods`

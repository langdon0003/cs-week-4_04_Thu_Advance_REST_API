**Requirements**


- [ ] As a client app I can make a GET request to http://localhost:5000/jobs and receive back an array of 20 jobs.
- [ ] As a client app I can make a GET request to http://localhost:5000/jobs?page=2 and receive an array, the 2nd array of 20 jobs(nums 20-40).
- [ ] As a client app I can make a GET request to http://localhost:5000/jobs?page=3 and receive an array, the 3rd array of 20 jobs(nums 40-60).
- [ ] As a client app I can make a GET request to http://localhost:5000/jobs?page=n and receive an array, the nth array of 20 jobs.
- [ ] As a client app I can make a GET request to http://localhost:5000/jobs?companyName=Facebook and receive back a list of jobs where the company name is Facebook.
- [ ] As a client app I can make a GET request to http://localhost:5000/jobs?title=Mobile and receive back a list of jobs where the title contains Mobile/mobile.
- [ ] As a client app I can make a GET request to http://localhost:5000/jobs?city=New York and receive back a list of jobs located in New York.
- [ ] As a client app I can make a GET request to http://localhost:5000/jobs?skills=React. and receive back a list of jobs where React is included in the skills.
- [ ] As a client app I can make a PUT request to http://localhost:5000/jobs/:id and add a property taken, which is true,
- [ ] As a client app I can make a DELETE request to http://localhost:5000/jobs/:id delete a job id.
- [ ] As a client app I can make PUSH to create a new job with the exact structure like other job.
- [ ] As a developer I can start my express server using the command npm run dev.
- [ ] As a developer I can see changes to my API reflected immediately, without the need to restart my server.
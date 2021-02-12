const express = require('express');

const server = express();

// request handlers

const handlePortofolioPatchRequest = (req, res)=>{
    res.send('<html><body><div style="width:600px; height:200px; background-color:red; text-align:center; color:white; margin-left: 27%; margin-top: 8%"><h1>Portofolio</h1><p style="font-size: 24px">No work to showcase now. But a lot on the way  </p><p>Created by <span>Justice Sowah</span>@Codetraingh.org</p></div></body></html>');
}

const handleSignUpPostRequest = (req, res)=>{
    res.send('<html><body><div style="width:600px; height:250px; background-color:red; text-align:center; color:white; margin-left: 27%; margin-top: 8%"><h1>Sign Up</h1><table style = "margin-left: 150px"><tr><td style = "color: white">First Name:</td><td><input type = "text" /></td></tr><tr><td style = "color: white">Last Name:</td><td><input type = "text" /></td></tr><tr><td style = "color: white">Email</td><td><input type = "email" /></td></tr><tr><td style = "color: white">Password:</td><td><input type = "password" /></td></tr><tr><td style = "color: white">Confirm Password:</td><td><input type = "password" /></td></tr></table><input type = "submit" value = "Submit" style = "margin-top: 20" /></div></body></html>');
}

const handleLoginPurgeRequest = (req, res)=>{
    res.send(
        '<html><body><div style="width:600px; height:200px; background-color:red; text-align:center; color:white; margin-left: 27%; margin-top: 8%"><h1>Login</h1><table style = "margin-left: 150px"><tr><td style = "color: white">Username:</td><td><input type = "text" /></td></tr><tr><td style = "color: white">Password:</td><td><input type = "password" /></td></tr></table><input type = "submit" value = "Submit" style = "margin-top: 20" /></div></body></html>'
    );
}

const handleContactPutRequest = (req, res)=>{
    res.send('<html><body><div style="width:600px; height:250px; background-color:red; text-align:center; color:white; margin-left: 27%; margin-top: 8%"><h1>Contact Us</h1><table style = "margin-left:220px"><tr><td style = "color: white">Cell:</td><td style = "color: white">0553577278</td></tr><tr><td style = "color: white">Office:</td><td style = "color: white">0302-550-669-333</td></tr><tr><td style = "color: white">fb:</td><td style = "color: white">@sowahtech</td></tr><tr><td style = "color: white">email:</td><td style = "color: white">sowahtech@gmail.com</td></tr></table></div></body></html>');
}

const handleAboutDeleteRequest = (req, res)=>{
    res.send(
        '<html><body><div style="width:600px; height:200px; background-color:red; text-align:center; color:white; margin-left: 27%; margin-top: 8%"><h1>Welcome to the about page</h1><p style="font-size: 24px">The about page was retrieved from the server using the DELETE request with the route `/about`</p><p>Created by <span>Justice Sowah</span>@Codetraingh.org</p></div></body></html>'
    );
}

const handleHomeGetRequest = (req, res)=>{
    res.send(
        '<html><body><div style="width:600px; height:200px; background-color:red; text-align:center; color:white; margin-left: 27%; margin-top: 8%"><h1>Welcome to the homepage</h1><p style="font-size: 24px">This home page was retrieved from the server using the GET request with the route `/`</p><p>Created by <span>Justice Sowah</span>@Codetraingh.org</p></div></body></html>'
        );
}

server.patch('/portofolio', handlePortofolioPatchRequest);
server.post('/signup', handleSignUpPostRequest);
server.purge('/login', handleLoginPurgeRequest);
server.put('/contact', handleContactPutRequest);
server.delete('/about', handleAboutDeleteRequest);
server.get('/', handleHomeGetRequest);

server.listen(3000, '127.0.0.1', ()=> console.log('server is ready'))
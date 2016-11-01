# Welcome!

This template is to be used for Server Side rendered projects.
It implements a session based login strategy.

# Steps to use the template:

The best way to use it is to fork it and then use it in your own projects.
Once you have it cloned in your localhost from your fork, make sure you implement the next steps:

1. Run `npm install`
2. Change the mongo database to the one you are using in `lib/dbConnect.js` line: 5.

 `const connectionURL = process.env.MONGOLAB_URI || 'mongodb://localhost/new_auth_template_app';`

## Licensing
Special Thanks to Darryl Ziegler, Joey Pinhas, Sang Minha, Valeria Di Gregorio

Rafa and Bobby for the templates we all based our code on.

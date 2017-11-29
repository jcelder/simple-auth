# Simple auth with DB

## Specs

- [x] I should be able to go to the `/` route and see the dashboard page
- [x] I should be able to sign up by going to the `/signup` route
  - [x] I need a schema which contains the users table
    - [x] columns - username, password
  - [x] write a function to insert a row into the `users` table
  - [x] need a page to render the signup form(GET route)
  - [x] need a POST route to insert user into the DB
- [x] I should be able to log in by going to the `/login` route

## Future Specs
- [ ] Passwords should be encrypted
  - [ ] rename the `password` column to `encrypted_password`
  - [ ] use `bcrypt` to create the encrypted password, before saving to the db
  - [ ] use `bcrypt` to compare user input with the stored encrypted password
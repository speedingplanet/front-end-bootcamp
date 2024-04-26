## Improving the Navbar

Don't use the NavbarChildren version. At least not yet.

- Add a click event handler to each of the <li> elements in NavBar.
- The event handler should use the `navigate` function to navigate to the appropriate URL
- It's fine to hard-code the URL values into the event handlers
- Getting the destination URL programmatically might be more complicated

## User details

Clicking on a Sender or Recipient sends us to the UserDetails via routing

We need the user id
We need to map that to some user details (data/users.json)
UserDetails component
Pass the details to UserDetails and the component displays said details
Need a route configuration and url for user details
/zippay/user/[user id goes here]

Does UserDetails get full user details or does it get a userId and look it up in users.json?

UserDetails is given a user object and renders it. Some parent/container/controller component does the lookup work.

<UserDetailsLookup>
  <UserDetails>
</UserDetailsLookup>

The router routes to the parent component.
The parent component uses `useParams` to get the user id
Parent looks up the user
Hands user info to UserDetails

## Remote data for our app

- Setup:
  - Change the port number in package.json, and remember the port number
  - Make sure you have server.json in your data folder:
    - git checkout john -- data/server.json
  -     "rest-server": "json-server --port 8100 ./data/server.json",
  - Start the remote server from a terminal with npm run rest-server
- In PaymentsGrid.jsx
  - Delete the import from payments.json. No more hardcoded data
  - Add a call to useEffect!
  - The URL should be localhost:8100/payments
  - Use the fetch command
  - Feel free to use either promises or async-await, whichever style you prefer
  - DO NOT forget to add an empty dependencies array to your useEffect call:
    - useEffect(() => {}, [])
  - If you're using useEffect and async-await, look at the async-await demo. You have to define the async function first and then call it. This is different with promises.
  - Test it by loading up PaymentsGrid and seeing if you have data!

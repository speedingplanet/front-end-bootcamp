# Front-end Labs

## Send/Receive Payments: Add Form

The Send/Receive Payments `pages/send-receive.html` page is a placeholder. Let's make that better!

1. Below the `nav` element, add a `main` element.
2. In the `main` element, add a `form`. No need for an `action` attribute
3. For each of the below, add a `label` and the appropriate form field (usually an `input` element). Consider wrapping each label+input combo in its own `div`.

- Sender
- Recipient
- Amount
- Reason

4. Add a submit button labeled "Send".
5. Check out the form in the browser. Don't worry about the layout, which we will fix soon.

## Send/Receive Payements: Improve form

Let's make the form a little bit better. We will add some validations to the form. After each of the validations, try submitting the form to see if the validation is successful.

1. The sender should default to the current user. We don't have that information right now, so you can set the default value to "Current User"
1. The recipient can't be empty. All of our usernames are at least four characters long. Validate this field
1. The amount must be positive, have only two decimal places, and be between $0.01 and $1000.00
1. The Reason can't be longer than 255 characters

## Account Settings: Add form

Now that we know forms pretty well, let's add a form all at once. Account settings should have the following:

1. First Name field, required, minimum length 2, alphabetical characters, spaces and dashes only. [The format is a challenge, feel free to come back to it when you get the rest of the form done]
2. Same for Last Name
3. Same for City
4. Add a State/Province field as a drop-down of US States. Don't write the drop-down yourself. Search on the internet for something like "html us states select list" and copy and paste that
5. Postal Code: Either five digit ZIP or ZIP+4 format. Remember that people live in states where the ZIP code starts with a zero, so you don't want this to be a numeric field
6. Email: Is there a custom field that could be helpful here?
7. Telephone: Similar?
8. Account type: Select from one of "Personal", "Corporate" or "Other". Is there a form widget that could help here? Select "Personal" by default.

## Recent Transactions

We want to add a "Recent Transactions" section to the "Balance" page `pages/balance.html`. We will use an HTML table to list recent transactions.

Here's the data set:

```csv
id,payorId,payeeId,datePaid,amount,reason
8,wvancastele6i,mloveguardhr,2022-09-06,51.37,sed tristique
91,wvancastele6i,ddunabie5j,2023-07-23,10.77,nec nisi vulputate
235,wvancastele6i,rbottell93,2024-02-26,79.09,eu tincidunt
494,wvancastele6i,mwallend6,2023-06-12,38.05,nunc donec quis orci eget orci vehicula condimentum curabitur
765,wvancastele6i,pbann7c,2022-06-01,89.99,turpis donec posuere metus vitae ipsum aliquam non mauris
```

We will assume the user is `wvancastele6i`. In the table we want to display:

- The payee (as the userid)
- The payment date
- The amount
- The reason (it's the pseudo-latin lorem ipsum text)

Remember that the structure of a table, generally, is

```html
<table>
	<thead>
		<tr>
			<th>Header for column 1</th>
			<th>Header for column 2</th>
			<th>Header for column 3</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Data for row 1, column 1</td>
			<td>Data for row 1, column 2</td>
			<td>Data for row 1, column 3</td>
		</tr>
		<tr>
			<td>Data for row 2, column 1</td>
			<td>Data for row 2, column 2</td>
			<td>Data for row 2, column 3</td>
		</tr>
		<!-- And so on -->
	</tbody>
</table>
```

## Navbar: Flexbox Layout

Currently, the navbar is a bulleted list, not ideal for a navbar. Let's improve it as follows:

1. Create a file `pages/navbar.html`. We will use this as our baseline. It can be a basic HTML page.
2. Decide whether you want to use an unordered list, or divs, to set up the navbar. Either one will work.

- If you use an unordered list, the `ul` is the container and the `li` elements are the children.
- If you use `div`s, the `nav` element is the container and the `div`s are the children
- You can always copy and paste the navbar from one of the existing pages into `pages/navbar.html`.

3. If you use an unordered list, you'll need to remove the `padding` and the `list-style-type` properties or things will look... weird.
4. Set the container up as a flexbox
5. Set up the children with a `flex` config

Check out the results! If you like them, copy and paste them into the other pages.

## Navbar: Putting it all together.

Take a look at data/navbar-design.png: ![Design for our Navbar](data/navbar-design.png).

What would we need to build out something like this in pages/navbar.html? Some suggestions:

1. Font from Google (take a look at front-end-demos/pages/css/fonts.html for an example)
2. Icons also from Google (front-end-demos/pages/css/icons.html to see an example of this)
3. Flexbox layout for the content
4. Font size and coloring as well
5. Spacing between elements
6. And when you hover over an icon, it has a different background color

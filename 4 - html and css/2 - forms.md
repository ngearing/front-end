# Forms

Forms capture user input and allow you to validate the data before processing it.
There are various types of form inputs that can be used like:

- Button (Submits a form)
- Checkbox (Allows users to select multiple options from a list)
- Radio (Lets users choose only one option from a list)
- Select (A drop down menu for selecting an option)
- Submit (Similar to button but with default styling)
- Text (For single line text input)
- Password (For password fields - characters are hidden)
- File (Used for uploading files)
- DateTime-local , Date, Time, Month, Week (Select dates or times)
- Hidden (Hidden field which is sent in the request body)
- Image (Image submit button)
- Reset (Resets all fields in a form)
- Search (Search box - shows search icon on right side)
- Week (Week selection control)
- Month (Month selection control)
- Email Input - validates if an email address is in a correct format.
- Tel Input - validates if a telephone number is in the right format.
- Url Input - checks whether or not a URL is formatted correctly.
- Date Input - ensures that a given date falls within a specific range (e.g., between January 1, 2003, and December 31, 2004).
- Time Input - ensures that time values fall within a specific range (e.g., between 00:00 and 23:59).
- Number Input - restricts what characters users may enter into a field, allowing only numbers.
- Range Input - makes sure that the value entered falls within a specified numeric range.
- Color Input - verifies if the color provided by the user is valid.
- Fieldset - Groups related form controls together under a common title.
- Datalist - Provides a predefined set of suggestions for user input.

Here is sample sign up form:
html`<form method="POST">
<label>Name</label><br/>
<input type="text" name="name"><br/>
<label>Email</label><br/>
<input type="email" name="email">
<button type="submit">Sign Up</button>

</form>`;

## Client side validation

Using html and css we can guide users to enter the correct data of forms.
To ensure that users provide value to the filled and to save on server requests we can use the `required` attribute to inform the user that the form is empty.

We can also use the `minlength` and `maxlength` attributes to ensure users enter correct length values.

And then we can use css to invalid fields. `input:invalid`.

`min` and `max` attributes can be used to limit the range of acceptable values.

`multiple` indicates that the user can enter more than one value in a single field. This attribute is supported in `<select>`, `<input>`, and `<textarea>` elements.

`pattern` attribute allows us to specify a regular expression pattern that the input’s value must match in order for it to pass validation. Handy for telephone fields.

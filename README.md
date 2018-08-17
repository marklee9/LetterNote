# Letternote

[Letternote](https://letter-note.herokuapp.com/) is a clone of famous note taking web app Evernote. Letternote is a single page application developed using Ruby, Rails, and PostgreSQL for the backend and React and Redux for the frontend. Letternote incorporated Font Awesome, Google Font, React-Quill, and Animate.css libraries. The project was designed and built in 10 days.

Letternote let users to create notebooks that contains many notes that users can create, allowing users to manage their notes by organizing the notes with notebooks. 

### Home page
<img width="1440" alt="home" src="https://user-images.githubusercontent.com/39206890/44290132-23578880-a22c-11e8-9691-f738262a7b35.png">


### Sign in page
<img width="1334" alt="screen shot 2018-08-17 at 2 48 41 pm" src="https://user-images.githubusercontent.com/39206890/44290265-bc869f00-a22c-11e8-9474-6bbb45ea059e.png">

### Main page
<img width="1339" alt="screen shot 2018-08-17 at 2 51 01 pm" src="https://user-images.githubusercontent.com/39206890/44290310-fce61d00-a22c-11e8-98f9-1b19bcb43df2.png">

### Letternote
<img width="1266" alt="screen shot 2018-08-17 at 3 20 12 pm" src="https://user-images.githubusercontent.com/39206890/44291249-08881280-a232-11e8-8fbc-fc5df26000b3.png">

<br />
<br />
# Features

  * Secure frontend to backend user authentication using BCrypt.
  * Users can create and edit notes using a Quill-enabled rich text editor.
  * Notes support images and animated GIFs.
  * Users can see all the notes they created.
  * Users can see notes from the notebook of interest.

## Displaying User's notebooks

  Every notebooks that user create are only accessible by that particular user. When user is logged in, the logged in user will only see the notebooks that current user created. 

  <img width="1117" alt="screen shot 2018-08-17 at 3 04 50 pm" src="https://user-images.githubusercontent.com/39206890/44290733-f8baff00-a22e-11e8-83ae-811110cd3928.png">

Every user gets their own unique session id. When a user signs in, that user's session id is used to match all the notebooks that matches user's session id.

```js
//Notebooks are filtered through session id in entities. Only filtered notebooks are returned.

export const selectNotebooks = state => {
  return Object.values(state.entities.notebooks)
    .filter((note) => 
      note.author_id === state.session.currentUserId);
};
```

## Saving User's updates

There are many different ways to handle save the content of user's input. Letternote uses debounce from lodash to save users input. Debounced action gets triggered when user stopped inputting for specific amount of time. As how Letternote is currently set, user's input will be saved after 1 second of idle time.

```js
// Action note will be invoked when user stopped typing for 1 second.
import { debounce } from 'lodash';

handleChangeBody(value) {
  this.setState({ body: value }, 
    debounce(this.actionNote, 1000)
    );
  }

handleChangeTitle(e) {
  this.setState({ title: e.target.value }, 
    debounce(this.actionNote, 1000)
  );
}
```

### Keeping code DRY

To keep code DRY, similar components were combined into a singular, more adaptable component to avoid rendering multiple copies of what was essentially the same html in different classes. This was done for Sign in and Sign up page as well as sign up form on the side of the main page.


```js
// By passing different formType props, the sign up form will render differently.

renderMessage() {
  if (this.props.formType === "Sign in") {
    return <h6>Don't have an account?</h6>;
  }
  return <h6>Already have an account?</h6>;
}

renderSubmitButtonMessage() {
  if (this.props.formType === "Sign in") {
    return <p>Continue</p>;
  }
  return <p>Create Account</p>;
}

renderTerms() {
  if (this.props.formType === "Sign in" ||  this.props.errors.length > 0) {
    return <p></p>;
  }
  return (
    <p className="term-p"> 
      By clicking Create Account, I agree to the 
      <a className="terms">
        Terms of Service
      </a> 
      and 
      <a className="terms">
        Privacy Policy
      </a>.
    </p>
  );
}
```
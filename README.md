# Sign-in Google Button

## Installation

`$ npm i --save @headbright/sign-in-google`

The package defines a vue [plugin](https://vuejs.org/v2/guide/plugins.html) so you need to import and use it in your Vue app:

```
import HbSignInGoogle from '@headbright/sign-in-google'

Vue.use(HbSignInGoogle)
```

Render the component template

```
<hb-google-signin-button :params="signInParams" @success="handleSuccess" @error="handleError">
    Sign-in with Google
</hb-google-signin-button>
```

The params prop is an object with the designated auth2 parms as described here: https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams

For example:

```
signInParams: {
    client_id: '<your client id>'
}
```

Once the login process succeeds, the `@success` event handler will be called with a google user object.

```
onSignInSuccess (user) {
    // user is an instance of GoogleUser. See https://developers.google.com/identity/sign-in/web/reference#users
    const profile = user.getBasicProfile()
}
```

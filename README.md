# service-intent-string
One succint string to expess an user's intent across a service.

## Features
- URI-component safe, i.e `window.encodeURIComponent(ServiceIntentString) === ServiceIntentString`
- can describe a multitude of potential intents
- human and machine parsable
- succint
- extendable

## Idea
Construct simple natural-language-inspired sentences to describe an intent.
By constructing a simple [Subject-verb-object](https://en.wikipedia.org/wiki/Subject%E2%80%93verb%E2%80%93object) 
"sentence" we should be able to express most possible intents.

**SUBJECT** +  **VERB** + **OBJECT**

If no **OBJECT** -> assume subject want's to act on itself.

`.` delimiter is used between subject/verb/object.

### Subject
An actor within a service. Alphanumeric strings to the right of `_` delimiter are more-specific actor identifiers. 
- `user`
- `user_82323`
- `user_non-paying`
- `administrator`

### Verb
Something an actor can do
- `view`
- `pay`
- `configure`
- `onboard`

### Object
Something an actor can act on. Alphanumeric strings to the right of `_` delimiter are more-specific object identifiers.
- `company`
- `invoice_13452`

### Examples
Known user wants to pay a specific invoice
`user_3291.pay.invoice_432432`
Unknown user wants to see it's profile
`user.view`
Administrator wants to configure a specific user
`administrator_290392.configure.user_294382`
Unknown user wants to view specific company
`user.view.company_829839`

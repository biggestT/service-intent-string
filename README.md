# service-intent
With a single string, an users intent can be conveyed between different applications across a service.

## Features
- URI-component safe, i.e `window.encodeURIComponent(ServiceIntentString) === ServiceIntentString`
- can describe a multitude of potential states across our different apps
- human parseable
- succint
- extendable

## Idea
Use a subset of natural language sentences in order to describe an intent.
By constructing a simple [Subject-verb-object](https://en.wikipedia.org/wiki/Subject%E2%80%93verb%E2%80%93object) 
"sentence" we should be able to express most possible intents.

**SUBJECT** +  **VERB** + [**OBJECT**]

If **OBJECT** is not provided we assume subject want's to act on itself.

### Characters
We only use URI-component safe character:
`.` delimiter between subject/verb/object
`_` delimiter within a subject/verb/object, alphanumeric strings to the right of this delimiter 
should be more specific identifiers of the subject/verb/object in question.
`-` to concatenate alphanumeric strings

### Subject
An actor within your service
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

### Object (Optional)
Something an actor can act on
- `company`
- `invoice_13452`

### Examples
- Known user wants to pay a specific invoice:
`user_3291.pay.invoice_432432`
- Unknown user wants to see it's profile
`user.view`
- Administrator wants to configure a specific user
`administrator_290392.configure.user_294382`
- Unknown user wants to view specific company
`user.view.company_829839`

# service-intent-string
One succint string to expess an intent across web applications.

>An intent is an abstract description of an operation to be performed.
>An Intent provides a facility for performing late runtime binding between the code in different applications. 
>Its most significant use is in the launching of activities, where it can be thought of as the glue between activities.
>It is basically a passive data structure holding an abstract description of an action to be performed.
>[developers.android]

This is an intent format for multi-app services that can be passed to an application in e.g an URL query param or fragment 
and then be parsed into a specific state within that application.

## Features
- URI-component safe, i.e `window.encodeURIComponent(ServiceIntentString) === ServiceIntentString`
- can describe a multitude of potential intents
- human and machine parsable
- framework/routing agnostic
- succint
- extendable

## Idea
Construct simple natural-language-inspired sentences to describe an intent.
By constructing a simple [Subject-verb-object](https://en.wikipedia.org/wiki/Subject%E2%80%93verb%E2%80%93object) 
"sentence" we should be able to express most possible intents. Only here we substitute subject with "actor" and verb 
with "action" to narrow things down a bit more to an application-context.

**ACTOR** +  **ACTION** + **OBJECT**

If no **OBJECT** -> assume actor want's to act on itself.

`.` delimiter is used between subject/verb/object.

### Actor
An actor within a service. Alphanumeric strings to the right of `_` delimiter are more-specific actor identifiers. 

### Action
Something an actor can do

### Object
Something an actor can act on. Alphanumeric strings to the right of `_` delimiter are more-specific object identifiers.


### Examples
Known user wants to pay a specific invoice
- `user_3291.pay.invoice_432432`

Unknown user wants to see it's profile
- `user.view`

Administrator wants to configure a specific user
- `administrator_290392.configure.user_294382`

Unknown user wants to view specific company
- `user.view.company_829839`


## Installation

``` bash
npm install service-intent-string --save
```

## Usage

``` javascript
## Outgoing
import { serializeIntent } from 'service-intent-string';

const intentParam = serializeIntent({
    actor: 'user',
    action: 'configure',
    object: 'notifications'
});

window.location.href = `another-app-within-service.com#intent=${intentParam}`

## Incoming
import { parseIntent } from 'service-intent-string';

const intent = parseIntent(methdoToGetFragmentFromUrl('intent'));

# have app translate intent.actor, intent.action and intent.object into an internal state ...
```


[developers.android]: https://developer.android.com/reference/android/content/Intent.html

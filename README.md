# @codeekage/schema
 
Schema is an open source `0` dependency package inspired by the schemaless nature of Firebase. Schema helps you add "schema" definitions to a schemaless database you'd prefer to have schemas, like Firebase. Schema also comes with Typescript Lang support. 

Schema is pretty easy to use, and to get started with. 

## Installation

```shell 
  npm i @codeekage/schema
```

## Usage

```js 
import { schema } from '@codeekage/schema'

const UserSchema = schema({
  firstname: {
    type: "string",
    required: true,
    value: "Joe"
  },
  lastname: {
    type: "string",
    required: true,
    value: "Doe"
  },
  email: {
    type: "string",
    value: "joedoe@example.com",
    required: true
  },
  phone_number: {
    type: "string",
    required: true,
    value: "555-555-555"
  },
  id_number: {
    type: "number",
    required: true,
    value: 0123456789
  }
});
```

Schema returns an object like so:
 ```js
 {
  firstname : "Joe",
  lastname : "Doe",
  email : "joedoe@example.com",
  phone_number: "555-555-555",
  id_number: 0123456789
 }
```

and returns `TypeError` if the supplied value does not match the `type` defined for a `field`. If a `field` is defined with 
`required: false` the `type` for the `field` is also ignored, but if `true` the `field` type is enforced.
   
   
   
   
  

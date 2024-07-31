## Graphql
1. type of requesting protocol
2. graph-ql api's
3.not q filed schema as responde

## Benifits
1. no of requests decreases
2. getting only required data
3. no wastage or unveven transfereed to data
4. data retrivel is client side defined
5. strongly typed

``` graphql
query {
  getUser(id: "1") {
    id
    email
    firstname
  }
}

mutation {
  createUser(input: { email: "naman@gmail.com", firstname: "naman", lastname: "agarwall"}){
  	email,
    id,
    lastname
  }
}
```

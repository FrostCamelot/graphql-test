# graphql-test
#### Use [graphpack|https://github.com/glennreyes/graphpack]

- mkdir graphql-test
- cd graphql-test
- npm init -y
- npm install --save-dev graphpack
- add in package.json:
 "scripts": {
    "dev": "graphpack",
    "build": "graphpack build"
}
- npm run dev

### Queries

##### Users
 ```
query {
   users {
     id
     name
     email
     age
   }
 }
```

##### User
```
 query {
   user(id: 1) {
     id
     name
     email
     age
   }
 }
```


##### Customer
```
 query CustomerScreen {
   customer {
     companyName
     address {
       city
       country
     }
   }
 }
```

##### Customer with fragment
```
 query CustomerScreen {
   customer {
     ...CustomerCard
   }
 }

 fragment CustomerCard on Customer {
   companyName
   address {
     city
     country
   }
 }
```

##### Пример того, как объединять фрагменты, смысл фрагментов в том, чтобы переиспользовать код с привязкой к query

##### personnn with two fragments
```
fragment CoreImage_data on Image {
  url
  size
}

fragment PersonProfile on Person {
  nickname
  avatar {
    ...CoreImage_data
  }
}

query CustomerScreen {
  personnn {
    ...PersonProfile
  }
}
```


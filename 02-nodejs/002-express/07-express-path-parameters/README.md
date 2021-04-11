# 002-07-express-path-parameters

Udemy the web developer bootcamp
Section33 Express path parameters

# a param

```javascript
app.get('/students/:name', ...)
```



url: /students/Preetha

req.params/name === 'Preetha'

{ name: "Pretha"}




## muliple params

```javascript
app.get('/students/:name/:id', ...)
```

url: /students/Peter/0324

{ name: "Peter", id: "0324"}
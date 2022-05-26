const express = require('express');
const app = express();

app.get('/', (_, res) => {
    res.send('Hello World!')
})

app.listen(5000, () => console.log('Server is up and running'));
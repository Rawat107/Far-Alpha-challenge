const express = require('express');
const app = express();
const PORT = process.env.PORT || 80

app.get('/sayHello', (req, res) => {
    res.json({ message: 'Hello User' });
});


app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
});






const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/userdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.post('/submit', async (req, res) => {
    const { name, age, email } = req.body;
    try {
        const user = new User({ name, age, email });
        await user.save();
        res.status(200).send('User saved');
    } catch (err) {
        res.status(500).send('Error saving user');
    }
});

app.listen(3000, () => console.log('Backend running on port 3000'));

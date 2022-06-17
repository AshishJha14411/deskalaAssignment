const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors')
connectDB();
app.use(express.json({extended: false}))
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.get('/',(req,res) => res.send('API Running'))


app.use('/api/users', require('./routes/api/users'))

app.use('/api/auth', require('./routes/api/auth'))

app.use('/api/candidate', require('./routes/api/candidate'))
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 
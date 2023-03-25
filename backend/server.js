const mongoose = require('mongoose');
const express = require('express');

const app = express();
const port = 8070;

app.use(express.json());

mongoose.connect('mongodb+srv://user4aflab06:y3s1aflab06@mycluster.gdplgnf.mongodb.net/AF-Lab-06?retryWrites=true&w=majority',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function(){
    console.log('Connected to MongoDB!');
});

const studentSchema = new mongoose.Schema({
    name: String,
    studentId: String
});

const Student = mongoose.model('Student', studentSchema);

app.get('/api/students', async(req, res)=>{
    const student = await Student.find();
    res.status(200).json(student);
});

app.listen(port, ()=>{
    console.log(`Sever is up and running on port ${port}`);
});
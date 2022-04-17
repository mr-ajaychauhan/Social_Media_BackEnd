import * as express from 'express';
import { getEnvironmentVariable } from './environments/env';
const mongoose = require("mongoose");



let app: express.Application = express();

app.listen(6000, () => {
    console.log('server is running at port 5000');

});


mongoose.connect(getEnvironmentVariable().db_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})
.then(() => {
    console.log('mongodb are connceted');

}).catch((err : any) => {
    console.log(err);
    
});


app.get('/api/user/login', (req, res) => {
    res.send('Success ');
});

app.get('/api/user/signup', (req, res) => {
    const data = [{ firstName: "Ajay Chauhan" }]
    res.status(200).send(data);
});


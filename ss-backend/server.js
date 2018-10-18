const express = require('express');
const db = require('./data/db');
const server = express();
const cors = require('cors');

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('ss-backend');
});

//////////// Endpoints ////////////////

server.get('/members', (req, res) => {
    db('members')
        .then(members => {
            res.status(200).json(members);
        })
        .catch(error => res.status(500).json(error));
});

server.get('/members/:id', (req, res) => {
    const { id } = req.params;
    db('members')
        .where({ id })
        .then(members => {
            res.status(200).json(members);
        })
        .catch(error => res.status(500).json(error));
});

server.post('/members', (req, res) => {
    const member = req.body;
    db.insert(member)
        .into('members')
        .then(ids => {
            const id = ids[0];
            res.status(200).json(id, ...member);
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

server.put('/members/:id', (req, res)=>{
    const changes=req.body;
    const {id}=req.params;
    db('members')
    .where('id','=', id)
    .update(changes)
    .then(count=>{
        res.status(200).json(count);
    })
    .catch(error=>{
        res.status(500).json(error);
    });
});

server.delete('/members/:id', (req, res) => {
    const {id} = req.params;
    db('members')
    .where({id})
    .del()
    .then(count => {
        res.status(200).json(count);
    })
    .catch (error => {
        res.status(500).json(error);
    });
});


///////////////////////////////////////

const port = 7000;
server.listen(port, function () {
    console.log(`\n==== Web API listening on http://localhost:${port} ====/n`)
})
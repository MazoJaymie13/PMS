const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(cors());

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json({limit: '100mb'}));// Override Large JSON Size Request Limit


// ========================== your connection here ==============================//
const knex_sd_sql_training = require('knex')({
    client: 'mssql',
    connection: {
        server: 'sd_sql_training',
        user: 'sa',
        password: '81at84',
        database: 'Jai',
        options: {
            "enableArithAbort": true
        }
    }
});

const knex_m_Users=require('knex')({
    client:'mssql',
    connection:{
            server:'sd_sql_training',
            user:'sa',
            password: '81at84',
            database: 'Jai_ProjectManagementSystem',
            options: {
                "enableArithAbort":true
            }
    }
})

// ========================== your routes here ==============================//
// router.get('/', (req, res) => {
// 	    res.send('Hello world!')
// 	});

// ========================== GET ==============================//
router.get('/m_Users', (req, res) => {
    knex_m_Users.select()
      .from("m_Users")
      .then(data => {
          res.send(data)
      }).catch(err => { res.send(err) })
});

router.get('/m_UserLevels', (req, res) => {
    knex_m_Users.select()
      .from("m_UserLevels")
      .then(data => {
          res.send(data)
          console.log(data)
      }).catch(err => { res.send(err) })
});



        // LOG-IN
router.get('/login2/:USER/:PASSWORD', (req, res) => {
    knex_m_Users.select()
      .from("m_Users")
      .where('Usercode', req.params.USER)
      .andWhere('Password', req.params.PASSWORD)
      .then(data => {
          res.send(data)
          console.log('Sucess')
      }).catch(err => { 
        console.log(err) })
});

router.get('/m_Users', (req, res) => {
    knex_m_Users.select('')
        .from("Users")
        .then(data => {
            res.send(data)
        }).catch(err => { res.send(err) })
});





// ========================== POST ==============================//
router.post('/Gitlab_UserDelete/:id', (req, res) => {
	knex_sd_sql_training('Users')
		.del()
		.where('ID', req.params.ID)
		.then(data => {
			res.send(data)
		}).catch(err => { res.send(err) })
});

module.exports = router;
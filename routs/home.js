const express= require ('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.render('index', {title:"my tuil",message: 'Hello there!' })
  });


module.exports = router
const express = require('express');
const { index, store, read, update, remove  } = require('../controllers/TaskController');

const router = express.Router();

router.get('/', index);
router.post('/add', store);
router.get('/:id', read);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
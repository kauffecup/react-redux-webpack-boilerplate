import express from 'express';
const router = new express.Router();

router.get('/customroute', (req, res) => {
  res.json({foo: 'bar'});
});

export default router;

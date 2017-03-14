import Express from 'express';

const router = new Express.Router();

router.use((req, res, next) => {
  if (req.url.substr(-1) !== '/') {
    res.redirect(301, `${req.url}/`);
  } else {
    next();
  }
});

router.use('/home', (req, res) => {
  res.redirect(301, '/');
});

router.use('/index.php', (req, res) => {
  res.redirect(301, '/');
});

router.use('/index.html', (req, res) => {
  res.redirect(301, '/');
});

export default router;

import Express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

import { NEXMO_API_SECRET, NEXMO_API_KEY, SMS_BRAND } from '../config';

const router = new Express.Router();
router.use(bodyParser.json());

const IS_NEXMO_ENABLED = NEXMO_API_KEY && NEXMO_API_SECRET;

router.post('/sms/verify', (req, res) => {
  if (!IS_NEXMO_ENABLED) {
    return res.json({
      request_id: 'ffce2d1036bb4cee8c1b20b36ca109b4',
      status: '0',
    });
  }

  return fetch('https://api.nexmo.com/verify/json', {
    method: 'POST',
    body: JSON.stringify({
      api_key: NEXMO_API_KEY,
      api_secret: NEXMO_API_SECRET,
      number: req.body.phone_number,
      brand: SMS_BRAND,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json().then(json =>
    res.status(json.status === '0' ? 200 : 422).json({
      error_text: json.error_text,
      status: json.status,
      request_id: json.request_id,
    })
  ));
});

router.post('/sms/verify/:request_id/check', (req, res) => {
  if (!IS_NEXMO_ENABLED) {
    if (req.body.code === '123456') {
      return res.json({
        request_id: 'ffce2d1036bb4cee8c1b20b36ca109b4',
        status: '0',
      });
    }

    return res.status(422).json({
      error_text: 'The code provided does not match the expected value',
      status: 16,
      request_id: 'ffce2d1036bb4cee8c1b20b36ca109b4',
    });
  }

  return fetch('https://api.nexmo.com/verify/check/json', {
    method: 'POST',
    body: JSON.stringify({
      api_key: NEXMO_API_KEY,
      api_secret: NEXMO_API_SECRET,
      request_id: req.params.request_id,
      code: req.body.code,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json().then(json =>
    res.status(json.status === '0' ? 200 : 422).json({
      error_text: json.error_text,
      status: json.status,
      request_id: json.request_id,
    })
  ));
});

export default router;

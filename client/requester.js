import request from 'superagent';

export function exampleRequest(url) {
  return new Promise((resolve, reject) => {
    request.get(url)
      .query({})
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.body);
        }
      });
  })
}
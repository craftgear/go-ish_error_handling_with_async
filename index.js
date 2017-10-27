const yay = () =>
  new Promise((resolve, reject) => {
    resolve({ success: true });
  });

const success = async callback => {
  const { err, ...result } = await yay().catch(e => ({ err: e }));

  if (err) {
    callback(err);
    return;
  }
  callback(null, result);
};

const nay = callback =>
  new Promise((resolve, reject) => {
    reject(new Error('error!'));
  });

const failure = async callback => {
  const { err, ...result } = await nay().catch(e => ({ err: e }));

  if (err) {
    callback(err);
    return;
  }
  callback(null, result);
};

(async () => {
  await success((err, result) => {
    console.log('********* the result is', result);
  });
  failure((err, result) => {
    console.log('********* the err is', err.message);
  });
})();
// cbc9bf0643892353c3b29a87501730b2;
// b7ccabbe64b175f132b58ca40fd7ab3b;

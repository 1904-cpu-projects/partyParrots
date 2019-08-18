const parseError = require('./parseError');

const formatMessages = errMsgs => {
  const msgs = {};

  for (let attribute in errMsgs) {
    if (errMsgs.hasOwnProperty(attribute)) {
      const errs = errMsgs[attribute];
      msgs[attribute] = errs.join(' ');
    }
  }

  return { errors: msgs };
};

const parseErrors = errors => {
  const errMessages = errors.reduce((errs, err) => {
    const msg = parseError(err);
    if (msg && msg.length) {
      const path = err.path;
      if (errs[path]) {
        errs[path].push(msg);
      } else {
        errs[path] = [msg];
      }
    }
    return errs;
  }, {});
  return formatMessages(errMessages);
};

module.exports = parseErrors;

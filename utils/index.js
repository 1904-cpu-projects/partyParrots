class Cache {
  constructor() {
    this.data = {};
  }

  hasKey(key) {
    return this.data.hasOwnProperty(key);
  }

  set(key, value, expiration) {
    this.clear(key);

    const oneMinute = 1000 * 60 * 1;
    expiration = expiration || oneMinute;

    const data = { value };

    if (expiration && parseInt(expiration, 10) > 0) {
      const toFunc = setTimeout(() => this.clear(key), expiration);
      data.toFunc = toFunc;
    }

    this.data[key] = data;
  }

  get(key) {
    return this.hasKey(key) ? this.data[key].value : null;
  }

  clear(key) {
    if (this.hasKey(key)) {
      if (this.data[key].toFunc) {
        clearTimeout(this.data[key].toFunc);
      }

      this.data[key].value = null;
      delete this.data[key];

      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Cache };

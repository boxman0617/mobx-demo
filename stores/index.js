import { action, observable, computed } from 'mobx';

let store = null;

const pad = (n, p = 2) => n.padStart(p, '0');

class Store {
  interval = 1000;
  @observable lastUpdate = 0;
  @observable light = false;

  @computed
  get toDate() {
    return new Date(this.lastUpdate);
  }

  @computed
  get hoursProgress() {
    return (parseInt(this.hours) / 24) * 100;
  }

  @computed
  get minutesProgress() {
    return (parseInt(this.minutes) / 60) * 100;
  }

  @computed
  get secondsProgress() {
    return (parseInt(this.seconds) / 60) * 100;
  }

  @computed
  get milliProgress() {
    return (parseInt(this.milli) / 1000) * 100;
  }

  @computed
  get hours() {
    return pad(this.toDate.getUTCHours().toString());
  }

  @computed
  get minutes() {
    return pad(this.toDate.getUTCMinutes().toString());
  }

  @computed
  get seconds() {
    return pad(this.toDate.getUTCSeconds().toString());
  }

  @computed
  get milli() {
    return pad(this.toDate.getUTCMilliseconds().toString(), 3);
  }

  @computed
  get milliOnes() {
    return this.milli.substr(2, 1);
  }

  @computed
  get milliTens() {
    return this.milli.substr(1, 1);
  }

  @computed
  get milliHundreds() {
    return this.milli.substr(0, 1);
  }

  constructor(isServer, lastUpdate, interval = 1000) {
    this.lastUpdate = lastUpdate;
    this.interval = interval;
  }

  @action
  start() {
    this.light = true;
    console.log('Started', this.interval);
    this.timer = setInterval(this.tick, this.interval);
  }

  @action
  tick = () => {
    this.lastUpdate = Date.now();
  };

  stop = () => {
    console.log('Stopped', this.timer);
    clearInterval(this.timer);
  };
}

export function initStore(isServer, lastUpdate = Date.now(), interval) {
  if (isServer) {
    return new Store(isServer, lastUpdate, interval);
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate, interval);
    }
    return store;
  }
}

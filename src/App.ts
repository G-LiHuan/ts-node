import * as http from 'http';

class App {
  public server

  constructor() {
    this.server = http.createServer();
  }

}

export default new App().server;
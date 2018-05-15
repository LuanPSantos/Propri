exports.config = {
  directConnect: true,
  specs: ['./e2e/*e2e-spec.ts'],
  baseUrl: 'http://localhost:4200/',
  multiCapabilities:
  [
      {
      'browserName': 'firefox'
      }, 
      {
      'browserName': 'chrome'
      }
  ],
  onPrepare() {
      require('ts-node').register({
          project: 'e2e/tsconfig.e2e.json'
      });
      
  }
};
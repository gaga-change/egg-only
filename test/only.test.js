'use strict';

const mock = require('egg-mock');

describe('test/only.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/only-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, only')
      .expect(200);
  });
});

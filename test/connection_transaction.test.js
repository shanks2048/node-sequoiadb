/**
 *      Copyright (C) 2015 SequoiaDB Inc.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

'use strict';

var expect = require('expect.js');
var common = require('./common');

describe('Connection Transaction', function () {
  var conn = common.createConnection();

  before(function (done) {
    conn.ready(function () {
      done();
    });
  });

  after(function (done) {
    conn.disconnect(done);
  });

  xit('transactionBegin should ok', function (done) {
    conn.transactionBegin(function (err) {
      expect(err).to.not.be.ok();
      done();
    });
  });

  xit('transactionCommit should ok', function (done) {
    conn.transactionCommit(function (err) {
      expect(err).to.not.be.ok();
      done();
    });
  });

  xit('transactionRollback should ok', function (done) {
    conn.transactionRollback(function (err) {
      expect(err).to.not.be.ok();
      done();
    });
  });
});
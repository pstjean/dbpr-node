'use strict';

var dbpr = require('../lib/dbpr.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.dbpr = {
    setUp: function(done) {
        // setup here
        done();
    },
    'outputs well-formatted dbpr': function(test) {
        test.expect(322);
        var rating = dbpr.rating().split(' ');
        for(var i = 0; i < rating.length; i++) {
            test.equal(rating[i], 'nyx','should be nyx. nyxnyxnyx.');
        }
        test.done();
    }
};

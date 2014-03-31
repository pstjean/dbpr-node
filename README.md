[![Build Status](https://travis-ci.org/pstjean/dbpr-node.svg?branch=master)](https://travis-ci.org/pstjean/dbpr-node)

dbpr-node
=========

An implementation of the Dotabuff Pro Rating algorithm in Node.js

Node module
===========

The actual implementation of the DBPR algorithm can be found in the dbpr module `lib/dbpr.js`.

Examples
========

You can find real-world examples using the dbpr module in the `lib` directory. The `console.js` module simply prints the rating to stdout, while the `server.js` module will initialize a server which returns the rating as an HTTP response.

Testing
=======

To ensure the integrity of the dbpr modules results, unit testing has been implemented using [nodeunit](https://github.com/caolan/nodeunit). You may find tests in the `test` directory.

322
===

In the process of implementing the DBPR algorithm, I found an edge case (actually all cases) where running the code resulted in an infinite loop. Although that implementation included an adorable Zoidberg face in the for loop (`for (;;)`), I decided to limit the results of the DBPR algorithm to 322, to avoid the edge case mentioned above (again, actually every single case) and because Solo is somehow playing in Starladder again despite the fact that I was 99% sure I heard he had a lifetime ban from that tournament.

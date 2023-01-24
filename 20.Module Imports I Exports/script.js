// imports/exports

import {pi, a} from './external.js'; // named import

console.log(pi, a);
// 3.14 2.9

import {pi as PI, a as A} from './external.js'; // named import

console.log(PI, A);
// 3.14 2.9


import * as test from './external2.js'; // named import

console.log(test.a);
// 4.9


// default import
import external from './all_export.js';

console.log(external);
// 2.99




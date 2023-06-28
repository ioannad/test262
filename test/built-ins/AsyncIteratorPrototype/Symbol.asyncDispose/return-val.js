// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%asynciteratorprototype%-@@asyncDispose
description: Return value of @@asyncDispose on %AsyncIteratorPrototype%
info: |
  %AsyncIteratorPrototype% [ @@asyncDispose ] ( )

  1. Let O be the this value.
  2. Let return be ? GetMethod(O, "return").
  3. If return is not undefined, then
    a. Perform ? Call(return, O, « »).
  4. Return undefined.

features: [explicit-resource-management]
---*/

async function* generator() {}
const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(generator.prototype))

assert(AsyncIteratorPrototype[Symbol.asyncDispose]() instanceof Promise);

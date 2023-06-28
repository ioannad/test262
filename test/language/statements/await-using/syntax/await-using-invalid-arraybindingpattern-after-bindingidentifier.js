// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    'await using' does not allow ArrayBindingPattern in lexical bindings, even after a valid lexical binding
negative:
  phase: parse
  type: SyntaxError
flags: [async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/

asyncTest(async function() {
  await using x = null, [] = null;
});
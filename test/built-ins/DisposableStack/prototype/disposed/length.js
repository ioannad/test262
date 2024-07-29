// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-disposablestack.prototype.disposed
description: >
  DisposableStack.prototype.disposed.length value and descriptor.
info: |
  get DisposableStack.prototype.disposed

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

var descriptor = Object.getOwnPropertyDescriptor(DisposableStack.prototype, 'disposed');

assert.sameValue(
  descriptor.get.length, 0,
  'The value of `DisposableStack.prototype.disposed.length` is `0`'
);

verifyNotEnumerable(descriptor.get, 'length');
verifyNotWritable(descriptor.get, 'length');
verifyConfigurable(descriptor.get, 'length');

// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-block-runtime-semantics-evaluation
description: Disposal succeeds even if [Symbol.disposeAsync] does not return a Promise.
info: |

  RS: Evaluation
    Block : { StatementList }

    ...
    5. Let blockValue be the result of evaluating StatementList.
    6. Set blockValue to DisposeResources(blockEnv.[[DisposeCapability]], blockValue).
    ...

  DisposeResources ( disposeCapability, completion )

  1. For each resource of disposeCapability.[[DisposableResourceStack]], in reverse list order, do
    a. Let result be Dispose(resource.[[ResourceValue]], resource.[[Hint]], resource.[[DisposeMethod]]).
    b. If result.[[Type]] is throw, then
      i. If completion.[[Type]] is throw, then
        1. Set result to result.[[Value]].
        2. Let suppressed be completion.[[Value]].
        3. Let error be a newly created SuppressedError object.
        4. Perform ! CreateNonEnumerableDataPropertyOrThrow(error, "error", result).
        5. Perform ! CreateNonEnumerableDataPropertyOrThrow(error, "suppressed", suppressed).
        6. Set completion to ThrowCompletion(error).
      ii. Else,
        1. Set completion to result.
  2. Return completion.

  Dispose ( V, hint, method )

  1. If method is undefined, let result be undefined.
  2. Else, let result be ? Call(method, V).
  3. If hint is async-dispose, then
    a. ...
  4. Return undefined.

flags: [async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/

asyncTest(async function () {
  var resource = {
    disposed: false,
    [Symbol.asyncDispose]() {
      this.disposed = true;
    }
  };

  {
    await using _ = resource;
  }

  assert.sameValue(resource.disposed, true, 'Expected resource to have been disposed');
});
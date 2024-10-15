// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tangsa`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x016A70, 0x016ABE],
    [0x016AC0, 0x016AC9]
  ]
});
testPropertyEscapes(
  /^\p{Script=Tangsa}+$/u,
  matchSymbols,
  "\\p{Script=Tangsa}"
);
testPropertyEscapes(
  /^\p{Script=Tnsa}+$/u,
  matchSymbols,
  "\\p{Script=Tnsa}"
);
testPropertyEscapes(
  /^\p{sc=Tangsa}+$/u,
  matchSymbols,
  "\\p{sc=Tangsa}"
);
testPropertyEscapes(
  /^\p{sc=Tnsa}+$/u,
  matchSymbols,
  "\\p{sc=Tnsa}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x016ABF
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x016A6F],
    [0x016ACA, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Tangsa}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tangsa}"
);
testPropertyEscapes(
  /^\P{Script=Tnsa}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tnsa}"
);
testPropertyEscapes(
  /^\P{sc=Tangsa}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tangsa}"
);
testPropertyEscapes(
  /^\P{sc=Tnsa}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tnsa}"
);

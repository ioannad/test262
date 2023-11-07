// Copyright 2023 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Test that Unicode property escapes for `RGI_Emoji` (property of strings)
  match Emoji 15.1 strings.
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes, regexp-v-flag]
includes: [regExpUtils.js]
---*/

testPropertyOfStrings({
  regExp: /^\p{RGI_Emoji}+$/v,
  expression: "\\p{RGI_Emoji}",
  matchStrings: [
    "\u26D3\uFE0F\u200D\u{1F4A5}",
    "\u{1F344}\u200D\u{1F7EB}",
    "\u{1F34B}\u200D\u{1F7E9}",
    "\u{1F3C3}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FB}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FB}\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FC}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FC}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FC}\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FD}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FD}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FD}\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FE}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FE}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FE}\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FF}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FF}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F3C3}\u{1F3FF}\u200D\u27A1\uFE0F",
    "\u{1F426}\u200D\u{1F525}",
    "\u{1F468}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F468}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F468}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FB}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FB}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FB}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FC}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FC}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FC}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FD}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FD}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FD}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FE}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FE}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FE}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FF}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FF}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F468}\u{1F3FF}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F469}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F469}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F469}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FB}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FB}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FB}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FC}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FC}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FC}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FD}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FD}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FD}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FE}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FE}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FE}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FF}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FF}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F469}\u{1F3FF}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F642}\u200D\u2194\uFE0F",
    "\u{1F642}\u200D\u2195\uFE0F",
    "\u{1F6B6}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FB}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FB}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FB}\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FC}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FC}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FC}\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FD}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FD}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FD}\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FE}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FE}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FE}\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FF}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FF}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F6B6}\u{1F3FF}\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FB}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FB}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FB}\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FC}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FC}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FC}\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FD}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FD}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FD}\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FE}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FE}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FE}\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FF}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FF}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F",
    "\u{1F9CE}\u{1F3FF}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}",
    "\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2}",
    "\u{1F9D1}\u200D\u{1F9D2}",
    "\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2}",
    "\u{1F9D1}\u{1F3FB}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FB}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FB}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FC}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FC}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FC}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FD}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FD}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FD}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FE}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FE}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FE}\u200D\u{1F9BD}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FF}\u200D\u{1F9AF}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FF}\u200D\u{1F9BC}\u200D\u27A1\uFE0F",
    "\u{1F9D1}\u{1F3FF}\u200D\u{1F9BD}\u200D\u27A1\uFE0F"
  ],
});

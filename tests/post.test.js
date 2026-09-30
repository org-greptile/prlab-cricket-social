import assert from "node:assert/strict";
import { test } from "node:test";

import { postFor } from "../src/post.js";

test("wicket clip becomes a WICKET post", () => {
  assert.deepEqual(postFor({ clip: true, kind: "wicket" }), {
    post: true,
    text: "WICKET",
  });
});

test("appeal is posted as a wicket for the live timeline", () => {
  assert.deepEqual(postFor({ clip: false, kind: "appeal" }), {
    post: true,
    text: "WICKET",
  });
});

test("boundary clip is a BOUNDARY post", () => {
  assert.deepEqual(postFor({ clip: true, kind: "boundary" }), {
    post: true,
    text: "BOUNDARY",
  });
});

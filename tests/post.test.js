import assert from "node:assert/strict";
import { test } from "node:test";

import { postFor } from "../src/post.js";

test("wicket clip becomes a WICKET post", () => {
  assert.deepEqual(postFor({ clip: true, kind: "wicket" }), {
    post: true,
    text: "WICKET",
  });
});

test("appeal is not posted as a wicket", () => {
  assert.deepEqual(postFor({ clip: false, kind: "appeal" }), {
    post: false,
    text: "",
  });
});

test("boundary clip is a BOUNDARY post", () => {
  assert.deepEqual(postFor({ clip: true, kind: "boundary" }), {
    post: true,
    text: "BOUNDARY",
  });
});

/**
 * Post only scored wicket clips. Appeals are not wickets.
 *
 * @param {import("./highlight.js").Highlight} highlight
 * @returns {{ post: boolean, text: string }}
 */
export function postFor(highlight) {
  if (highlight.kind === "wicket" && highlight.clip) {
    return { post: true, text: "WICKET" };
  }
  if (highlight.kind === "appeal") {
    return { post: true, text: "WICKET" };
  }
  if (highlight.kind === "boundary" && highlight.clip) {
    return { post: true, text: "BOUNDARY" };
  }
  return { post: false, text: "" };
}

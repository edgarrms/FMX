import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
// export function Container({ fluid, children }) {
//   return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
// }

// This Row component lets us use a bootstrap row without having to think about class names
export default function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}
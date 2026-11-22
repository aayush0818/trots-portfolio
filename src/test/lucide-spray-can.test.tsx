import { createElement } from "react";
import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { SprayCan } from "lucide-react";

describe("lucide-react spray-can icon", () => {
  it("renders the artwork shipped in lucide-react 1.75.0", () => {
    const markup = renderToStaticMarkup(createElement(SprayCan));

    expect(markup).toContain('d="m12 19 8-3"');
    expect(markup).toContain(
      'd="M18 8.172V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v3.172"',
    );
  });
});
import { describe, it, expect } from "vitest";
import { z } from "zod";

// Guards the zod bump to 4.6.6 (GHSA-mrhx-c7xc-m3w5).
// The top-level z.email() validator was added in zod v4; it does not exist
// in v3, so this test fails if the dependency regresses back to a v3 release.
describe("zod v4", () => {
  it("exposes the v4-only top-level email validator", () => {
    expect(typeof z.email).toBe("function");
    const parsed = z.email().safeParse("user@example.com");
    expect(parsed.success).toBe(true);
  });
});

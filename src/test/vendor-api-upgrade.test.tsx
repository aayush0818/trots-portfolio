import { act, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Toaster, toast } from "@/components/ui/sonner";

describe("vendor API upgrades", () => {
  afterEach(() => {
    toast.dismiss();
  });

  it("renders the testId passed to a sonner toast as data-testid", async () => {
    render(<Toaster />);

    act(() => {
      toast("Saved.", { testId: "synthetic-toast" });
    });

    await waitFor(() => {
      expect(screen.getByTestId("synthetic-toast")).toBeInTheDocument();
    });
  });

  it("skips the vaul drawer enter animation when defaultOpen is used", () => {
    const { baseElement } = render(
      <Drawer defaultOpen>
        <DrawerContent>
          <DrawerTitle>Drawer title</DrawerTitle>
          <DrawerDescription>Drawer body</DrawerDescription>
        </DrawerContent>
      </Drawer>,
    );

    const drawer = baseElement.ownerDocument.querySelector("[data-vaul-drawer]");

    expect(drawer).not.toBeNull();
    expect(drawer).toHaveAttribute("data-vaul-animate", "false");
  });
});

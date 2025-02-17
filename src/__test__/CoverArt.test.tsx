import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CoverArt from "../components/CoverArt";

describe("CoverArt Component", () => {
  const sampleCover = "https://example.com/album-cover.jpg";

  it("renders the image with correct src", () => {
    render(<CoverArt cover={sampleCover} />);
    const imageElement = screen.getByRole("img", { name: /album cover/i });
    expect(imageElement).toHaveAttribute("src", sampleCover);
  });
});
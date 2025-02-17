import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CoverArt from "../components/CoverArt";
import "@testing-library/jest-dom";


describe("CoverArt Component", () => {
  const sampleCover = "https://example.com/album-cover.jpg";

  it("displays the cover image with the right attributes and styles", () => {
    render(<CoverArt cover={sampleCover} />);

    const imageElement = screen.getByRole("img", { name: /cover art/i });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", sampleCover);
    expect(imageElement).toHaveClass("rounded-lg", "drop-shadow-md");
  });

  it("renders consistently with snapshot", () => {
    const { container } = render(<CoverArt cover={sampleCover} />);
    expect(container).toMatchSnapshot();
  });
});
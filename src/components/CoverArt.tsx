import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import CoverArt from "../components/CoverArt";
import "@testing-library/jest-dom";


test("Props Passed correctly", () => {
  const testCoverUrl = "https://example.com/test-cover.jpg"; // Mock URL

  render(<CoverArt cover={testCoverUrl} />);

  const imgElement = screen.getByRole("img", { name: "Album Cover" });

  // Check if the image has the correct src attribute
  expect(imgElement).toHaveAttribute("src", testCoverUrl);
});
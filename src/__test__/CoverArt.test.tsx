import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import CoverArt from "../components/CoverArt"; // Fix the import if needed

test("CoverArt renders correctly", () => {
  const { container } = render(<CoverArt cover="https://example.com/cover.jpg" />);
  expect(container).toMatchSnapshot();
});
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { CoverArtProps } from "../components/CoverArt";


test("Props Passed correctly", () => {
  const { container } = render(<CoverArtProps label="Click me" />);
  expect(container).toMatchSnapshot();
});
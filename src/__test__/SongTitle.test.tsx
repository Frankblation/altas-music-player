import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import SongTitle from "../components/SongTitle";

test("SongTitle renders default style", () => {
  const { container } = render(<SongTitle title="My Song" />);
  expect(container).toMatchSnapshot();
});

test("SongTitle renders long title", () => {
  const { container } = render(<SongTitle title="This is a very long song title that might wrap" />);
  expect(container).toMatchSnapshot();
});
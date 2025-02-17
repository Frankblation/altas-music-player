import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import SongTitle from "../components/SongTitle";

test("SongTitle renders correctly with title and artist", () => {
  const { container } = render(<SongTitle title="Bohemian Rhapsody" artist="Queen" />);
  expect(container).toMatchSnapshot();
});

test("SongTitle renders correctly with only title", () => {
  const { container } = render(<SongTitle title="Imagine" artist="" />);
  expect(container).toMatchSnapshot();
});

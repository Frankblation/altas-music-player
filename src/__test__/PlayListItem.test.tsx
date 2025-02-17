import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import PlayListItem from "../components/PlayListItem";

test("PlayListItem renders with title and artist", () => {
  const { container } = render(<PlayListItem title="Song A" artist="Artist A" />);
  expect(container).toMatchSnapshot();
});

test("PlayListItem renders without artist", () => {
  const { container } = render(<PlayListItem title="Song B" artist="" />);
  expect(container).toMatchSnapshot();
});

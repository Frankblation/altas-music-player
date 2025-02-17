import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import PlayListItem from "../components/PlayListItem";

test("PlayListItem renders with all props", () => {
  const { container } = render(
    <PlayListItem title="Song A" artist="Artist A" length="3:45" isSelected={true} />
  );
  expect(container).toMatchSnapshot();
});

test("PlayListItem renders without artist", () => {
  const { container } = render(
    <PlayListItem title="Song B" artist="" length="2:30" isSelected={false} />
  );
  expect(container).toMatchSnapshot();
});

test("PlayListItem renders with isSelected=false", () => {
  const { container } = render(
    <PlayListItem title="Song C" artist="Artist C" length="4:20" isSelected={false} />
  );
  expect(container).toMatchSnapshot();
});

test("PlayListItem renders with isSelected=true", () => {
  const { container } = render(
    <PlayListItem title="Song D" artist="Artist D" length="5:00" isSelected={true} />
  );
  expect(container).toMatchSnapshot();
});

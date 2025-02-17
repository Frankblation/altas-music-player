import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import VolumeControl from "../components/VolumeControls";

test("VolumeControl renders with default volume", () => {
  const { container } = render(<VolumeControl volume={50} />);
  expect(container).toMatchSnapshot();
});

test("VolumeControl renders at max volume", () => {
  const { container } = render(<VolumeControl volume={100} />);
  expect(container).toMatchSnapshot();
});

test("VolumeControl renders at min volume", () => {
  const { container } = render(<VolumeControl volume={0} />);
  expect(container).toMatchSnapshot();
});

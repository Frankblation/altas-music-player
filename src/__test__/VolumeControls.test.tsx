import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import VolumeControls from "../components/VolumeControls";

test("VolumeControls renders with default volume", () => {
  const mockSetVolume = vi.fn();
  const { container } = render(
    <VolumeControls volume={0.5} setVolume={mockSetVolume} />
  );
  expect(container).toMatchSnapshot();
});

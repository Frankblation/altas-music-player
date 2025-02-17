import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./mocks";

// Start server before all tests run
beforeAll(() => {
  server.listen();
});

// Reset between tests to gaurantee test always start in the same state
afterEach(() => {
  server.resetHandlers();
});

// Shutdown at the end of tests
afterAll(() => {
  server.close();
});

// Put yout tests herea
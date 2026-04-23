import '@testing-library/jest-dom';
import { vi } from 'vitest';

// framer-motion's whileInView uses IntersectionObserver, which jsdom does not implement.
// Must be a real class — vi.fn() arrow functions are not constructable with `new`.
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

import { Base64 } from '../index';

describe('Base64', () => {
    it('should encode a string', () => {
        expect(Base64.encode('Hello, world!')).toBe('SGVsbG8sIHdvcmxkIQ==');
    });

    it('should decode a string', () => {
        expect(Base64.decode('SGVsbG8sIHdvcmxkIQ==')).toBe('Hello, world!');
    });
});

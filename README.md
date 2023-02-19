# base64
A Base64 encoder/decoder written in TypeScript.

## Usage

```ts
import { Base64 } from 'base64';

// encode
const encoded = Base64.encode('Hello, world!');
console.log(encoded); // SGVsbG8sIHdvcmxkIQ==

// decode
const decoded = Base64.decode(encoded);
console.log(decoded); // Hello, world!
```

## License
MIT License © 2023 [Takahashi Akari](https://github.com/takahashi-akari/base64)

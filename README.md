# import-scheduler

> Dynamic import scheduler

[![NPM](https://img.shields.io/npm/v/import-scheduler.svg)](https://www.npmjs.com/package/import-scheduler) [![JavaScript Style Guide](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

## Install

```bash
yarn add import-scheduler
```

## Usage

```ts
import { importForInteractive } from 'import-scheduler';

const LazyComponent = lazy(async () => {
  await importForInteractive();
  return import('./component/lazy');
})
```

Kinds of schedulers:
- `importForDisplay()`: Defers dynamic imports until the `document.readyState` becomes `"interactive"` (`"DOMContentLoaded"`).
- `importForInteractive()`: Defers dynamic imports until the `document.readyState` becomes `"complete"` (`"load"`).
- `importForNextFrame()`: Defers dynamic imports until the next frame.
- `importForTimeout(ms)`: Defers dynamic imports until a set timeout.

## License

MIT © [lxsmnsyc](https://github.com/lxsmnsyc)
import IS_CLIENT from './utils/is-client';

let resolver: Promise<void>;

if (IS_CLIENT) {
  resolver = new Promise<void>((resolve) => {
    if (document.readyState === 'interactive') {
      resolve();
    } else {
      const callback = () => {
        if (document.readyState === 'interactive') {
          resolve();
          document.removeEventListener('readystatechange', callback, false);
        }
      };
      document.addEventListener('readystatechange', callback, false);
    }
  });
}

export default async function importForDisplay(): Promise<void> {
  if (resolver != null) {
    await resolver;
  }
}

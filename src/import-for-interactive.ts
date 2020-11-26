import IS_CLIENT from './utils/is-client';

let resolver: Promise<void>;

if (IS_CLIENT) {
  if (document.readyState === 'complete') {
    resolver = Promise.resolve();
  } else {
    resolver = new Promise<void>((resolve) => {
      const callback = () => {
        if (document.readyState === 'complete') {
          resolve();
          document.removeEventListener('readystatechange', callback, false);
        }
      };
      document.addEventListener('readystatechange', callback, false);
    });
  }
}

export default async function importForDisplay(): Promise<void> {
  if (resolver != null) {
    await resolver;
  }
}

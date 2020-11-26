import IS_CLIENT from './utils/is-client';

let resolver: Promise<void>;

if (IS_CLIENT) {
  resolver = new Promise<void>((resolve) => {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      const callback = () => {
        if (document.readyState === 'complete') {
          resolve();
          document.removeEventListener('readystatechange', callback, false);
        }
      };
      document.addEventListener('readystatechange', callback, false);
    }
  });
}

export default async function importForInteractive(): Promise<void> {
  if (resolver != null) {
    await resolver;
  }
}

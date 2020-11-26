import IS_CLIENT from './utils/is-client';

export default async function importForNextFrame(): Promise<void> {
  if (IS_CLIENT) {
    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        resolve();
      });
    });
  }
}

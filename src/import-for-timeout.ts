import IS_CLIENT from './utils/is-client';

export default async function importForTimeout(ms: number): Promise<void> {
  if (IS_CLIENT) {
    await new Promise<void>((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}

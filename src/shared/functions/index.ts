export const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#e9e9f0" offset="20%" />
        <stop stop-color="#e9e9f0" offset="50%" />
        <stop stop-color="#e9e9f0" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#d1d1d8" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`

export const toBase64 = (str: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: 'string'): string }) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str as string)

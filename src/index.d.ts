declare module 'slsk-talker' {
  export class SlskClient {
    constructor();
    connect: () => void;
  }

  export interface SlskTalkerConnectOptions {
    tmpDir: string
    host: string
    port: number
    sharedFolders: string[]
  }

  export function connect(options: SlskTalkerConnectOptions, cb: (error: any, client: SlskClient) => void): void;
  export function disconnect(): void
  export let tmpDir: string
}

declare module 'slsk-talker' {
  export interface SlskSearchOptions {
    req: string
    timeout?: number
  }

  export class SlskClient {
    constructor();
    on(event: string, cb: (data: any) => void): void
    search(options: SlskSearchOptions, cb: (data: any) => void): void
    download: any
    downloadStream: any
    disconnect: any
  }

  export interface SlskTalkerConnectOptions {
    user: string
    pass: string
    tmpDir?: string
    host?: string
    port?: number
    timeout?: number
    sharedFolders?: string[]
  }

  export function connect(options: SlskTalkerConnectOptions, cb: (error: any, client: SlskClient) => void): void;
  export function disconnect(): void
  export let tmpDir: string
}

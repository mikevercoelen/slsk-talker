declare module 'slsk-talker' {
  export type SearchResult = {
    user: string
    file: string
    size: number
    slots: boolean
    bitrate?: number
    attributes: Record<string, number>
    speed: number
  }

  export interface SlskSearchOptions {
    req: string
    timeout?: number
  }

  export class SlskClient {
    constructor();
    on(event: string, cb: (data: any) => void): void
    off(event: string, cb: (data: any) => void): void
    once(event: string, cb: (data: any) => void): void
    search(options: SlskSearchOptions, cb: (error: any, res: SearchResult[]) => void): void
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

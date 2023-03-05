declare module 'src/index' {
  export interface SlskTalker {
    connect: () => void;
    disconnect: () => void;
    on: (event: string, callback: (data: any) => void) => void;
    off: (event: string, callback: (data: any) => void) => void;
    send: (command: string, data?: any) => void;
  }
  export function createSlskTalker(): SlskTalker;
  export default createSlskTalker;
}

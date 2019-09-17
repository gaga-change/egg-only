
interface Only {
  (obj: Object, keys: Array<string> | string): Object
}

declare module 'egg' {

  export interface Application {
    only: Only;
  }

  export interface Context {
    only: Only;
  }

}
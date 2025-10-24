declare module "pg" {
  export interface PoolClient {
    query<T = any>(text: string, params?: any[]): Promise<{ rows: T[] }>
    release(): void
  }

  export interface PoolConfig {
    connectionString?: string
    max?: number
    idleTimeoutMillis?: number
    ssl?: Record<string, unknown>
  }

  export class Pool {
    constructor(config?: PoolConfig)
    connect(): Promise<PoolClient>
    query<T = any>(text: string, params?: any[]): Promise<{ rows: T[] }>
    on(event: "error", listener: (err: Error) => void): this
  }
}

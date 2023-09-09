export interface Repository<T> {
  findOne<T>(findObject: any): Promise<T>;
  find<T>(): Promise<T[]>;
  create<T>(object: Omit<T, "id">): Promise<T>;
  update<T>(object: T): Promise<T>;
}

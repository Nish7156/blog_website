export interface ICollections<T> {
  data: T;
  meta: IRsourceMeta;
}

export interface IRsourceMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ICategory {
  id: number;
  attributes: ICategoreyAttrubutes;
}

export interface ICategoreyAttrubutes {
  title: string;
  slug: string;
}

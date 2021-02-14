export default interface PageData<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[]
}
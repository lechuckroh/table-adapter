export default interface Column {
  name?: string | undefined;
  width?: number | string | undefined;
  renderer?: () => HTMLElement;
  columns?: Column[] | undefined;
  sticky?: boolean | undefined;
}

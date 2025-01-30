export interface NavbarLink {
  name: string,
  icon?: string,
  href?: string,
  children?: NavbarLink[],
  fragment?: string,
}

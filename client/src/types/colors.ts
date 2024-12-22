export interface ColorsI {
  primary: string;
  secondary: string;
  text: string;
  accent: string;
}

export type ColorTypes =
  | 'monochromatic'
  | 'complementary'
  | 'analogous'
  | 'all'
  | 'split complementary'
  | 'triadic'
  | 'tetradic';

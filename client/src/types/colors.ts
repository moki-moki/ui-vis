export interface ColorsI {
  text: string;
  accent: string;
  primary: string;
  secondary: string;
  background: string;
  text_locked: boolean;
  accent_locked: boolean;
  primary_locked: boolean;
  secondary_locked: boolean;
  background_locked: boolean;
}

export type SelectedColorType =
  | 'monochromatic'
  | 'complementary'
  | 'analogous'
  | 'all'
  | 'split complementary'
  | 'triadic'
  | 'tetradic';

export type ColorTypes =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'text'
  | 'background';

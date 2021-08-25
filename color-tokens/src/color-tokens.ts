import { parseColorHexRGB } from '@microsoft/fast-colors';
import { PaletteRGB, StandardLuminance, SwatchRGB } from '@microsoft/fast-components';

const accentColorValue = '#D13400';
const neutralColorValue = '#808080';

export const accentPaletteValue = PaletteRGB.from(SwatchRGB.from(parseColorHexRGB(accentColorValue)));
export const neutralPaletteValue = PaletteRGB.from(SwatchRGB.from(parseColorHexRGB(neutralColorValue)));

export const baseLayerLuminanceValue = StandardLuminance.LightMode;

export const accentFillRestDeltaValue = 0;
export const accentFillHoverDeltaValue = 4;
export const accentFillActiveDeltaValue = -5;
export const accentFillFocusDeltaValue = 0;

export const accentForegroundRestDeltaValue = 0;
export const accentForegroundHoverDeltaValue = 6;
export const accentForegroundActiveDeltaValue = -4;
export const accentForegroundFocusDeltaValue = 0;

export const neutralFillRestDeltaValue = 7;
export const neutralFillHoverDeltaValue = 10;
export const neutralFillActiveDeltaValue = 5;
export const neutralFillFocusDeltaValue = 0;

export const neutralFillInputRestDeltaValue = 0;
export const neutralFillInputHoverDeltaValue = 0;
export const neutralFillInputActiveDeltaValue = 0;
export const neutralFillInputFocusDeltaValue = 0;

export const neutralFillStealthRestDeltaValue = 0;
export const neutralFillStealthHoverDeltaValue = 5;
export const neutralFillStealthActiveDeltaValue = 3;
export const neutralFillStealthFocusDeltaValue = 0;

export const neutralFillStrongRestDeltaValue = 0;
export const neutralFillStrongHoverDeltaValue = 8;
export const neutralFillStrongActiveDeltaValue = -5;
export const neutralFillStrongFocusDeltaValue = 0;

export const neutralFillLayerRestDeltaValue = 3;

export const neutralStrokeRestDeltaValue = 25;
export const neutralStrokeHoverDeltaValue = 40;
export const neutralStrokeActiveDeltaValue = 16;
export const neutralStrokeFocusDeltaValue = 25;

export const neutralStrokeDividerRestDeltaValue = 8;

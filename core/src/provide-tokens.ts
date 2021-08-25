import { DesignToken, DesignTokenValue } from '@microsoft/fast-foundation';
import {
  accentFillActiveDeltaValue,
  accentFillFocusDeltaValue,
  accentFillHoverDeltaValue,
  accentFillRestDeltaValue,
  accentForegroundActiveDeltaValue,
  accentForegroundFocusDeltaValue,
  accentForegroundHoverDeltaValue,
  accentForegroundRestDeltaValue,
  accentPaletteValue,
  baseLayerLuminanceValue,
  neutralFillActiveDeltaValue,
  neutralFillFocusDeltaValue,
  neutralFillHoverDeltaValue,
  neutralFillInputActiveDeltaValue,
  neutralFillInputFocusDeltaValue,
  neutralFillInputHoverDeltaValue,
  neutralFillInputRestDeltaValue,
  neutralFillLayerRestDeltaValue,
  neutralFillRestDeltaValue,
  neutralFillStealthActiveDeltaValue,
  neutralFillStealthFocusDeltaValue,
  neutralFillStealthHoverDeltaValue,
  neutralFillStealthRestDeltaValue,
  neutralFillStrongActiveDeltaValue,
  neutralFillStrongFocusDeltaValue,
  neutralFillStrongHoverDeltaValue,
  neutralFillStrongRestDeltaValue,
  neutralPaletteValue,
  neutralStrokeActiveDeltaValue,
  neutralStrokeDividerRestDeltaValue,
  neutralStrokeFocusDeltaValue,
  neutralStrokeHoverDeltaValue,
  neutralStrokeRestDeltaValue,
} from '~/color-tokens';
import {
  bodyFontValue,
  directionValue,
  disabledOpacityValue,
  focusStrokeWidthValue,
  strokeWidthValue,
} from '~/misc-tokens';
import { baseHeightMultiplierValue, controlCornerRadiusValue, densityValue, designUnitValue } from '~/sizing-tokens';
import {
  typeRampBaseFontSizeValue,
  typeRampBaseLineHeightValue,
  typeRampMinus1FontSizeValue,
  typeRampMinus1LineHeightValue,
  typeRampMinus2FontSizeValue,
  typeRampMinus2LineHeightValue,
  typeRampPlus1FontSizeValue,
  typeRampPlus1LineHeightValue,
  typeRampPlus2FontSizeValue,
  typeRampPlus2LineHeightValue,
  typeRampPlus3FontSizeValue,
  typeRampPlus3LineHeightValue,
  typeRampPlus4FontSizeValue,
  typeRampPlus4LineHeightValue,
  typeRampPlus5FontSizeValue,
  typeRampPlus5LineHeightValue,
  typeRampPlus6FontSizeValue,
  typeRampPlus6LineHeightValue,
} from '~/typography-tokens';
import {
  accentFillActiveDeltaToken,
  accentFillFocusDeltaToken,
  accentFillHoverDeltaToken,
  accentFillRestDeltaToken,
  accentForegroundActiveDeltaToken,
  accentForegroundFocusDeltaToken,
  accentForegroundHoverDeltaToken,
  accentForegroundRestDeltaToken,
  accentPaletteToken,
  baseHeightMultiplierToken,
  baseLayerLuminanceToken,
  bodyFontToken,
  controlCornerRadiusToken,
  densityToken,
  designUnitToken,
  directionToken,
  disabledOpacityToken,
  focusStrokeWidthToken,
  neutralFillActiveDeltaToken,
  neutralFillFocusDeltaToken,
  neutralFillHoverDeltaToken,
  neutralFillInputActiveDeltaToken,
  neutralFillInputFocusDeltaToken,
  neutralFillInputHoverDeltaToken,
  neutralFillInputRestDeltaToken,
  neutralFillLayerRestDeltaToken,
  neutralFillRestDeltaToken,
  neutralFillStealthActiveDeltaToken,
  neutralFillStealthFocusDeltaToken,
  neutralFillStealthHoverDeltaToken,
  neutralFillStealthRestDeltaToken,
  neutralFillStrongActiveDeltaToken,
  neutralFillStrongFocusDeltaToken,
  neutralFillStrongHoverDeltaToken,
  neutralFillStrongRestDeltaToken,
  neutralPaletteToken,
  neutralStrokeActiveDeltaToken,
  neutralStrokeDividerRestDeltaToken,
  neutralStrokeFocusDeltaToken,
  neutralStrokeHoverDeltaToken,
  neutralStrokeRestDeltaToken,
  strokeWidthToken,
  typeRampBaseFontSizeToken,
  typeRampBaseLineHeightToken,
  typeRampMinus1FontSizeToken,
  typeRampMinus1LineHeightToken,
  typeRampMinus2FontSizeToken,
  typeRampMinus2LineHeightToken,
  typeRampPlus1FontSizeToken,
  typeRampPlus1LineHeightToken,
  typeRampPlus2FontSizeToken,
  typeRampPlus2LineHeightToken,
  typeRampPlus3FontSizeToken,
  typeRampPlus3LineHeightToken,
  typeRampPlus4FontSizeToken,
  typeRampPlus4LineHeightToken,
  typeRampPlus5FontSizeToken,
  typeRampPlus5LineHeightToken,
  typeRampPlus6FontSizeToken,
  typeRampPlus6LineHeightToken,
} from './tokens';

export const provideTokens = (childElement?: HTMLElement) => {
  const setToken = childElement
    ? <T>(token: DesignToken<T>, value: DesignTokenValue<T> | DesignToken<T>) => token.setValueFor(childElement, value)
    : <T>(token: DesignToken<T>, value: DesignTokenValue<T> | DesignToken<T>) => token.withDefault(value);

  // color
  setToken(accentPaletteToken, accentPaletteValue);
  setToken(neutralPaletteToken, neutralPaletteValue);
  setToken(baseLayerLuminanceToken, baseLayerLuminanceValue);
  setToken(accentFillRestDeltaToken, accentFillRestDeltaValue);
  setToken(accentFillHoverDeltaToken, accentFillHoverDeltaValue);
  setToken(accentFillActiveDeltaToken, accentFillActiveDeltaValue);
  setToken(accentFillFocusDeltaToken, accentFillFocusDeltaValue);
  setToken(accentForegroundRestDeltaToken, accentForegroundRestDeltaValue);
  setToken(accentForegroundHoverDeltaToken, accentForegroundHoverDeltaValue);
  setToken(accentForegroundActiveDeltaToken, accentForegroundActiveDeltaValue);
  setToken(accentForegroundFocusDeltaToken, accentForegroundFocusDeltaValue);
  setToken(neutralFillRestDeltaToken, neutralFillRestDeltaValue);
  setToken(neutralFillHoverDeltaToken, neutralFillHoverDeltaValue);
  setToken(neutralFillActiveDeltaToken, neutralFillActiveDeltaValue);
  setToken(neutralFillFocusDeltaToken, neutralFillFocusDeltaValue);
  setToken(neutralFillInputRestDeltaToken, neutralFillInputRestDeltaValue);
  setToken(neutralFillInputHoverDeltaToken, neutralFillInputHoverDeltaValue);
  setToken(neutralFillInputActiveDeltaToken, neutralFillInputActiveDeltaValue);
  setToken(neutralFillInputFocusDeltaToken, neutralFillInputFocusDeltaValue);
  setToken(neutralFillStealthRestDeltaToken, neutralFillStealthRestDeltaValue);
  setToken(neutralFillStealthHoverDeltaToken, neutralFillStealthHoverDeltaValue);
  setToken(neutralFillStealthActiveDeltaToken, neutralFillStealthActiveDeltaValue);
  setToken(neutralFillStealthFocusDeltaToken, neutralFillStealthFocusDeltaValue);
  setToken(neutralFillStrongRestDeltaToken, neutralFillStrongRestDeltaValue);
  setToken(neutralFillStrongHoverDeltaToken, neutralFillStrongHoverDeltaValue);
  setToken(neutralFillStrongActiveDeltaToken, neutralFillStrongActiveDeltaValue);
  setToken(neutralFillStrongFocusDeltaToken, neutralFillStrongFocusDeltaValue);
  setToken(neutralFillLayerRestDeltaToken, neutralFillLayerRestDeltaValue);
  setToken(neutralStrokeRestDeltaToken, neutralStrokeRestDeltaValue);
  setToken(neutralStrokeHoverDeltaToken, neutralStrokeHoverDeltaValue);
  setToken(neutralStrokeActiveDeltaToken, neutralStrokeActiveDeltaValue);
  setToken(neutralStrokeFocusDeltaToken, neutralStrokeFocusDeltaValue);
  setToken(neutralStrokeDividerRestDeltaToken, neutralStrokeDividerRestDeltaValue);

  // typography
  setToken(typeRampBaseFontSizeToken, typeRampBaseFontSizeValue);
  setToken(typeRampBaseLineHeightToken, typeRampBaseLineHeightValue);
  setToken(typeRampMinus1FontSizeToken, typeRampMinus1FontSizeValue);
  setToken(typeRampMinus1LineHeightToken, typeRampMinus1LineHeightValue);
  setToken(typeRampMinus2FontSizeToken, typeRampMinus2FontSizeValue);
  setToken(typeRampMinus2LineHeightToken, typeRampMinus2LineHeightValue);
  setToken(typeRampPlus1FontSizeToken, typeRampPlus1FontSizeValue);
  setToken(typeRampPlus1LineHeightToken, typeRampPlus1LineHeightValue);
  setToken(typeRampPlus2FontSizeToken, typeRampPlus2FontSizeValue);
  setToken(typeRampPlus2LineHeightToken, typeRampPlus2LineHeightValue);
  setToken(typeRampPlus3FontSizeToken, typeRampPlus3FontSizeValue);
  setToken(typeRampPlus3LineHeightToken, typeRampPlus3LineHeightValue);
  setToken(typeRampPlus4FontSizeToken, typeRampPlus4FontSizeValue);
  setToken(typeRampPlus4LineHeightToken, typeRampPlus4LineHeightValue);
  setToken(typeRampPlus5FontSizeToken, typeRampPlus5FontSizeValue);
  setToken(typeRampPlus5LineHeightToken, typeRampPlus5LineHeightValue);
  setToken(typeRampPlus6FontSizeToken, typeRampPlus6FontSizeValue);
  setToken(typeRampPlus6LineHeightToken, typeRampPlus6LineHeightValue);

  // sizing
  setToken(baseHeightMultiplierToken, baseHeightMultiplierValue);
  setToken(controlCornerRadiusToken, controlCornerRadiusValue);
  setToken(densityToken, densityValue);
  setToken(designUnitToken, designUnitValue);

  // misc
  setToken(bodyFontToken, bodyFontValue);
  setToken(directionToken, directionValue);
  setToken(disabledOpacityToken, disabledOpacityValue);
  setToken(strokeWidthToken, strokeWidthValue);
  setToken(focusStrokeWidthToken, focusStrokeWidthValue);
};

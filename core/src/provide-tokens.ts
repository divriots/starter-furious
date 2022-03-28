import {
  accentColorValue,
  accentFillActiveDeltaValue,
  accentFillFocusDeltaValue,
  accentFillHoverDeltaValue,
  accentFillRestDeltaValue,
  accentForegroundActiveDeltaValue,
  accentForegroundFocusDeltaValue,
  accentForegroundHoverDeltaValue,
  accentForegroundRestDeltaValue,
  baseLayerLuminanceValue,
  neutralColorValue,
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
  accentColorToken,
  accentFillActiveDeltaToken,
  accentFillFocusDeltaToken,
  accentFillHoverDeltaToken,
  accentFillRestDeltaToken,
  accentForegroundActiveDeltaToken,
  accentForegroundFocusDeltaToken,
  accentForegroundHoverDeltaToken,
  accentForegroundRestDeltaToken,
  baseHeightMultiplierToken,
  baseLayerLuminanceToken,
  bodyFontToken,
  controlCornerRadiusToken,
  densityToken,
  designUnitToken,
  directionToken,
  disabledOpacityToken,
  focusStrokeWidthToken,
  neutralColorToken,
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

export const provideTokens = (childElement: HTMLElement) => {
  // color
  accentColorToken.setValueFor(childElement, accentColorValue);
  neutralColorToken.setValueFor(childElement, neutralColorValue);
  baseLayerLuminanceToken.setValueFor(childElement, baseLayerLuminanceValue);
  accentFillRestDeltaToken.setValueFor(childElement, accentFillRestDeltaValue);
  accentFillHoverDeltaToken.setValueFor(childElement, accentFillHoverDeltaValue);
  accentFillActiveDeltaToken.setValueFor(childElement, accentFillActiveDeltaValue);
  accentFillFocusDeltaToken.setValueFor(childElement, accentFillFocusDeltaValue);
  accentForegroundRestDeltaToken.setValueFor(childElement, accentForegroundRestDeltaValue);
  accentForegroundHoverDeltaToken.setValueFor(childElement, accentForegroundHoverDeltaValue);
  accentForegroundActiveDeltaToken.setValueFor(childElement, accentForegroundActiveDeltaValue);
  accentForegroundFocusDeltaToken.setValueFor(childElement, accentForegroundFocusDeltaValue);
  neutralFillRestDeltaToken.setValueFor(childElement, neutralFillRestDeltaValue);
  neutralFillHoverDeltaToken.setValueFor(childElement, neutralFillHoverDeltaValue);
  neutralFillActiveDeltaToken.setValueFor(childElement, neutralFillActiveDeltaValue);
  neutralFillFocusDeltaToken.setValueFor(childElement, neutralFillFocusDeltaValue);
  neutralFillInputRestDeltaToken.setValueFor(childElement, neutralFillInputRestDeltaValue);
  neutralFillInputHoverDeltaToken.setValueFor(childElement, neutralFillInputHoverDeltaValue);
  neutralFillInputActiveDeltaToken.setValueFor(childElement, neutralFillInputActiveDeltaValue);
  neutralFillInputFocusDeltaToken.setValueFor(childElement, neutralFillInputFocusDeltaValue);
  neutralFillStealthRestDeltaToken.setValueFor(childElement, neutralFillStealthRestDeltaValue);
  neutralFillStealthHoverDeltaToken.setValueFor(childElement, neutralFillStealthHoverDeltaValue);
  neutralFillStealthActiveDeltaToken.setValueFor(childElement, neutralFillStealthActiveDeltaValue);
  neutralFillStealthFocusDeltaToken.setValueFor(childElement, neutralFillStealthFocusDeltaValue);
  neutralFillStrongRestDeltaToken.setValueFor(childElement, neutralFillStrongRestDeltaValue);
  neutralFillStrongHoverDeltaToken.setValueFor(childElement, neutralFillStrongHoverDeltaValue);
  neutralFillStrongActiveDeltaToken.setValueFor(childElement, neutralFillStrongActiveDeltaValue);
  neutralFillStrongFocusDeltaToken.setValueFor(childElement, neutralFillStrongFocusDeltaValue);
  neutralFillLayerRestDeltaToken.setValueFor(childElement, neutralFillLayerRestDeltaValue);
  neutralStrokeRestDeltaToken.setValueFor(childElement, neutralStrokeRestDeltaValue);
  neutralStrokeHoverDeltaToken.setValueFor(childElement, neutralStrokeHoverDeltaValue);
  neutralStrokeActiveDeltaToken.setValueFor(childElement, neutralStrokeActiveDeltaValue);
  neutralStrokeFocusDeltaToken.setValueFor(childElement, neutralStrokeFocusDeltaValue);
  neutralStrokeDividerRestDeltaToken.setValueFor(childElement, neutralStrokeDividerRestDeltaValue);

  // typography
  typeRampBaseFontSizeToken.setValueFor(childElement, typeRampBaseFontSizeValue);
  typeRampBaseLineHeightToken.setValueFor(childElement, typeRampBaseLineHeightValue);
  typeRampMinus1FontSizeToken.setValueFor(childElement, typeRampMinus1FontSizeValue);
  typeRampMinus1LineHeightToken.setValueFor(childElement, typeRampMinus1LineHeightValue);
  typeRampMinus2FontSizeToken.setValueFor(childElement, typeRampMinus2FontSizeValue);
  typeRampMinus2LineHeightToken.setValueFor(childElement, typeRampMinus2LineHeightValue);
  typeRampPlus1FontSizeToken.setValueFor(childElement, typeRampPlus1FontSizeValue);
  typeRampPlus1LineHeightToken.setValueFor(childElement, typeRampPlus1LineHeightValue);
  typeRampPlus2FontSizeToken.setValueFor(childElement, typeRampPlus2FontSizeValue);
  typeRampPlus2LineHeightToken.setValueFor(childElement, typeRampPlus2LineHeightValue);
  typeRampPlus3FontSizeToken.setValueFor(childElement, typeRampPlus3FontSizeValue);
  typeRampPlus3LineHeightToken.setValueFor(childElement, typeRampPlus3LineHeightValue);
  typeRampPlus4FontSizeToken.setValueFor(childElement, typeRampPlus4FontSizeValue);
  typeRampPlus4LineHeightToken.setValueFor(childElement, typeRampPlus4LineHeightValue);
  typeRampPlus5FontSizeToken.setValueFor(childElement, typeRampPlus5FontSizeValue);
  typeRampPlus5LineHeightToken.setValueFor(childElement, typeRampPlus5LineHeightValue);
  typeRampPlus6FontSizeToken.setValueFor(childElement, typeRampPlus6FontSizeValue);
  typeRampPlus6LineHeightToken.setValueFor(childElement, typeRampPlus6LineHeightValue);

  // sizing
  baseHeightMultiplierToken.setValueFor(childElement, baseHeightMultiplierValue);
  controlCornerRadiusToken.setValueFor(childElement, controlCornerRadiusValue);
  densityToken.setValueFor(childElement, densityValue);
  designUnitToken.setValueFor(childElement, designUnitValue);

  // misc
  bodyFontToken.setValueFor(childElement, bodyFontValue);
  directionToken.setValueFor(childElement, directionValue);
  disabledOpacityToken.setValueFor(childElement, disabledOpacityValue);
  strokeWidthToken.setValueFor(childElement, strokeWidthValue);
  focusStrokeWidthToken.setValueFor(childElement, focusStrokeWidthValue);
};

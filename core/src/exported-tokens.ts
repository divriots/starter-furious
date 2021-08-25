import { CSSDesignToken, DesignToken } from '@microsoft/fast-foundation';
import {
  accentFillActiveDeltaToken,
  accentFillActiveToken,
  accentFillFocusDeltaToken,
  accentFillFocusToken,
  accentFillHoverDeltaToken,
  accentFillHoverToken,
  accentFillRestDeltaToken,
  accentFillRestToken,
  accentForegroundActiveDeltaToken,
  accentForegroundActiveToken,
  accentForegroundFocusDeltaToken,
  accentForegroundFocusToken,
  accentForegroundHoverDeltaToken,
  accentForegroundHoverToken,
  accentForegroundRestDeltaToken,
  accentForegroundRestToken,
  accentPaletteToken,
  baseHeightMultiplierToken,
  baseLayerLuminanceToken,
  bodyFontToken,
  controlCornerRadiusToken,
  densityToken,
  designUnitToken,
  directionToken,
  disabledOpacityToken,
  fillColorToken,
  focusStrokeInnerToken,
  focusStrokeOuterToken,
  focusStrokeWidthToken,
  foregroundOnAccentActiveLargeToken,
  foregroundOnAccentActiveToken,
  foregroundOnAccentFocusLargeToken,
  foregroundOnAccentFocusToken,
  foregroundOnAccentHoverLargeToken,
  foregroundOnAccentHoverToken,
  foregroundOnAccentRestLargeToken,
  foregroundOnAccentRestToken,
  neutralFillActiveDeltaToken,
  neutralFillActiveToken,
  neutralFillFocusDeltaToken,
  neutralFillFocusToken,
  neutralFillHoverDeltaToken,
  neutralFillHoverToken,
  neutralFillInputActiveDeltaToken,
  neutralFillInputActiveToken,
  neutralFillInputFocusDeltaToken,
  neutralFillInputFocusToken,
  neutralFillInputHoverDeltaToken,
  neutralFillInputHoverToken,
  neutralFillInputRestDeltaToken,
  neutralFillInputRestToken,
  neutralFillLayerRestDeltaToken,
  neutralFillLayerRestToken,
  neutralFillRestDeltaToken,
  neutralFillRestToken,
  neutralFillStealthActiveDeltaToken,
  neutralFillStealthActiveToken,
  neutralFillStealthFocusDeltaToken,
  neutralFillStealthFocusToken,
  neutralFillStealthHoverDeltaToken,
  neutralFillStealthHoverToken,
  neutralFillStealthRestDeltaToken,
  neutralFillStealthRestToken,
  neutralFillStrongActiveDeltaToken,
  neutralFillStrongActiveToken,
  neutralFillStrongFocusDeltaToken,
  neutralFillStrongFocusToken,
  neutralFillStrongHoverDeltaToken,
  neutralFillStrongHoverToken,
  neutralFillStrongRestDeltaToken,
  neutralFillStrongRestToken,
  neutralForegroundHintToken,
  neutralForegroundRestToken,
  neutralLayer1Token,
  neutralLayer2Token,
  neutralLayer3Token,
  neutralLayer4Token,
  neutralLayerCardContainerToken,
  neutralLayerFloatingToken,
  neutralPaletteToken,
  neutralStrokeActiveDeltaToken,
  neutralStrokeActiveToken,
  neutralStrokeDividerRestDeltaToken,
  neutralStrokeDividerRestToken,
  neutralStrokeFocusDeltaToken,
  neutralStrokeFocusToken,
  neutralStrokeHoverDeltaToken,
  neutralStrokeHoverToken,
  neutralStrokeRestDeltaToken,
  neutralStrokeRestToken,
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

const makeReadOnly = <I, T extends CSSDesignToken<I> | DesignToken<I>>(token: T): T => {
  return new Proxy(token, {
    get: (target, prop, reciever) => {
      if (['withDefault', 'setValueFor', 'deleteValueFor'].includes(prop as string)) {
        throw new Error(`Token "${target.name}" is read-only.`);
      }
      return Reflect.get(target, prop, reciever);
    },
  });
};

export const accentFillActive = makeReadOnly(accentFillActiveToken);
export const accentFillActiveDelta = makeReadOnly(accentFillActiveDeltaToken);
export const accentFillFocus = makeReadOnly(accentFillFocusToken);
export const accentFillFocusDelta = makeReadOnly(accentFillFocusDeltaToken);
export const accentFillHover = makeReadOnly(accentFillHoverToken);
export const accentFillHoverDelta = makeReadOnly(accentFillHoverDeltaToken);
export const accentFillRest = makeReadOnly(accentFillRestToken);
export const accentFillRestDelta = makeReadOnly(accentFillRestDeltaToken);
export const accentForegroundActive = makeReadOnly(accentForegroundActiveToken);
export const accentForegroundActiveDelta = makeReadOnly(accentForegroundActiveDeltaToken);
export const accentForegroundFocus = makeReadOnly(accentForegroundFocusToken);
export const accentForegroundFocusDelta = makeReadOnly(accentForegroundFocusDeltaToken);
export const accentForegroundHover = makeReadOnly(accentForegroundHoverToken);
export const accentForegroundHoverDelta = makeReadOnly(accentForegroundHoverDeltaToken);
export const accentForegroundRest = makeReadOnly(accentForegroundRestToken);
export const accentForegroundRestDelta = makeReadOnly(accentForegroundRestDeltaToken);
export const accentPalette = makeReadOnly(accentPaletteToken);
export const baseHeightMultiplier = makeReadOnly(baseHeightMultiplierToken);
export const baseLayerLuminance = baseLayerLuminanceToken;
export const bodyFont = makeReadOnly(bodyFontToken);
export const controlCornerRadius = makeReadOnly(controlCornerRadiusToken);
export const density = makeReadOnly(densityToken);
export const designUnit = makeReadOnly(designUnitToken);
export const direction = directionToken;
export const disabledOpacity = makeReadOnly(disabledOpacityToken);
export const fillColor = makeReadOnly(fillColorToken);
export const focusStrokeInner = makeReadOnly(focusStrokeInnerToken);
export const focusStrokeOuter = makeReadOnly(focusStrokeOuterToken);
export const focusStrokeWidth = makeReadOnly(focusStrokeWidthToken);
export const foregroundOnAccentActive = makeReadOnly(foregroundOnAccentActiveToken);
export const foregroundOnAccentActiveLarge = makeReadOnly(foregroundOnAccentActiveLargeToken);
export const foregroundOnAccentFocus = makeReadOnly(foregroundOnAccentFocusToken);
export const foregroundOnAccentFocusLarge = makeReadOnly(foregroundOnAccentFocusLargeToken);
export const foregroundOnAccentHover = makeReadOnly(foregroundOnAccentHoverToken);
export const foregroundOnAccentHoverLarge = makeReadOnly(foregroundOnAccentHoverLargeToken);
export const foregroundOnAccentRest = makeReadOnly(foregroundOnAccentRestToken);
export const foregroundOnAccentRestLarge = makeReadOnly(foregroundOnAccentRestLargeToken);
export const neutralFillActive = makeReadOnly(neutralFillActiveToken);
export const neutralFillActiveDelta = makeReadOnly(neutralFillActiveDeltaToken);
export const neutralFillFocus = makeReadOnly(neutralFillFocusToken);
export const neutralFillFocusDelta = makeReadOnly(neutralFillFocusDeltaToken);
export const neutralFillHover = makeReadOnly(neutralFillHoverToken);
export const neutralFillHoverDelta = makeReadOnly(neutralFillHoverDeltaToken);
export const neutralFillInputActive = makeReadOnly(neutralFillInputActiveToken);
export const neutralFillInputActiveDelta = makeReadOnly(neutralFillInputActiveDeltaToken);
export const neutralFillInputFocus = makeReadOnly(neutralFillInputFocusToken);
export const neutralFillInputFocusDelta = makeReadOnly(neutralFillInputFocusDeltaToken);
export const neutralFillInputHover = makeReadOnly(neutralFillInputHoverToken);
export const neutralFillInputHoverDelta = makeReadOnly(neutralFillInputHoverDeltaToken);
export const neutralFillInputRest = makeReadOnly(neutralFillInputRestToken);
export const neutralFillInputRestDelta = makeReadOnly(neutralFillInputRestDeltaToken);
export const neutralFillLayerRest = makeReadOnly(neutralFillLayerRestToken);
export const neutralFillLayerRestDelta = makeReadOnly(neutralFillLayerRestDeltaToken);
export const neutralFillRest = makeReadOnly(neutralFillRestToken);
export const neutralFillRestDelta = makeReadOnly(neutralFillRestDeltaToken);
export const neutralFillStealthActive = makeReadOnly(neutralFillStealthActiveToken);
export const neutralFillStealthActiveDelta = makeReadOnly(neutralFillStealthActiveDeltaToken);
export const neutralFillStealthFocus = makeReadOnly(neutralFillStealthFocusToken);
export const neutralFillStealthFocusDelta = makeReadOnly(neutralFillStealthFocusDeltaToken);
export const neutralFillStealthHover = makeReadOnly(neutralFillStealthHoverToken);
export const neutralFillStealthHoverDelta = makeReadOnly(neutralFillStealthHoverDeltaToken);
export const neutralFillStealthRest = makeReadOnly(neutralFillStealthRestToken);
export const neutralFillStealthRestDelta = makeReadOnly(neutralFillStealthRestDeltaToken);
export const neutralFillStrongActive = makeReadOnly(neutralFillStrongActiveToken);
export const neutralFillStrongActiveDelta = makeReadOnly(neutralFillStrongActiveDeltaToken);
export const neutralFillStrongFocus = makeReadOnly(neutralFillStrongFocusToken);
export const neutralFillStrongFocusDelta = makeReadOnly(neutralFillStrongFocusDeltaToken);
export const neutralFillStrongHover = makeReadOnly(neutralFillStrongHoverToken);
export const neutralFillStrongHoverDelta = makeReadOnly(neutralFillStrongHoverDeltaToken);
export const neutralFillStrongRest = makeReadOnly(neutralFillStrongRestToken);
export const neutralFillStrongRestDelta = makeReadOnly(neutralFillStrongRestDeltaToken);
export const neutralForegroundHint = makeReadOnly(neutralForegroundHintToken);
export const neutralForegroundRest = makeReadOnly(neutralForegroundRestToken);
export const neutralLayer1 = makeReadOnly(neutralLayer1Token);
export const neutralLayer2 = makeReadOnly(neutralLayer2Token);
export const neutralLayer3 = makeReadOnly(neutralLayer3Token);
export const neutralLayer4 = makeReadOnly(neutralLayer4Token);
export const neutralLayerCardContainer = makeReadOnly(neutralLayerCardContainerToken);
export const neutralLayerFloating = makeReadOnly(neutralLayerFloatingToken);
export const neutralPalette = makeReadOnly(neutralPaletteToken);
export const neutralStrokeActive = makeReadOnly(neutralStrokeActiveToken);
export const neutralStrokeActiveDelta = makeReadOnly(neutralStrokeActiveDeltaToken);
export const neutralStrokeDividerRest = makeReadOnly(neutralStrokeDividerRestToken);
export const neutralStrokeDividerRestDelta = makeReadOnly(neutralStrokeDividerRestDeltaToken);
export const neutralStrokeFocus = makeReadOnly(neutralStrokeFocusToken);
export const neutralStrokeFocusDelta = makeReadOnly(neutralStrokeFocusDeltaToken);
export const neutralStrokeHover = makeReadOnly(neutralStrokeHoverToken);
export const neutralStrokeHoverDelta = makeReadOnly(neutralStrokeHoverDeltaToken);
export const neutralStrokeRest = makeReadOnly(neutralStrokeRestToken);
export const neutralStrokeRestDelta = makeReadOnly(neutralStrokeRestDeltaToken);
export const strokeWidth = makeReadOnly(strokeWidthToken);
export const typeRampBaseFontSize = makeReadOnly(typeRampBaseFontSizeToken);
export const typeRampBaseLineHeight = makeReadOnly(typeRampBaseLineHeightToken);
export const typeRampMinus1FontSize = makeReadOnly(typeRampMinus1FontSizeToken);
export const typeRampMinus1LineHeight = makeReadOnly(typeRampMinus1LineHeightToken);
export const typeRampMinus2FontSize = makeReadOnly(typeRampMinus2FontSizeToken);
export const typeRampMinus2LineHeight = makeReadOnly(typeRampMinus2LineHeightToken);
export const typeRampPlus1FontSize = makeReadOnly(typeRampPlus1FontSizeToken);
export const typeRampPlus1LineHeight = makeReadOnly(typeRampPlus1LineHeightToken);
export const typeRampPlus2FontSize = makeReadOnly(typeRampPlus2FontSizeToken);
export const typeRampPlus2LineHeight = makeReadOnly(typeRampPlus2LineHeightToken);
export const typeRampPlus3FontSize = makeReadOnly(typeRampPlus3FontSizeToken);
export const typeRampPlus3LineHeight = makeReadOnly(typeRampPlus3LineHeightToken);
export const typeRampPlus4FontSize = makeReadOnly(typeRampPlus4FontSizeToken);
export const typeRampPlus4LineHeight = makeReadOnly(typeRampPlus4LineHeightToken);
export const typeRampPlus5FontSize = makeReadOnly(typeRampPlus5FontSizeToken);
export const typeRampPlus5LineHeight = makeReadOnly(typeRampPlus5LineHeightToken);
export const typeRampPlus6FontSize = makeReadOnly(typeRampPlus6FontSizeToken);
export const typeRampPlus6LineHeight = makeReadOnly(typeRampPlus6LineHeightToken);

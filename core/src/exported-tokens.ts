import { CSSDesignToken, DesignToken } from '@microsoft/fast-foundation';
import {
  accentFillActiveToken,
  accentFillFocusToken,
  accentFillHoverToken,
  accentFillRestToken,
  accentForegroundActiveToken,
  accentForegroundFocusToken,
  accentForegroundHoverToken,
  accentForegroundRestToken,
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
  neutralFillActiveToken,
  neutralFillFocusToken,
  neutralFillHoverToken,
  neutralFillInputActiveToken,
  neutralFillInputFocusToken,
  neutralFillInputHoverToken,
  neutralFillInputRestToken,
  neutralFillLayerRestToken,
  neutralFillRestToken,
  neutralFillStealthActiveToken,
  neutralFillStealthFocusToken,
  neutralFillStealthHoverToken,
  neutralFillStealthRestToken,
  neutralFillStrongActiveToken,
  neutralFillStrongFocusToken,
  neutralFillStrongHoverToken,
  neutralFillStrongRestToken,
  neutralForegroundHintToken,
  neutralForegroundRestToken,
  neutralLayer1Token,
  neutralLayer2Token,
  neutralLayer3Token,
  neutralLayer4Token,
  neutralLayerCardContainerToken,
  neutralLayerFloatingToken,
  neutralStrokeActiveToken,
  neutralStrokeDividerRestToken,
  neutralStrokeFocusToken,
  neutralStrokeHoverToken,
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
export const accentFillFocus = makeReadOnly(accentFillFocusToken);
export const accentFillHover = makeReadOnly(accentFillHoverToken);
export const accentFillRest = makeReadOnly(accentFillRestToken);
export const accentForegroundActive = makeReadOnly(accentForegroundActiveToken);
export const accentForegroundFocus = makeReadOnly(accentForegroundFocusToken);
export const accentForegroundHover = makeReadOnly(accentForegroundHoverToken);
export const accentForegroundRest = makeReadOnly(accentForegroundRestToken);
export const baseHeightMultiplier = makeReadOnly(baseHeightMultiplierToken);
export const baseLayerLuminance = baseLayerLuminanceToken;
export const bodyFont = makeReadOnly(bodyFontToken);
export const controlCornerRadius = makeReadOnly(controlCornerRadiusToken);
export const density = densityToken;
export const designUnit = makeReadOnly(designUnitToken);
export const direction = directionToken;
export const disabledOpacity = makeReadOnly(disabledOpacityToken);
export const fillColor = fillColorToken;
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
export const neutralFillFocus = makeReadOnly(neutralFillFocusToken);
export const neutralFillHover = makeReadOnly(neutralFillHoverToken);
export const neutralFillInputActive = makeReadOnly(neutralFillInputActiveToken);
export const neutralFillInputFocus = makeReadOnly(neutralFillInputFocusToken);
export const neutralFillInputHover = makeReadOnly(neutralFillInputHoverToken);
export const neutralFillInputRest = makeReadOnly(neutralFillInputRestToken);
export const neutralFillLayerRest = makeReadOnly(neutralFillLayerRestToken);
export const neutralFillRest = makeReadOnly(neutralFillRestToken);
export const neutralFillStealthActive = makeReadOnly(neutralFillStealthActiveToken);
export const neutralFillStealthFocus = makeReadOnly(neutralFillStealthFocusToken);
export const neutralFillStealthHover = makeReadOnly(neutralFillStealthHoverToken);
export const neutralFillStealthRest = makeReadOnly(neutralFillStealthRestToken);
export const neutralFillStrongActive = makeReadOnly(neutralFillStrongActiveToken);
export const neutralFillStrongFocus = makeReadOnly(neutralFillStrongFocusToken);
export const neutralFillStrongHover = makeReadOnly(neutralFillStrongHoverToken);
export const neutralFillStrongRest = makeReadOnly(neutralFillStrongRestToken);
export const neutralForegroundHint = makeReadOnly(neutralForegroundHintToken);
export const neutralForegroundRest = makeReadOnly(neutralForegroundRestToken);
export const neutralLayer1 = makeReadOnly(neutralLayer1Token);
export const neutralLayer2 = makeReadOnly(neutralLayer2Token);
export const neutralLayer3 = makeReadOnly(neutralLayer3Token);
export const neutralLayer4 = makeReadOnly(neutralLayer4Token);
export const neutralLayerCardContainer = makeReadOnly(neutralLayerCardContainerToken);
export const neutralLayerFloating = makeReadOnly(neutralLayerFloatingToken);
export const neutralStrokeActive = makeReadOnly(neutralStrokeActiveToken);
export const neutralStrokeDividerRest = makeReadOnly(neutralStrokeDividerRestToken);
export const neutralStrokeFocus = makeReadOnly(neutralStrokeFocusToken);
export const neutralStrokeHover = makeReadOnly(neutralStrokeHoverToken);
export const neutralStrokeRest = makeReadOnly(neutralStrokeRestToken);
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

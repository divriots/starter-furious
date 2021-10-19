```js script
import { provideDesignSystem } from '@divriots/starter-furious';
import '~/dockit/dockit-fast-frame-color-palette';
import '~/dockit/dockit-fast-frame-color-tokens';
provideDesignSystem().register();
```

# color-tokens

`Furious` is based on the FAST Frame design system which uses an adaptive color system. Please refer to the [official documentation](https://www.fast.design/docs/design-systems/fast-frame/#adaptive-color-system) to learn more about it.

## Usage

```js preview-story
import { accentFillRest, foregroundOnAccentRest } from '@divriots/starter-furious';
import { FASTElement, css, html } from '@microsoft/fast-element';

class ColorTokensUsage extends FASTElement {
  static definition = {
    name: 'color-tokens-usage',
    styles: css`
      p {
        background-color: ${accentFillRest};
        color: ${foregroundOnAccentRest};
      }
    `,
    template: html`
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
    `,
  };
}

FASTElement.define(ColorTokensUsage);

export const usageStory = () => html`<color-tokens-usage></color-tokens-usage>`;
```

## Palettes

Most color tokens are based on one of 2 palettes: accent or neutral. They are not used directly, unless you want to change the algorithms behind color recipes which are driving the adaptive color system.

### Accent Palette

<dockit-fast-frame-color-palette type="accent"></dockit-fast-frame-color-palette>

### Neutral Palette

<dockit-fast-frame-color-palette type="neutral"></dockit-fast-frame-color-palette>

## Light and Dark Modes

With the help of the `baseLayerLuminance` token you can switch between light and dark modes. Look below to see how it impacts the colors.

```js preview-story
import { baseLayerLuminance } from '@divriots/starter-furious';
import { StandardLuminance } from '@microsoft/fast-components';

class ModeSwitcher extends FASTElement {
  static definition = {
    name: 'mode-switcher',
    template: html`<button @click=${(x) => x.switch()}>Click to switch the mode</button>`,
  };

  switch() {
    const currentLuminanceValue = baseLayerLuminance.getValueFor(document.body);
    const newLuminanceValue =
      currentLuminanceValue === StandardLuminance.LightMode ? StandardLuminance.DarkMode : StandardLuminance.LightMode;
    baseLayerLuminance.setValueFor(document.body, newLuminanceValue);
  }
}

FASTElement.define(ModeSwitcher);

export const modeSwitcherStory = () => html`<mode-switcher></mode-switcher>`;
```

## Semantic Color Tokens

Exact color values are not usable by themselves, because they are context dependent and can vary between light and dark modes, therefore token variables have semantical names and you need to use these variables in CSS as well as you do with other tokens too.

### Neutral Layers

<dockit-fast-frame-color-tokens tokens="neutralLayerCardContainer,neutralLayerFloating,neutralLayer1,neutralLayer2,neutralLayer3,neutralLayer4"></dockit-fast-frame-color-tokens>

### Fill

<dockit-fast-frame-color-tokens tokens="fillColor"></dockit-fast-frame-color-tokens>

### Accent Fill

<dockit-fast-frame-color-tokens tokens="accentFillRest,accentFillHover,accentFillActive,accentFillFocus"></dockit-fast-frame-color-tokens>

### Foreground On Accent

<dockit-fast-frame-color-tokens tokens="foregroundOnAccentRest,foregroundOnAccentHover,foregroundOnAccentActive,foregroundOnAccentFocus"></dockit-fast-frame-color-tokens>

### Foreground On Accent Large

<dockit-fast-frame-color-tokens tokens="foregroundOnAccentRestLarge,foregroundOnAccentHoverLarge,foregroundOnAccentActiveLarge,foregroundOnAccentFocusLarge"></dockit-fast-frame-color-tokens>

### Accent Foreground

<dockit-fast-frame-color-tokens tokens="accentForegroundRest,accentForegroundHover,accentForegroundActive,accentForegroundFocus"></dockit-fast-frame-color-tokens>

### Neutral Fill

<dockit-fast-frame-color-tokens tokens="neutralFillRest,neutralFillHover,neutralFillActive,neutralFillFocus"></dockit-fast-frame-color-tokens>

### Neutral Fill Input

<dockit-fast-frame-color-tokens tokens="neutralFillInputRest,neutralFillInputHover,neutralFillInputActive,neutralFillInputFocus"></dockit-fast-frame-color-tokens>

### Neutral Fill Stealth

<dockit-fast-frame-color-tokens tokens="neutralFillStealthRest,neutralFillStealthHover,neutralFillStealthActive,neutralFillStealthFocus"></dockit-fast-frame-color-tokens>

### Neutral Fill Strong

<dockit-fast-frame-color-tokens tokens="neutralFillStrongRest,neutralFillStrongHover,neutralFillStrongActive,neutralFillStrongFocus"></dockit-fast-frame-color-tokens>

### Neutral Fill Layer

<dockit-fast-frame-color-tokens tokens="neutralFillLayerRest"></dockit-fast-frame-color-tokens>

### Focus Stroke

<dockit-fast-frame-color-tokens tokens="focusStrokeOuter,focusStrokeInner"></dockit-fast-frame-color-tokens>

### Neutral Foreground

<dockit-fast-frame-color-tokens tokens="neutralForegroundRest,neutralForegroundHint"></dockit-fast-frame-color-tokens>

### Neutral Stroke

<dockit-fast-frame-color-tokens tokens="neutralStrokeRest,neutralStrokeHover,neutralStrokeActive,neutralStrokeFocus"></dockit-fast-frame-color-tokens>

### Neutral Stroke Divider

<dockit-fast-frame-color-tokens tokens="neutralStrokeDividerRest"></dockit-fast-frame-color-tokens>

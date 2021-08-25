import {
  typeRampBaseFontSize,
  typeRampBaseLineHeight,
  typeRampMinus1FontSize,
  typeRampMinus1LineHeight,
  typeRampMinus2FontSize,
  typeRampMinus2LineHeight,
  typeRampPlus1FontSize,
  typeRampPlus1LineHeight,
  typeRampPlus2FontSize,
  typeRampPlus2LineHeight,
  typeRampPlus3FontSize,
  typeRampPlus3LineHeight,
  typeRampPlus4FontSize,
  typeRampPlus4LineHeight,
  typeRampPlus5FontSize,
  typeRampPlus5LineHeight,
  typeRampPlus6FontSize,
  typeRampPlus6LineHeight,
} from '@microsoft/fast-components';
import { customElement, FASTElement, html } from '@microsoft/fast-element';
import { CSSDesignToken } from '@microsoft/fast-foundation';

@customElement({
  name: 'dockit-fast-frame-typography-tokens',
  shadowOptions: null,
  template: html<DockitFastFrameTypographyTokens>`
    <table>
      <thead>
        <tr>
          <th>Level</th>
          <th>Font Size Token</th>
          <th>Line Height Token</th>
          <th>Demo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Minus 2 (smallest)</td>
          <td>typeRampMinus2FontSize</td>
          <td>typeRampMinus2LineHeight</td>
          <td
            style="font-size: ${() => typeRampMinus2FontSize.createCSS()}; line-height: ${() =>
              typeRampMinus2LineHeight.createCSS()};"
          >
            The quick brown fox jumps over a lazy dog
          </td>
        </tr>
        <tr>
          <td>Minus 1</td>
          <td>typeRampMinus1FontSize</td>
          <td>typeRampMinus1LineHeight</td>
          <td
            style="font-size: ${() => typeRampMinus1FontSize.createCSS()}; line-height: ${() =>
              typeRampMinus1LineHeight.createCSS()};"
          >
            The quick brown fox jumps over a lazy dog
          </td>
        </tr>
        <tr>
          <td>Base (body)</td>
          <td>typeRampBaseFontSize</td>
          <td>typeRampBaseLineHeight</td>
          <td
            style="font-size: ${() => typeRampBaseFontSize.createCSS()}; line-height: ${() =>
              typeRampBaseLineHeight.createCSS()};"
          >
            The quick brown fox jumps over a lazy dog
          </td>
        </tr>
        <tr>
          <td>Plus 1</td>
          <td>typeRampPlus1FontSize</td>
          <td>typeRampPlus1LineHeight</td>
          <td
            style="font-size: ${() => typeRampPlus1FontSize.createCSS()}; line-height: ${() =>
              typeRampPlus1LineHeight.createCSS()};"
          >
            The quick brown fox jumps over a lazy dog
          </td>
        </tr>
        <tr>
          <td>Plus 2</td>
          <td>typeRampPlus2FontSize</td>
          <td>typeRampPlus2LineHeight</td>
          <td
            style="font-size: ${() => typeRampPlus2FontSize.createCSS()}; line-height: ${() =>
              typeRampPlus2LineHeight.createCSS()};"
          >
            The quick brown fox jumps over a lazy dog
          </td>
        </tr>
        <tr>
          <td>Plus 3</td>
          <td>typeRampPlus3FontSize</td>
          <td>typeRampPlus3LineHeight</td>
          <td
            style="font-size: ${() => typeRampPlus3FontSize.createCSS()}; line-height: ${() =>
              typeRampPlus3LineHeight.createCSS()};"
          >
            The quick brown fox jumps over a lazy dog
          </td>
        </tr>
        <tr>
          <td>Plus 4</td>
          <td>typeRampPlus4FontSize</td>
          <td>typeRampPlus4LineHeight</td>
          <td
            style="font-size: ${() => typeRampPlus4FontSize.createCSS()}; line-height: ${() =>
              typeRampPlus4LineHeight.createCSS()};"
          >
            The quick brown fox jumps over a lazy dog
          </td>
        </tr>
        <tr>
          <td>Plus 5</td>
          <td>typeRampPlus5FontSize</td>
          <td>typeRampPlus5LineHeight</td>
          <td
            style="font-size: ${() => typeRampPlus5FontSize.createCSS()}; line-height: ${() =>
              typeRampPlus5LineHeight.createCSS()};"
          >
            The quick brown fox jumps over a lazy dog
          </td>
        </tr>
        <tr>
          <td>Plus 6 (largest)</td>
          <td>typeRampPlus6FontSize</td>
          <td>typeRampPlus6LineHeight</td>
          <td
            style="font-size: ${() => typeRampPlus6FontSize.createCSS()}; line-height: ${() =>
              typeRampPlus6LineHeight.createCSS()};"
          >
            The quick brown fox jumps over a lazy dog
          </td>
        </tr>
      </tbody>
    </table>
  `,
})
class DockitFastFrameTypographyTokens extends FASTElement {}

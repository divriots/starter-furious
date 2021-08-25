import * as fastComponents from '@microsoft/fast-components';
import { attr, css, customElement, FASTElement, html, repeat } from '@microsoft/fast-element';

@customElement({
  name: 'dockit-fast-frame-color-tokens',
  styles: css`
    .colors {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    .color {
      margin-right: 20px;
      margin-bottom: 20px;
    }

    .color-name {
      font-size: 10px;
    }

    .color-demo {
      box-shadow: 0px 0px 6px -2px #000000;
      width: 160px;
      height: 160px;
    }
  `,
  template: html<DockitFastFrameColorTokens>`
    <ul class="colors">
      ${repeat(
        (x) => x.tokens,
        html<string>`
          <li class="color">
            <div class="color-name">${(tokenName) => tokenName}</div>
            <div
              class="color-demo"
              style="background-color: ${(tokenName) => fastComponents[tokenName].createCSS()}"
            ></div>
          </li>
        `,
      )}
    </ul>
  `,
})
class DockitFastFrameColorTokens extends FASTElement {
  @attr({
    converter: {
      toView(value: string[]): string {
        return value.join(',');
      },
      fromView(value: string): string[] {
        return value.split(',');
      },
    },
  })
  public tokens: string[];
}

import { fastHorizontalScroll, HorizontalScroll } from '@microsoft/fast-components';
import { html } from '@microsoft/fast-element';

export const getHorizontalScroll = () =>
  fastHorizontalScroll({
    nextFlipper: html<HorizontalScroll>`
      <fs-flipper @click="${(x) => x.scrollToNext()}" aria-hidden="${(x) => x.flippersHiddenFromAT}"></fs-flipper>
    `,
    previousFlipper: html<HorizontalScroll>`
      <fs-flipper
        @click="${(x) => x.scrollToPrevious()}"
        direction="previous"
        aria-hidden="${(x) => x.flippersHiddenFromAT}"
      ></fs-flipper>
    `,
  });

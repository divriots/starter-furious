import { html } from '@microsoft/fast-element';
import './styles.css';

export const docLayoutTemplate = (content, context) => html`<div class="prose" :innerHTML="${() => content}"></div>`;

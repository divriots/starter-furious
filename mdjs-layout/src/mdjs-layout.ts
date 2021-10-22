import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { mdjsLayoutStyles } from './mdjs-layout.styles';
import { mdjsLayoutTemplate } from './mdjs-layout.template';

type ColorScheme = 'light' | 'dark';

export class MdjsLayout extends LitElement {
  @property() context: any;
  @property() isNavigationShown: boolean = false;
  @property() private _colorScheme: ColorScheme;

  static styles = mdjsLayoutStyles;

  connectedCallback(): void {
    super.connectedCallback();
    this.colorScheme = this.getInitialColorScheme();
  }

  toggleColorScheme(): void {
    this.colorScheme = this.colorScheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('colorScheme', this.colorScheme);
  }

  toggleNavigation(): void {
    this.isNavigationShown = !this.isNavigationShown;
  }

  hideNavigation(event: Event): void {
    if (event.currentTarget === event.target) {
      this.isNavigationShown = false;
    }
  }

  relativeUrl(url: string): string {
    return [
      Array(url.split('/').length - 1)
        .fill('..')
        .join('/'),
      url,
    ].join('/');
  }

  get colorScheme(): ColorScheme {
    return this._colorScheme;
  }

  set colorScheme(value: ColorScheme) {
    if (this._colorScheme !== value) {
      this._colorScheme = value;
      this.dispatchColorSchemeChange();
    }
  }

  render() {
    if (this.colorScheme === 'dark') {
      this.classList.add('dark');
    } else {
      this.classList.remove('dark');
    }
    return mdjsLayoutTemplate(this);
  }

  private getInitialColorScheme(): ColorScheme {
    return (
      (localStorage.getItem('colorScheme') as ColorScheme | undefined) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark') ||
      'light'
    );
  }

  private dispatchColorSchemeChange(): void {
    this.dispatchEvent(
      new CustomEvent('color-scheme-change', {
        detail: {
          colorScheme: this.colorScheme,
        },
      }),
    );
  }
}

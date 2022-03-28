import { DesignSystem } from '@microsoft/fast-foundation';
import { provideTokens } from './provide-tokens';

export const provideDesignSystem = (element: HTMLElement = document.body): Pick<DesignSystem, 'register'> => {
  const isProvided = (element as any).$$isDesignSystemProvided;
  const ds = DesignSystem.getOrCreate(element);
  if (!isProvided) {
    (element as any).$$isDesignSystemProvided = true;
    provideTokens(element);
    ds.withPrefix('fs').withDesignTokenRoot(document.documentElement);
  }
  return new Proxy(ds, {
    get: (target, prop, ...rest) => {
      if (['withPrefix', 'withShadowRootMode', 'withElementDisambiguation'].includes(prop as string)) {
        throw new Error('Modification of the Design System is not allowed.');
      }
      return Reflect.get(target, prop, ...rest);
    },
  });
};

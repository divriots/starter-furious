import { DesignSystem } from '@microsoft/fast-foundation';
import { provideTokens } from './provide-tokens';

export const provideDesignSystem = (childElement?: HTMLElement): Pick<DesignSystem, 'register'> => {
  provideTokens(childElement);
  const ds = DesignSystem.getOrCreate(childElement).withPrefix('fs').withDesignTokenRoot(document.documentElement);
  return new Proxy(ds, {
    get: (target, prop, ...rest) => {
      if (['withPrefix', 'withShadowRootMode', 'withElementDisambiguation'].includes(prop as string)) {
        throw new Error('Modification of the Design System is not allowed.');
      }
      return Reflect.get(target, prop, ...rest);
    },
  });
};

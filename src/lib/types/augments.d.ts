import type { ParseLocales, ParseMiddlewares, ParseClient } from 'seyfert';
import type defaultLang from '#root/langs/en-US';

declare module 'seyfert' {
  interface UsingClient extends ParseClient<Client<true>> {}
  interface DefaultLocale extends ParseLocales<typeof defaultLang> {}

  interface Client {
    t(locale: string): ParseLocales<typeof defaultLang>;
  }

  interface RegisteredMiddlewares
    extends ParseMiddlewares<typeof AllMiddlewares> {}
}

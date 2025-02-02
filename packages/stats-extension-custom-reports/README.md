# Statoscope Package Custom Reports

[![npm version](https://badge.fury.io/js/%40statoscope%2Fstats-extension-package-info.svg)](https://badge.fury.io/js/%40statoscope%2Fstats-extension-custom-reports)
[![Support](https://img.shields.io/badge/-Support-blue)](https://opencollective.com/statoscope)

Statoscope extension to store custom reports in stats.

A custom report is:

```ts
export type Report<TData, TContext> = {
  id: string; // report id
  name?: string; // report title
  compilation?: string | null; // if specified then a report will be shown only in specific compilation
  data?: TData | (() => Promise<TData> | TData); // raw data for the report or a function that produces a data (may return promise)
  view: ViewConfig<TData, TContext>; // any DiscoveryJS view. String turns to script to eval
};
```

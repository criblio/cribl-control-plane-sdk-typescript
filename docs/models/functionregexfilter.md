# FunctionRegexFilter

## Example Usage

```typescript
import { FunctionRegexFilter } from "cribl-control-plane/models";

let value: FunctionRegexFilter = {
  conf: {
    regex: "<value>",
    regexList: [
      {
        regex: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "regex_filter",
  initTime: 8988.05,
  loadTime: 5786.78,
  modTime: 3109.56,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `conf`                                                                 | [models.FunctionRegexFilterConf](../models/functionregexfilterconf.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `filename`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `disabled`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `group`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `id`                                                                   | [models.FunctionRegexFilterId](../models/functionregexfilterid.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `initTime`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `loadTime`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `modTime`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `schema`                                                               | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | JSON Schema Draft-06                                                   |
| `uischema`                                                             | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `version`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
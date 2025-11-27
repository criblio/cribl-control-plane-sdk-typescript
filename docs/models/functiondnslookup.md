# FunctionDnsLookup

## Example Usage

```typescript
import { FunctionDnsLookup } from "cribl-control-plane/models";

let value: FunctionDnsLookup = {
  conf: {
    dnsLookupFields: [
      {
        inFieldName: "<value>",
        outFieldName: "<value>",
      },
    ],
    reverseLookupFields: [
      {
        inFieldName: "<value>",
        outFieldName: "<value>",
      },
    ],
    dnsServers: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    domainOverrides: [
      "<value 1>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "dns_lookup",
  initTime: 3614.94,
  loadTime: 6338.43,
  modTime: 1015.99,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `conf`                                                             | [models.FunctionDnsLookupConf](../models/functiondnslookupconf.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `filename`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `disabled`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `group`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `id`                                                               | [models.FunctionDnsLookupId](../models/functiondnslookupid.md)     | :heavy_check_mark:                                                 | N/A                                                                |
| `initTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `loadTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `modTime`                                                          | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `schema`                                                           | Record<string, *any*>                                              | :heavy_check_mark:                                                 | JSON Schema Draft-06                                               |
| `uischema`                                                         | Record<string, *any*>                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `version`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
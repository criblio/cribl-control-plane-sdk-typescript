# FunctionCefConf

## Example Usage

```typescript
import { FunctionCefConf } from "cribl-control-plane/models";

let value: FunctionCefConf = {
  header: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  extension: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `outputField`                                             | *string*                                                  | :heavy_minus_sign:                                        | The field to which the CEF formatted event will be output |
| `header`                                                  | [models.Header](../models/header.md)[]                    | :heavy_minus_sign:                                        | Set of header key/value pairs                             |
| `extension`                                               | [models.Extension](../models/extension.md)[]              | :heavy_minus_sign:                                        | Set of extension key-value pairs                          |
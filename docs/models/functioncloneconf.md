# FunctionCloneConf

## Example Usage

```typescript
import { FunctionCloneConf } from "cribl-control-plane/models";

let value: FunctionCloneConf = {
  clones: [
    {
      "key": "<value>",
      "key1": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  ],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `clones`                                    | Record<string, *string*>[]                  | :heavy_minus_sign:                          | Create clones with the following fields set |
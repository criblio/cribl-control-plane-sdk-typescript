# FunctionCloneSchema

## Example Usage

```typescript
import { FunctionCloneSchema } from "cribl-control-plane/models";

let value: FunctionCloneSchema = {
  clones: [
    {
      "key": "<value>",
    },
    {
      "key": "<value>",
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
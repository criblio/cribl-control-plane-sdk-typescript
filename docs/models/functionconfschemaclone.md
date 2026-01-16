# FunctionConfSchemaClone

## Example Usage

```typescript
import { FunctionConfSchemaClone } from "cribl-control-plane/models";

let value: FunctionConfSchemaClone = {
  clones: [
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {},
  ],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `clones`                                    | Record<string, *string*>[]                  | :heavy_minus_sign:                          | Create clones with the following fields set |
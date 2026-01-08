# CountedFunctionResponse

## Example Usage

```typescript
import { CountedFunctionResponse } from "cribl-control-plane/models";

let value: CountedFunctionResponse = {
  count: 937893,
  items: [
    {
      __filename: "example.file",
      asyncTimeout: 803.8,
      cribl_version: "<value>",
      disabled: true,
      group: "<value>",
      handleSignals: true,
      id: "comment",
      loadTime: 555.8,
      modTime: 1576.77,
      name: "<value>",
      sync: false,
      uischema: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      version: "<value>",
      schema: {
        comment:
          "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      },
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.FunctionResponse*[]                | :heavy_minus_sign:                         | N/A                                        |
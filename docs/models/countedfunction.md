# CountedFunction

## Example Usage

```typescript
import { CountedFunction } from "cribl-control-plane/models";

let value: CountedFunction = {
  count: 812915,
  items: [
    {
      conf: {
        comment:
          "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      },
      filename: "example.file",
      disabled: false,
      group: "<value>",
      id: "comment",
      initTime: 5507.02,
      loadTime: 1027.39,
      modTime: 8866.85,
      name: "<value>",
      schema: {
        "key": "<value>",
      },
      uischema: {
        "key": "<value>",
        "key1": "<value>",
      },
      version: "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | *models.FunctionT*[]                       | :heavy_minus_sign:                         | N/A                                        |
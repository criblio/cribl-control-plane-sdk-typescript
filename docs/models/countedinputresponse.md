# CountedInputResponse

## Example Usage

```typescript
import { CountedInputResponse } from "cribl-control-plane/models";

let value: CountedInputResponse = {
  count: 120382,
  items: [
    {
      type: "msk",
      brokers: [
        "<value 1>",
        "<value 2>",
      ],
      topics: [],
      awsAuthenticationMethod: "<value>",
      region: "<value>",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_check_mark:                         | number of items present in the items array |
| `items`                                    | *models.InputResponse*[]                   | :heavy_check_mark:                         | List of items in this response.            |
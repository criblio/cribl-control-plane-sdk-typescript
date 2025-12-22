# ItemsTypeAuthTokens

## Example Usage

```typescript
import { ItemsTypeAuthTokens } from "cribl-control-plane/models";

let value: ItemsTypeAuthTokens = {
  tokenSecret: "<value>",
  description: "taro submitter by mostly sit citizen more",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `tokenSecret`                         | *string*                              | :heavy_check_mark:                    | Select or create a stored text secret |
| `enabled`                             | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `description`                         | *string*                              | :heavy_minus_sign:                    | Optional token description            |
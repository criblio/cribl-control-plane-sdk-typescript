# AuthTokens1Type

## Example Usage

```typescript
import { AuthTokens1Type } from "cribl-control-plane/models";

let value: AuthTokens1Type = {
  tokenSecret: "<value>",
  description: "hold surprised bench",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `tokenSecret`                         | *string*                              | :heavy_check_mark:                    | Select or create a stored text secret |
| `enabled`                             | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `description`                         | *string*                              | :heavy_minus_sign:                    | Optional token description            |
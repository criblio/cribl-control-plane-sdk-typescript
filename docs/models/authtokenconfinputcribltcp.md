# AuthTokenConfInputCriblTcp

## Example Usage

```typescript
import { AuthTokenConfInputCriblTcp } from "cribl-control-plane/models";

let value: AuthTokenConfInputCriblTcp = {
  tokenSecret: "<value>",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `tokenSecret`                         | *string*                              | :heavy_check_mark:                    | Select or create a stored text secret |
| `enabled`                             | *boolean*                             | :heavy_minus_sign:                    | Enable token                          |
| `description`                         | *string*                              | :heavy_minus_sign:                    | Optional token description            |
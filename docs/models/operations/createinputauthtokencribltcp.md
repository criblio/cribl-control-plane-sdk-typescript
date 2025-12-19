# CreateInputAuthTokenCriblTCP

## Example Usage

```typescript
import { CreateInputAuthTokenCriblTCP } from "cribl-control-plane/models/operations";

let value: CreateInputAuthTokenCriblTCP = {
  tokenSecret: "<value>",
  description: "successfully provided when pish",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `tokenSecret`                         | *string*                              | :heavy_check_mark:                    | Select or create a stored text secret |
| `enabled`                             | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `description`                         | *string*                              | :heavy_minus_sign:                    | Optional token description            |
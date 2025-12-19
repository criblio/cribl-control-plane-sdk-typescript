# CreateInputAuthTokenCriblHTTP

## Example Usage

```typescript
import { CreateInputAuthTokenCriblHTTP } from "cribl-control-plane/models/operations";

let value: CreateInputAuthTokenCriblHTTP = {
  tokenSecret: "<value>",
  description: "exactly scarily overstay vain yum unsteady loudly",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `tokenSecret`                         | *string*                              | :heavy_check_mark:                    | Select or create a stored text secret |
| `enabled`                             | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `description`                         | *string*                              | :heavy_minus_sign:                    | Optional token description            |
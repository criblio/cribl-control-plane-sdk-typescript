# InputAuthTokenCriblTCP

## Example Usage

```typescript
import { InputAuthTokenCriblTCP } from "cribl-control-plane/models";

let value: InputAuthTokenCriblTCP = {
  tokenSecret: "<value>",
  description: "pace duh lest meh unusual abaft own",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `tokenSecret`                         | *string*                              | :heavy_check_mark:                    | Select or create a stored text secret |
| `enabled`                             | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `description`                         | *string*                              | :heavy_minus_sign:                    | Optional token description            |
# InputCriblHttpAuthToken

## Example Usage

```typescript
import { InputCriblHttpAuthToken } from "cribl-control-plane/models";

let value: InputCriblHttpAuthToken = {
  tokenSecret: "<value>",
  description: "tabletop boohoo flawed",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `tokenSecret`                         | *string*                              | :heavy_check_mark:                    | Select or create a stored text secret |
| `enabled`                             | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `description`                         | *string*                              | :heavy_minus_sign:                    | Optional token description            |
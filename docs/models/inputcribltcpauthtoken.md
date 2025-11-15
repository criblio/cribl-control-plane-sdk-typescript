# InputCriblTcpAuthToken

## Example Usage

```typescript
import { InputCriblTcpAuthToken } from "cribl-control-plane/models";

let value: InputCriblTcpAuthToken = {
  tokenSecret: "<value>",
  description: "boohoo terrorise boo than common",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `tokenSecret`                         | *string*                              | :heavy_check_mark:                    | Select or create a stored text secret |
| `enabled`                             | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `description`                         | *string*                              | :heavy_minus_sign:                    | Optional token description            |
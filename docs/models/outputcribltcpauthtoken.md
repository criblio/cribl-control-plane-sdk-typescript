# OutputCriblTcpAuthToken

## Example Usage

```typescript
import { OutputCriblTcpAuthToken } from "cribl-control-plane/models";

let value: OutputCriblTcpAuthToken = {
  tokenSecret: "<value>",
  description: "pick noisily heavily round",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `tokenSecret`                         | *string*                              | :heavy_check_mark:                    | Select or create a stored text secret |
| `enabled`                             | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `description`                         | *string*                              | :heavy_minus_sign:                    | Optional token description            |
# LoginResponse

## Example Usage

```typescript
import { LoginResponse } from "cribl-control-plane/models/operations";

let value: LoginResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    token: "<value>",
  },
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `headers`                                     | Record<string, *string*[]>                    | :heavy_check_mark:                            | N/A                                           |
| `result`                                      | [models.AuthToken](../../models/authtoken.md) | :heavy_check_mark:                            | N/A                                           |
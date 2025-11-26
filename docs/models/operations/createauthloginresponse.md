# CreateAuthLoginResponse

## Example Usage

```typescript
import { CreateAuthLoginResponse } from "cribl-control-plane/models/operations";

let value: CreateAuthLoginResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    forcePasswordChange: false,
    token: "<value>",
  },
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `headers`                                     | Record<string, *string*[]>                    | :heavy_check_mark:                            | N/A                                           |
| `result`                                      | [models.AuthToken](../../models/authtoken.md) | :heavy_check_mark:                            | N/A                                           |
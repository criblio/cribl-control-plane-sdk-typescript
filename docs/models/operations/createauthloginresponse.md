# CreateAuthLoginResponse

## Example Usage

```typescript
import { CreateAuthLoginResponse } from "cribl-control-plane/models/operations";

let value: CreateAuthLoginResponse = {
  Headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    tokenSecret: "<value>",
  },
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `headers`                                     | Record<string, *string*[]>                    | :heavy_check_mark:                            | N/A                                           |
| `result`                                      | [models.AuthToken](../../models/authtoken.md) | :heavy_check_mark:                            | N/A                                           |
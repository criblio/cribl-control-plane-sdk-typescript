# GetInputStatusResponse

## Example Usage

```typescript
import { GetInputStatusResponse } from "cribl-control-plane/models/operations";

let value: GetInputStatusResponse = {
  result: {
    items: [
      {
        id: "<id>",
        status: {
          health: "Yellow",
          healthCounts: {
            Green: 403493,
            Red: 190686,
            Unknown: 878004,
            Yellow: 826410,
          },
          timestamp: 814549,
        },
      },
    ],
    count: 569918,
    offset: 490659,
    limit: 897909,
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `result`                                | *operations.GetInputStatusResponseBody* | :heavy_check_mark:                      | N/A                                     |
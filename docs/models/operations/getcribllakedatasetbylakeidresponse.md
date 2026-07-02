# GetCriblLakeDatasetByLakeIdResponse

## Example Usage

```typescript
import { GetCriblLakeDatasetByLakeIdResponse } from "cribl-control-plane/models/operations";

let value: GetCriblLakeDatasetByLakeIdResponse = {
  result: {
    items: [
      {
        id: "<id>",
        searchConfig: {
          metadata: {
            earliest: "-30d",
            enableAcceleration: true,
            fieldList: [
              "<value 1>",
            ],
            scanMode: "detailed",
          },
        },
      },
    ],
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `result`                                             | *operations.GetCriblLakeDatasetByLakeIdResponseBody* | :heavy_check_mark:                                   | N/A                                                  |
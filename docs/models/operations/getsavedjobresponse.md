# GetSavedJobResponse

## Example Usage

```typescript
import { GetSavedJobResponse } from "cribl-control-plane/models/operations";

let value: GetSavedJobResponse = {
  result: {
    items: [
      {
        type: "executor",
        collector: {
          type: "health_check",
          conf: {
            authentication: "basicSecret",
            credentialsSecret: "<value>",
            collectUrl: "https://glaring-depot.net/",
            collectMethod: "get",
          },
        },
      },
    ],
    count: 629180,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `result`                                                                      | [models.PaginatedSavedJobResponse](../../models/paginatedsavedjobresponse.md) | :heavy_check_mark:                                                            | N/A                                                                           |
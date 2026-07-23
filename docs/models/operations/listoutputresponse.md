# ListOutputResponse

## Example Usage

```typescript
import { ListOutputResponse } from "cribl-control-plane/models/operations";

let value: ListOutputResponse = {
  result: {
    items: [
      {
        type: "azure_eventhub",
        brokers: [
          "<value 1>",
        ],
        topic: "<value>",
      },
    ],
    count: 28,
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `result`                                                                  | [models.PaginatedOutputResponse](../../models/paginatedoutputresponse.md) | :heavy_check_mark:                                                        | N/A                                                                       |
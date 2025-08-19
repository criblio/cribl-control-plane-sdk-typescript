# GetVersionResponse

a list of GitLogResult objects

## Example Usage

```typescript
import { GetVersionResponse } from "cribl-control-plane/models/operations";

let value: GetVersionResponse = {
  count: 817133,
  items: [
    {
      authorEmail: "<value>",
      authorName: "<value>",
      body: "<value>",
      date: "2024-04-13",
      hash: "<value>",
      message: "<value>",
      refs: "<value>",
    },
  ],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `count`                                               | *number*                                              | :heavy_minus_sign:                                    | number of items present in the items array            |
| `items`                                               | [models.GitLogResult](../../models/gitlogresult.md)[] | :heavy_minus_sign:                                    | N/A                                                   |
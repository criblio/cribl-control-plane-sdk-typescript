# GetVersionFilesResponse

a list of GitFilesResponse objects

## Example Usage

```typescript
import { GetVersionFilesResponse } from "cribl-control-plane/models/operations";

let value: GetVersionFilesResponse = {
  count: 955986,
  items: [
    {
      commitMessage: {},
      count: 6503.3,
      items: [
        {
          children: [
            {
              name: "<value>",
              state: "Minnesota",
            },
          ],
          name: "<value>",
          state: "Washington",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `count`                                                       | *number*                                                      | :heavy_minus_sign:                                            | number of items present in the items array                    |
| `items`                                                       | [models.GitFilesResponse](../../models/gitfilesresponse.md)[] | :heavy_minus_sign:                                            | N/A                                                           |
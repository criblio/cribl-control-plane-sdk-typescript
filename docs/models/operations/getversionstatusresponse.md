# GetVersionStatusResponse

a list of GitStatusResult objects

## Example Usage

```typescript
import { GetVersionStatusResponse } from "cribl-control-plane/models/operations";

let value: GetVersionStatusResponse = {
  count: 221764,
  items: [
    {
      ahead: 8427.65,
      behind: 4677.02,
      conflicted: [],
      created: [
        "<value 1>",
        "<value 2>",
      ],
      current: "<value>",
      deleted: [
        "<value 1>",
        "<value 2>",
      ],
      files: [],
      modified: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      notAdded: [
        "<value 1>",
        "<value 2>",
      ],
      renamed: [],
      staged: [
        "<value 1>",
      ],
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `count`                                                     | *number*                                                    | :heavy_minus_sign:                                          | number of items present in the items array                  |
| `items`                                                     | [models.GitStatusResult](../../models/gitstatusresult.md)[] | :heavy_minus_sign:                                          | N/A                                                         |
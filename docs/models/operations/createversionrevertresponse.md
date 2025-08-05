# CreateVersionRevertResponse

a list of GitRevertResult objects

## Example Usage

```typescript
import { CreateVersionRevertResponse } from "cribl-control-plane/models/operations";

let value: CreateVersionRevertResponse = {
  count: 480052,
  items: [
    {
      audit: {
        files: {
          created: [
            "<value 1>",
          ],
          deleted: [
            "<value 1>",
            "<value 2>",
          ],
          modified: [
            "<value 1>",
          ],
          renamed: [
            "<value 1>",
            "<value 2>",
          ],
        },
        group: "<value>",
        id: "<id>",
      },
      reverted: false,
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `count`                                                     | *number*                                                    | :heavy_minus_sign:                                          | number of items present in the items array                  |
| `items`                                                     | [models.GitRevertResult](../../models/gitrevertresult.md)[] | :heavy_minus_sign:                                          | N/A                                                         |
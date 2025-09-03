# GetVersionDiffResponse

a list of GitDiffResult objects

## Example Usage

```typescript
import { GetVersionDiffResponse } from "cribl-control-plane/models/operations";

let value: GetVersionDiffResponse = {
  count: 374605,
  items: [
    {
      diffJson: [],
    },
  ],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `count`                                                 | *number*                                                | :heavy_minus_sign:                                      | number of items present in the items array              |
| `items`                                                 | [models.GitDiffResult](../../models/gitdiffresult.md)[] | :heavy_minus_sign:                                      | N/A                                                     |
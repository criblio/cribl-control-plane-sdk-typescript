# GetVersionShowResponse

a list of GitShowResult objects

## Example Usage

```typescript
import { GetVersionShowResponse } from "cribl-control-plane/models/operations";

let value: GetVersionShowResponse = {
  count: 961642,
  items: [
    {
      commitMessage: "<value>",
      diffJson: [],
    },
  ],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `count`                                                 | *number*                                                | :heavy_minus_sign:                                      | number of items present in the items array              |
| `items`                                                 | [models.GitShowResult](../../models/gitshowresult.md)[] | :heavy_minus_sign:                                      | N/A                                                     |
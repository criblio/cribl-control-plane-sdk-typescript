# UnionConfiguration

## Example Usage

```typescript
import { UnionConfiguration } from "cribl-control-plane/models";

let value: UnionConfiguration = {
  searchJobId: "<id>",
  stageIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `searchJobId`                    | *string*                         | :heavy_minus_sign:               | The id for this search job.      |
| `stageIds`                       | *string*[]                       | :heavy_minus_sign:               | The stages we are unioning with. |
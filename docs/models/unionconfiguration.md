# UnionConfiguration

## Example Usage

```typescript
import { UnionConfiguration } from "cribl-control-plane/models";

let value: UnionConfiguration = {
  searchJobId: "<id>",
  stageIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `searchJobId`                    | *string*                         | :heavy_check_mark:               | The id for this search job.      |
| `stageIds`                       | *string*[]                       | :heavy_check_mark:               | The stages we are unioning with. |
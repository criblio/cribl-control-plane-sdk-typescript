# CountedJobInfo

## Example Usage

```typescript
import { CountedJobInfo } from "cribl-control-plane/models";

let value: CountedJobInfo = {
  count: 945460,
  items: [],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_check_mark:                         | number of items present in the items array |
| `items`                                    | [models.JobInfo](../models/jobinfo.md)[]   | :heavy_check_mark:                         | List of items in this response.            |
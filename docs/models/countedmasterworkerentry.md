# CountedMasterWorkerEntry

## Example Usage

```typescript
import { CountedMasterWorkerEntry } from "cribl-control-plane/models";

let value: CountedMasterWorkerEntry = {
  count: 981854,
  items: [],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `count`                                                      | *number*                                                     | :heavy_check_mark:                                           | number of items present in the items array                   |
| `items`                                                      | [models.MasterWorkerEntry](../models/masterworkerentry.md)[] | :heavy_check_mark:                                           | List of items in this response.                              |
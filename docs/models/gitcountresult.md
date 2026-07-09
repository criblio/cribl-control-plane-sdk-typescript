# GitCountResult

## Example Usage

```typescript
import { GitCountResult } from "cribl-control-plane/models";

let value: GitCountResult = {
  count: 318611,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_check_mark:                                       | Number of files that changed since the specified commit. |
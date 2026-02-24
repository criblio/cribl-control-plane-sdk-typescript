# CountedGitStatusResult

## Example Usage

```typescript
import { CountedGitStatusResult } from "cribl-control-plane/models";

let value: CountedGitStatusResult = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | number of items present in the items array               |
| `items`                                                  | [models.GitStatusResult](../models/gitstatusresult.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
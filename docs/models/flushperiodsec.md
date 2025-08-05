# FlushPeriodSec

Maximum time to wait before sending a batch (when batch size limit is not reached).

## Example Usage

```typescript
import { FlushPeriodSec } from "cribl-control-plane/models";

let value: FlushPeriodSec = {
  type: "number",
  default: 1903.67,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | [models.FlushPeriodSecType](../models/flushperiodsectype.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `default`                                                    | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
# Sample

## Example Usage

```typescript
import { Sample } from "cribl-control-plane/models/operations";

let value: Sample = {
  sample: "<value>",
  eventsPerSec: 3367.08,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `sample`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `eventsPerSec`                                                                   | *number*                                                                         | :heavy_check_mark:                                                               | Maximum number of events to generate per second per Worker Node. Defaults to 10. |
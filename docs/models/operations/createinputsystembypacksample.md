# CreateInputSystemByPackSample

## Example Usage

```typescript
import { CreateInputSystemByPackSample } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackSample = {
  sample: "<value>",
  eventsPerSec: 5858.58,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `sample`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `eventsPerSec`                                                                   | *number*                                                                         | :heavy_check_mark:                                                               | Maximum number of events to generate per second per Worker Node. Defaults to 10. |
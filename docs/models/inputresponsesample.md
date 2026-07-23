# InputResponseSample

## Example Usage

```typescript
import { InputResponseSample } from "cribl-control-plane/models";

let value: InputResponseSample = {
  sample: "<value>",
  eventsPerSec: 1869.72,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `sample`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Data Generator File Name                                                         |
| `eventsPerSec`                                                                   | *number*                                                                         | :heavy_check_mark:                                                               | Maximum number of events to generate per second per Worker Node. Defaults to 10. |
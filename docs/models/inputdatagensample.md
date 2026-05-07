# InputDatagenSample

## Example Usage

```typescript
import { InputDatagenSample } from "cribl-control-plane/models";

let value: InputDatagenSample = {
  sample: "<value>",
  eventsPerSec: 9433.76,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `sample`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `eventsPerSec`                                                                   | *number*                                                                         | :heavy_check_mark:                                                               | Maximum number of events to generate per second per Worker Node. Defaults to 10. |
# OutputSamplesResponse

Sample events from a Destination.

## Example Usage

```typescript
import { OutputSamplesResponse } from "cribl-control-plane/models";

let value: OutputSamplesResponse = {
  events: [
    {
      "key": "<value>",
    },
    {
      "key": "<value>",
    },
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `events`                                                 | Record<string, *any*>[]                                  | :heavy_check_mark:                                       | Array of sample events returned from a Destination test. |
# OutputTestRequest

## Example Usage

```typescript
import { OutputTestRequest } from "cribl-control-plane/models";

let value: OutputTestRequest = {
  events: [
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `events`                | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |
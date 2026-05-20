# OutputTestRequest

Request body for testing a Destination by sending sample events.

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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `events`                                                       | Record<string, *any*>[]                                        | :heavy_check_mark:                                             | Array of event objects to send to the Destination for testing. |
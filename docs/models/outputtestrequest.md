# OutputTestRequest

## Example Usage

```typescript
import { OutputTestRequest } from "cribl-control-plane/models";

let value: OutputTestRequest = {
  events: [
    {
      raw: "<value>",
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `events`                                       | [models.CriblEvent](../models/criblevent.md)[] | :heavy_check_mark:                             | N/A                                            |
# PreviewResponse

## Example Usage

```typescript
import { PreviewResponse } from "cribl-control-plane/models";

let value: PreviewResponse = {
  count: 8415.53,
  items: [],
  stderr: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `count`                                              | *number*                                             | :heavy_check_mark:                                   | Total count of captured events.                      |
| `items`                                              | [models.CapturedEvent](../models/capturedevent.md)[] | :heavy_check_mark:                                   | Array of events captured during Pipeline preview.    |
| `message`                                            | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `profile`                                            | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `stats`                                              | [models.CaptureStats](../models/capturestats.md)     | :heavy_minus_sign:                                   | N/A                                                  |
| `stderr`                                             | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
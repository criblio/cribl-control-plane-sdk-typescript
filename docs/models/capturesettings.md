# CaptureSettings

## Example Usage

```typescript
import { CaptureSettings } from "cribl-control-plane/models";

let value: CaptureSettings = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `duration`                                           | *number*                                             | :heavy_minus_sign:                                   | Amount of time to keep capture open, in seconds      |
| `maxEvents`                                          | *number*                                             | :heavy_minus_sign:                                   | Maximum number of events to capture                  |
| `level`                                              | [models.WhereToCapture](../models/wheretocapture.md) | :heavy_minus_sign:                                   | N/A                                                  |
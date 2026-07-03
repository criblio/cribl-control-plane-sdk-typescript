# ShutdownTypeSystemSettingsConf

Graceful shutdown configuration.

## Example Usage

```typescript
import { ShutdownTypeSystemSettingsConf } from "cribl-control-plane/models";

let value: ShutdownTypeSystemSettingsConf = {
  drainTimeout: 294530,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `drainTimeout`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | Maximum time in milliseconds to wait for in-flight events to drain before forcing a shutdown. |
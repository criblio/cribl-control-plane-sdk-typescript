# HostSystemMetrics

## Example Usage

```typescript
import { HostSystemMetrics } from "cribl-control-plane/models/operations";

let value: HostSystemMetrics = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [models.ModeOptionsHost](../../models/modeoptionshost.md)                        | :heavy_minus_sign:                                                               | Select level of detail for host metrics                                          |
| `custom`                                                                         | [operations.CustomSystemMetrics](../../models/operations/customsystemmetrics.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
# ServicesLimits

## Example Usage

```typescript
import { ServicesLimits } from "cribl-control-plane/models";

let value: ServicesLimits = {
  connections: {
    memoryLimit: "<value>",
    procs: 9291.32,
  },
  metrics: {
    memoryLimit: "<value>",
    procs: "auto",
  },
  notifications: {
    memoryLimit: "<value>",
    procs: "auto",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `connections`                                                              | [models.CommonServiceLimitConfigs](../models/commonservicelimitconfigs.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `metrics`                                                                  | [models.CommonServiceLimitConfigs](../models/commonservicelimitconfigs.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `notifications`                                                            | [models.CommonServiceLimitConfigs](../models/commonservicelimitconfigs.md) | :heavy_check_mark:                                                         | N/A                                                                        |
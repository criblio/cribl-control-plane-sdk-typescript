# ServicesLimits

## Example Usage

```typescript
import { ServicesLimits } from "cribl-control-plane/models";

let value: ServicesLimits = {
  connections: {
    memoryLimit: "<value>",
    procs: "auto",
  },
  metrics: {
    memoryLimit: "<value>",
    procs: 1275.01,
  },
  notifications: {
    memoryLimit: "<value>",
    procs: 5172.91,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `connections`                                                              | [models.CommonServiceLimitConfigs](../models/commonservicelimitconfigs.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `metrics`                                                                  | [models.CommonServiceLimitConfigs](../models/commonservicelimitconfigs.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `notifications`                                                            | [models.CommonServiceLimitConfigs](../models/commonservicelimitconfigs.md) | :heavy_check_mark:                                                         | N/A                                                                        |
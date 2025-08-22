# ServicesLimits

## Example Usage

```typescript
import { ServicesLimits } from "cribl-control-plane/models";

let value: ServicesLimits = {
  connections: {
    memoryLimit: "<value>",
  },
  metrics: {
    memoryLimit: "<value>",
  },
  notifications: {
    memoryLimit: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `connections`                                                              | [models.CommonServiceLimitConfigs](../models/commonservicelimitconfigs.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `metrics`                                                                  | [models.CommonServiceLimitConfigs](../models/commonservicelimitconfigs.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `notifications`                                                            | [models.CommonServiceLimitConfigs](../models/commonservicelimitconfigs.md) | :heavy_check_mark:                                                         | N/A                                                                        |
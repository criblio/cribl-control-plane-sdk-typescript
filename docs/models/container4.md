# Container4

## Example Usage

```typescript
import { Container4 } from "cribl-control-plane/models";

let value: Container4 = {
  dockerSocket: [
    "<value 1>",
    "<value 2>",
  ],
  filters: [
    {
      expr: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `mode`                                                                                       | [models.ContainerMode4](../models/containermode4.md)                                         | :heavy_minus_sign:                                                                           | Select the level of detail for container metrics                                             |
| `dockerSocket`                                                                               | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | Full paths for Docker's UNIX-domain socket                                                   |
| `dockerTimeout`                                                                              | *number*                                                                                     | :heavy_minus_sign:                                                                           | Timeout, in seconds, for the Docker API                                                      |
| `filters`                                                                                    | [models.InputSystemMetricsFilter4](../models/inputsystemmetricsfilter4.md)[]                 | :heavy_minus_sign:                                                                           | Containers matching any of these will be included. All are included if no filters are added. |
| `allContainers`                                                                              | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Include stopped and paused containers                                                        |
| `perDevice`                                                                                  | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Generate separate metrics for each device                                                    |
| `detail`                                                                                     | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Generate full container metrics                                                              |
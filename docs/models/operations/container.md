# Container

## Example Usage

```typescript
import { Container } from "cribl-control-plane/models/operations";

let value: Container = {
  dockerSocket: [
    "<value 1>",
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
| `mode`                                                                                       | [operations.ContainerMode](../../models/operations/containermode.md)                         | :heavy_minus_sign:                                                                           | Select the level of detail for container metrics                                             |
| `dockerSocket`                                                                               | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | Full paths for Docker's UNIX-domain socket                                                   |
| `dockerTimeout`                                                                              | *number*                                                                                     | :heavy_minus_sign:                                                                           | Timeout, in seconds, for the Docker API                                                      |
| `filters`                                                                                    | [operations.InputSystemMetricsFilter](../../models/operations/inputsystemmetricsfilter.md)[] | :heavy_minus_sign:                                                                           | Containers matching any of these will be included. All are included if no filters are added. |
| `allContainers`                                                                              | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Include stopped and paused containers                                                        |
| `perDevice`                                                                                  | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Generate separate metrics for each device                                                    |
| `detail`                                                                                     | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Generate full container metrics                                                              |
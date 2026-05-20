# DistributedSummaryWorkers

## Example Usage

```typescript
import { DistributedSummaryWorkers } from "cribl-control-plane/models";

let value: DistributedSummaryWorkers = {
  alive: 805703,
  confVersions: 468746,
  count: 270552,
  disconnectedCount: 706029,
  groups: 938439,
  softwareVersions: 959372,
  unhealthy: 308252,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `alive`                                                                                                | *number*                                                                                               | :heavy_check_mark:                                                                                     | Total number of Worker or Edge Nodes that are connected with <code>healthy</code> status.              |
| `confVersions`                                                                                         | *number*                                                                                               | :heavy_check_mark:                                                                                     | Total number of unique configuration versions across all Worker or Edge Nodes.                         |
| `count`                                                                                                | *number*                                                                                               | :heavy_check_mark:                                                                                     | Total number of Worker or Edge Nodes.                                                                  |
| `disconnectedCount`                                                                                    | *number*                                                                                               | :heavy_check_mark:                                                                                     | Total number of Worker or Edge Nodes in a disconnected state.                                          |
| `groups`                                                                                               | *number*                                                                                               | :heavy_check_mark:                                                                                     | Total number of distinct Worker Groups or Edge Fleets that the Workers or Edge Nodes belong to.        |
| `softwareVersions`                                                                                     | *number*                                                                                               | :heavy_check_mark:                                                                                     | Total number of unique Cribl software versions across all Worker or Edge Nodes.                        |
| `unhealthy`                                                                                            | *number*                                                                                               | :heavy_check_mark:                                                                                     | Total number of Worker or Edge Nodes that are connected with a status other than <code>healthy</code>. |
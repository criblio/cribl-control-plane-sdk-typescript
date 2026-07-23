# Workers

Worker or Edge Node counts and health statistics in the deployment summary.

## Example Usage

```typescript
import { Workers } from "cribl-control-plane/models";

let value: Workers = {
  alive: 616069,
  confVersions: 814627,
  count: 149699,
  disconnectedCount: 547514,
  groups: 604220,
  softwareVersions: 111441,
  unhealthy: 507656,
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
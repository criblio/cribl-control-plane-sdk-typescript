# DistributedSummaryGroups

## Example Usage

```typescript
import { DistributedSummaryGroups } from "cribl-control-plane/models";

let value: DistributedSummaryGroups = {
  count: 972646,
  destinations: 990462,
  packs: 330992,
  pipelines: 873051,
  quickConnects: 664776,
  routes: 101499,
  sources: 326119,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `count`                                       | *number*                                      | :heavy_check_mark:                            | Total number of Worker Groups or Edge Fleets. |
| `destinations`                                | *number*                                      | :heavy_check_mark:                            | Total number of Destinations.                 |
| `packs`                                       | *number*                                      | :heavy_check_mark:                            | Total number of Packs.                        |
| `pipelines`                                   | *number*                                      | :heavy_check_mark:                            | Total number of Pipelines.                    |
| `quickConnects`                               | *number*                                      | :heavy_check_mark:                            | Total number of QuickConnect configurations.  |
| `routes`                                      | *number*                                      | :heavy_check_mark:                            | Total number of Routes.                       |
| `sources`                                     | *number*                                      | :heavy_check_mark:                            | Total number of Sources.                      |
# SearchSettings

## Example Usage

```typescript
import { SearchSettings } from "cribl-control-plane/models";

let value: SearchSettings = {
  compressObjectCacheArtifacts: true,
  fieldSummaryMaxFields: 1513.43,
  fieldSummaryMaxNestedDepth: 6795.38,
  maxConcurrentSearches: 2282.44,
  maxExecutorsPerSearch: 5475.83,
  maxResultsPerSearch: 5020.32,
  searchHistoryMaxJobs: 9549.92,
  searchQueueLength: 3637.15,
  warmPoolSize: "auto",
  writeOnlyProviderSecrets: false,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `compressObjectCacheArtifacts` | *boolean*                      | :heavy_check_mark:             | N/A                            |
| `fieldSummaryMaxFields`        | *number*                       | :heavy_check_mark:             | N/A                            |
| `fieldSummaryMaxNestedDepth`   | *number*                       | :heavy_check_mark:             | N/A                            |
| `maxConcurrentSearches`        | *number*                       | :heavy_check_mark:             | N/A                            |
| `maxExecutorsPerSearch`        | *number*                       | :heavy_check_mark:             | N/A                            |
| `maxResultsPerSearch`          | *number*                       | :heavy_check_mark:             | N/A                            |
| `searchHistoryMaxJobs`         | *number*                       | :heavy_check_mark:             | N/A                            |
| `searchQueueLength`            | *number*                       | :heavy_check_mark:             | N/A                            |
| `warmPoolSize`                 | *models.WarmPoolSize*          | :heavy_check_mark:             | N/A                            |
| `writeOnlyProviderSecrets`     | *boolean*                      | :heavy_check_mark:             | N/A                            |
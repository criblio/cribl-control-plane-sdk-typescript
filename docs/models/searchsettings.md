# SearchSettings

## Example Usage

```typescript
import { SearchSettings } from "cribl-control-plane/models";

let value: SearchSettings = {
  compressObjectCacheArtifacts: true,
  fieldSummaryMaxFields: 1513.43,
  fieldSummaryMaxNestedDepth: 6795.38,
  maxConcurrentSearches: 5475.83,
  maxExecutorsPerSearch: 5020.32,
  maxResultsPerSearch: 9549.92,
  maxSearchDuration: "<value>",
  searchHistoryMaxJobs: 3637.15,
  searchHistoryTTL: "<value>",
  searchQueueLength: "<value>",
  warmPoolSize: "auto",
  writeOnlyProviderSecrets: true,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `compressObjectCacheArtifacts`     | *boolean*                          | :heavy_check_mark:                 | N/A                                |
| `fieldSummaryMaxFields`            | *number*                           | :heavy_check_mark:                 | N/A                                |
| `fieldSummaryMaxNestedDepth`       | *number*                           | :heavy_check_mark:                 | N/A                                |
| `maxConcurrentSearches`            | *models.MaxConcurrentSearchesType* | :heavy_check_mark:                 | N/A                                |
| `maxExecutorsPerSearch`            | *number*                           | :heavy_check_mark:                 | N/A                                |
| `maxResultsPerSearch`              | *number*                           | :heavy_check_mark:                 | N/A                                |
| `maxSearchDuration`                | *string*                           | :heavy_check_mark:                 | N/A                                |
| `searchHistoryMaxJobs`             | *number*                           | :heavy_check_mark:                 | N/A                                |
| `searchHistoryTTL`                 | *string*                           | :heavy_check_mark:                 | N/A                                |
| `searchQueueLength`                | *models.SearchQueueLength*         | :heavy_check_mark:                 | N/A                                |
| `warmPoolSize`                     | *models.WarmPoolSize*              | :heavy_check_mark:                 | N/A                                |
| `writeOnlyProviderSecrets`         | *boolean*                          | :heavy_check_mark:                 | N/A                                |
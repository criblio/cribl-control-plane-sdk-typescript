# DatasetMetadataRunInfo

## Example Usage

```typescript
import { DatasetMetadataRunInfo } from "cribl-control-plane/models";

let value: DatasetMetadataRunInfo = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `earliestScannedTime`                                                                        | *number*                                                                                     | :heavy_minus_sign:                                                                           | Timestamp (in Unix time) for the earliest event that was observed during the scan (seconds). |
| `finishedAt`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | Timestamp (in Unix time) when the acceleration run finished (milliseconds).                  |
| `latestScannedTime`                                                                          | *number*                                                                                     | :heavy_minus_sign:                                                                           | Timestamp (in Unix time) for the latest event that was observed during the scan (seconds).   |
| `objectCount`                                                                                | *number*                                                                                     | :heavy_minus_sign:                                                                           | Number of objects on the acceleration manifest after the scan completed.                     |
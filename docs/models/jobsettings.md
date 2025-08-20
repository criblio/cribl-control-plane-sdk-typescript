# JobSettings

## Example Usage

```typescript
import { JobSettings } from "cribl-control-plane/models";

let value: JobSettings = {
  concurrentJobLimit: 8715.54,
  concurrentScheduledJobLimit: 6600.32,
  concurrentSystemJobLimit: 2920.15,
  concurrentSystemTaskLimit: 3493.8,
  concurrentTaskLimit: 8890.02,
  disableTasks: false,
  finishedJobArtifactsLimit: 3714.07,
  finishedTaskArtifactsLimit: 2230.91,
  jobArtifactsReaperPeriod: "<value>",
  jobTimeout: "<value>",
  maxTaskPerc: 7830.22,
  schedulingPolicy: "<value>",
  taskHeartbeatPeriod: 2865.77,
  taskManifestFlushPeriodMs: 4675.12,
  taskManifestMaxBufferSize: 7938.22,
  taskManifestReadBufferSize: "<value>",
  taskPollTimeoutMs: 1649.99,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `concurrentJobLimit`          | *number*                      | :heavy_check_mark:            | N/A                           |
| `concurrentScheduledJobLimit` | *number*                      | :heavy_check_mark:            | N/A                           |
| `concurrentSystemJobLimit`    | *number*                      | :heavy_check_mark:            | N/A                           |
| `concurrentSystemTaskLimit`   | *number*                      | :heavy_check_mark:            | N/A                           |
| `concurrentTaskLimit`         | *number*                      | :heavy_check_mark:            | N/A                           |
| `disableTasks`                | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `finishedJobArtifactsLimit`   | *number*                      | :heavy_check_mark:            | N/A                           |
| `finishedTaskArtifactsLimit`  | *number*                      | :heavy_check_mark:            | N/A                           |
| `jobArtifactsReaperPeriod`    | *string*                      | :heavy_check_mark:            | N/A                           |
| `jobTimeout`                  | *string*                      | :heavy_check_mark:            | N/A                           |
| `maxTaskPerc`                 | *number*                      | :heavy_check_mark:            | N/A                           |
| `schedulingPolicy`            | *string*                      | :heavy_check_mark:            | N/A                           |
| `taskHeartbeatPeriod`         | *number*                      | :heavy_check_mark:            | N/A                           |
| `taskManifestFlushPeriodMs`   | *number*                      | :heavy_check_mark:            | N/A                           |
| `taskManifestMaxBufferSize`   | *number*                      | :heavy_check_mark:            | N/A                           |
| `taskManifestReadBufferSize`  | *string*                      | :heavy_check_mark:            | N/A                           |
| `taskPollTimeoutMs`           | *number*                      | :heavy_check_mark:            | N/A                           |
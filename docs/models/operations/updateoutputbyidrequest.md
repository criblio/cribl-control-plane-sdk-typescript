# UpdateOutputByIdRequest

## Example Usage

```typescript
import { UpdateOutputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateOutputByIdRequest = {
  id: "<id>",
  output: {
    bucket: "<value>",
    region: "<value>",
    stagePath: "$CRIBL_HOME/state/outputs/staging",
    endpoint: "https://storage.googleapis.com",
    signatureVersion: "v4",
    objectACL: "private",
    reuseConnections: true,
    rejectUnauthorized: true,
    addIdToStagePath: true,
    removeEmptyDirs: true,
    maxFileOpenTimeSec: 300,
    maxFileIdleTimeSec: 30,
    maxOpenFiles: 100,
    onBackpressure: "block",
    deadletterEnabled: false,
    onDiskFullBackpressure: "block",
    maxFileSizeMB: 10,
    collectorInstanceId: "<id>",
    emptyDirCleanupSec: 300,
    deadletterPath: "$CRIBL_HOME/state/outputs/dead-letter",
    maxRetryNum: 20,
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | Unique ID to PATCH               |
| `output`                         | *models.Output*                  | :heavy_check_mark:               | Destination object to be updated |
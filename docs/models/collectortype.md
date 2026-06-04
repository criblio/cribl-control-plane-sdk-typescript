# CollectorType

## Example Usage

```typescript
import { CollectorType } from "cribl-control-plane/models";

let value: CollectorType = "health_check";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"azure_blob" | "cribl_lake" | "database" | "filesystem" | "google_cloud_storage" | "health_check" | "rest" | "s3" | "script" | "splunk" | Unrecognized<string>
```
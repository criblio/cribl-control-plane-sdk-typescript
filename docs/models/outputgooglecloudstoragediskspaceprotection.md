# OutputGoogleCloudStorageDiskSpaceProtection

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { OutputGoogleCloudStorageDiskSpaceProtection } from "cribl-control-plane/models";

let value: OutputGoogleCloudStorageDiskSpaceProtection = "block";
```

## Values

```typescript
"block" | "drop"
```
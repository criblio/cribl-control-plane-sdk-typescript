# OutputGoogleCloudStorageDiskSpaceProtection

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { OutputGoogleCloudStorageDiskSpaceProtection } from "cribl-control-plane/models/operations";

let value: OutputGoogleCloudStorageDiskSpaceProtection = "block";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | Unrecognized<string>
```
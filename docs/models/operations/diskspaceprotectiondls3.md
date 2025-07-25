# DiskSpaceProtectionDlS3

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { DiskSpaceProtectionDlS3 } from "cribl-control-plane/models/operations";

let value: DiskSpaceProtectionDlS3 = "drop";
```

## Values

```typescript
"block" | "drop"
```
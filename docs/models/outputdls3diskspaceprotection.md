# OutputDlS3DiskSpaceProtection

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { OutputDlS3DiskSpaceProtection } from "cribl-control-plane/models";

let value: OutputDlS3DiskSpaceProtection = "block";
```

## Values

```typescript
"block" | "drop"
```
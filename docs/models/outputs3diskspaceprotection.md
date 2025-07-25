# OutputS3DiskSpaceProtection

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { OutputS3DiskSpaceProtection } from "cribl-control-plane/models";

let value: OutputS3DiskSpaceProtection = "block";
```

## Values

```typescript
"block" | "drop"
```
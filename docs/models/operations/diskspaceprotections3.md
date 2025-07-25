# DiskSpaceProtectionS3

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { DiskSpaceProtectionS3 } from "cribl-control-plane/models/operations";

let value: DiskSpaceProtectionS3 = "drop";
```

## Values

```typescript
"block" | "drop"
```
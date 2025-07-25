# DiskSpaceProtectionFilesystem

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { DiskSpaceProtectionFilesystem } from "cribl-control-plane/models/operations";

let value: DiskSpaceProtectionFilesystem = "drop";
```

## Values

```typescript
"block" | "drop"
```
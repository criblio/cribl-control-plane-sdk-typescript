# OutputFilesystemDiskSpaceProtection

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { OutputFilesystemDiskSpaceProtection } from "cribl-control-plane/models";

let value: OutputFilesystemDiskSpaceProtection = "block";
```

## Values

```typescript
"block" | "drop"
```
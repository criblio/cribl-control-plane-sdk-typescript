# OutputAzureBlobDiskSpaceProtection

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { OutputAzureBlobDiskSpaceProtection } from "cribl-control-plane/models";

let value: OutputAzureBlobDiskSpaceProtection = "block";
```

## Values

```typescript
"block" | "drop"
```
# DiskSpaceProtectionAzureBlob

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { DiskSpaceProtectionAzureBlob } from "cribl-control-plane/models/operations";

let value: DiskSpaceProtectionAzureBlob = "drop";
```

## Values

```typescript
"block" | "drop"
```
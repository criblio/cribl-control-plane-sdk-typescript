# OutputAzureDataExplorerDiskSpaceProtection

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { OutputAzureDataExplorerDiskSpaceProtection } from "cribl-control-plane/models";

let value: OutputAzureDataExplorerDiskSpaceProtection = "block";
```

## Values

```typescript
"block" | "drop"
```
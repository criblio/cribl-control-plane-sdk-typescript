# OutputCriblLakeDiskSpaceProtection

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { OutputCriblLakeDiskSpaceProtection } from "cribl-control-plane/models";

let value: OutputCriblLakeDiskSpaceProtection = "drop";
```

## Values

```typescript
"block" | "drop"
```
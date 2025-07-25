# OutputMinioDiskSpaceProtection

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { OutputMinioDiskSpaceProtection } from "cribl-control-plane/models/operations";

let value: OutputMinioDiskSpaceProtection = "block";
```

## Values

```typescript
"block" | "drop"
```
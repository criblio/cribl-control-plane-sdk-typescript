# OutputExabeamDiskSpaceProtection

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { OutputExabeamDiskSpaceProtection } from "cribl-control-plane/models";

let value: OutputExabeamDiskSpaceProtection = "drop";
```

## Values

```typescript
"block" | "drop"
```
# OutputExabeamDiskSpaceProtection

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { OutputExabeamDiskSpaceProtection } from "cribl-control-plane/models/operations";

let value: OutputExabeamDiskSpaceProtection = "drop";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | Unrecognized<string>
```
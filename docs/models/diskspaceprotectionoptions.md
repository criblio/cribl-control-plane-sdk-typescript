# DiskSpaceProtectionOptions

How to handle events when disk space is below the global 'Min free disk space' limit

## Example Usage

```typescript
import { DiskSpaceProtectionOptions } from "cribl-control-plane/models";

let value: DiskSpaceProtectionOptions = "block";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"block" | "drop" | Unrecognized<string>
```
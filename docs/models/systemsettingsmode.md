# SystemSettingsMode

## Example Usage

```typescript
import { SystemSettingsMode } from "cribl-control-plane/models";

let value: SystemSettingsMode = "search-supervisor";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"edge" | "worker" | "single" | "master" | "managed-edge" | "outpost" | "search-supervisor" | Unrecognized<string>
```
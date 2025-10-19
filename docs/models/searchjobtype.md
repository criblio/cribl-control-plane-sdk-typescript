# SearchJobType

## Example Usage

```typescript
import { SearchJobType } from "cribl-control-plane/models";

let value: SearchJobType = "command";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"command" | "scheduled" | "standard" | "datatypePreview" | "dashboard" | "notebook" | "systemInsights" | Unrecognized<string>
```
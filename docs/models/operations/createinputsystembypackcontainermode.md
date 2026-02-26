# CreateInputSystemByPackContainerMode

Select the level of detail for container metrics

## Example Usage

```typescript
import { CreateInputSystemByPackContainerMode } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackContainerMode = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```
# CreateInputContainerMode

Select the level of detail for container metrics

## Example Usage

```typescript
import { CreateInputContainerMode } from "cribl-control-plane/models/operations";

let value: CreateInputContainerMode = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```
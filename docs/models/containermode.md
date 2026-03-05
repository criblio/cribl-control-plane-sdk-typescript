# ContainerMode

Select the level of detail for container metrics

## Example Usage

```typescript
import { ContainerMode } from "cribl-control-plane/models";

let value: ContainerMode = "custom";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```
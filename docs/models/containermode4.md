# ContainerMode4

Select the level of detail for container metrics

## Example Usage

```typescript
import { ContainerMode4 } from "cribl-control-plane/models";

let value: ContainerMode4 = "disabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```
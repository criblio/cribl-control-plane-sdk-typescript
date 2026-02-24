# RbacResource

## Example Usage

```typescript
import { RbacResource } from "cribl-control-plane/models";

let value: RbacResource = "datasets";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"groups" | "datasets" | "dataset-providers" | "projects" | "dashboards" | "macros" | "notebooks" | Unrecognized<string>
```
# CreateOutputEndpointType

Select the type of Dynatrace endpoint configured

## Example Usage

```typescript
import { CreateOutputEndpointType } from "cribl-control-plane/models/operations";

let value: CreateOutputEndpointType = "saas";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"saas" | "ag" | Unrecognized<string>
```
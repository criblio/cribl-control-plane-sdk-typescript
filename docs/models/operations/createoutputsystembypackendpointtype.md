# CreateOutputSystemByPackEndpointType

Select the type of Dynatrace endpoint configured

## Example Usage

```typescript
import { CreateOutputSystemByPackEndpointType } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackEndpointType = "ag";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"saas" | "ag" | Unrecognized<string>
```
# CreateInputSystemByPackDiscoveryTypePrometheus

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { CreateInputSystemByPackDiscoveryTypePrometheus } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackDiscoveryTypePrometheus = "static";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"static" | "dns" | "ec2" | Unrecognized<string>
```
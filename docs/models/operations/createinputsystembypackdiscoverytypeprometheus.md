# CreateInputSystemByPackDiscoveryTypePrometheus

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { CreateInputSystemByPackDiscoveryTypePrometheus } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackDiscoveryTypePrometheus = "static";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"static" | "dns" | "ec2" | Unrecognized<string>
```
# DiscoveryTypePrometheus

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { DiscoveryTypePrometheus } from "cribl-control-plane/models";

let value: DiscoveryTypePrometheus = "ec2";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"static" | "dns" | "ec2" | Unrecognized<string>
```
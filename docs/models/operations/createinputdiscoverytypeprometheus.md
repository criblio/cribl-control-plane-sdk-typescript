# CreateInputDiscoveryTypePrometheus

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { CreateInputDiscoveryTypePrometheus } from "cribl-control-plane/models/operations";

let value: CreateInputDiscoveryTypePrometheus = "http_sd";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"static" | "dns" | "ec2" | "http_sd" | Unrecognized<string>
```
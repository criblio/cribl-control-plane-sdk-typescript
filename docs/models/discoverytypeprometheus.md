# DiscoveryTypePrometheus

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { DiscoveryTypePrometheus } from "cribl-control-plane/models";

let value: DiscoveryTypePrometheus = "http_sd";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"static" | "dns" | "ec2" | "http_sd" | Unrecognized<string>
```
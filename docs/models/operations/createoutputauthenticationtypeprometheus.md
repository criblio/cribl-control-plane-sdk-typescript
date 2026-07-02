# CreateOutputAuthenticationTypePrometheus

Remote Write authentication type

## Example Usage

```typescript
import { CreateOutputAuthenticationTypePrometheus } from "cribl-control-plane/models/operations";

let value: CreateOutputAuthenticationTypePrometheus = "basic";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "aws_sigv4" | Unrecognized<string>
```
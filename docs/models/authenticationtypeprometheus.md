# AuthenticationTypePrometheus

Remote Write authentication type

## Example Usage

```typescript
import { AuthenticationTypePrometheus } from "cribl-control-plane/models";

let value: AuthenticationTypePrometheus = "credentialsSecret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | "aws_sigv4" | Unrecognized<string>
```
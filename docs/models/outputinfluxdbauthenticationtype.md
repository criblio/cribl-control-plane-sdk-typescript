# OutputInfluxdbAuthenticationType

InfluxDB authentication type

## Example Usage

```typescript
import { OutputInfluxdbAuthenticationType } from "cribl-control-plane/models";

let value: OutputInfluxdbAuthenticationType = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | Unrecognized<string>
```
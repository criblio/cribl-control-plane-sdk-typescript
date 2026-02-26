# OutputInfluxdbAuthenticationType

InfluxDB authentication type

## Example Usage

```typescript
import { OutputInfluxdbAuthenticationType } from "cribl-control-plane/models";

let value: OutputInfluxdbAuthenticationType = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "credentialsSecret" | "token" | "textSecret" | Unrecognized<string>
```
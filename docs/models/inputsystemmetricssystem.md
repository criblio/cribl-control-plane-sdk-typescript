# InputSystemMetricsSystem

## Example Usage

```typescript
import { InputSystemMetricsSystem } from "cribl-control-plane/models";

let value: InputSystemMetricsSystem = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [models.InputSystemMetricsSystemMode](../models/inputsystemmetricssystemmode.md) | :heavy_minus_sign:                                                               | Select the level of detail for system metrics                                    |
| `processes`                                                                      | *boolean*                                                                        | :heavy_minus_sign:                                                               | Generate metrics for the numbers of processes in various states                  |
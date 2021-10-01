# Validate YAML

> Github action to validate yaml files against a JSON schema

## Usage

Validate your YAML files against a JSON structure by providing a schema path and a list of files.

```yaml
- name: Validate YAML
  uses: brittonhayes/validate-yaml
  with:
    schemaPath: 'schema.json'
    files: |
      example/foo.yaml
```

### Example JSON Schema

```json
{
  "test": {
    "structure": {
      "myValue": "string",
      "myValue2": "string"
    }
  }
}
```

### Example Valid YAML for this schema

```yaml
---
test:
  structure:
    myValue: '1'
    myValue2: '2'
```

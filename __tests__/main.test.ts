import {validateYAML} from '../src/validate'
import {expect, test} from '@jest/globals'

test('valid yaml files', async () => {
  const files: string[] = ['__tests__/valid.yaml']
  const schemaPath: string = '__tests__/schema.json'

  await expect(validateYAML(files, schemaPath)).resolves.toBe(0)
})

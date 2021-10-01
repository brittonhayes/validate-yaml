import YamlValidator, {IYamlValidatorOptions} from 'yaml-validator'
import fs from 'fs'

export async function validateYAML(
  files: string[],
  schemaPath: string
): Promise<number> {
  return new Promise((resolve, reject) => {
    const structure = fs.readFileSync(schemaPath, {encoding: 'utf-8'})
    const options: IYamlValidatorOptions = {
      log: 'validator.log',
      onWarning: (err, file) => {
        reject(new Error(`File: ${file} - ${err.message}`))
      },
      structure: JSON.parse(structure),
      writeJson: false
    }

    const validator = new YamlValidator(options)
    validator.validate(files)
    resolve(validator.report())
  })
}

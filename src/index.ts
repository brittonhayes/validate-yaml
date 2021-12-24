import * as core from '@actions/core'
import {Validator} from './lib/validate'

async function run(): Promise<void> {
  try {
    const validator = new Validator({
      files: core.getMultilineInput('files'),
      schemaPath: core.getInput('schemaPath')
    })

    await validator.ValidateYAML()
  } catch (error) {
    core.setFailed((error as Error).message)
  }
}

run()

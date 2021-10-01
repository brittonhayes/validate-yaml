import * as core from '@actions/core'
import {validateYAML} from './validate'

async function run(): Promise<void> {
  try {
    const files: string[] = core.getMultilineInput('files')
    const schemaPath: string = core.getInput('schemaPath')

    await validateYAML(files, schemaPath)
  } catch (error) {
    core.setFailed((error as Error).message)
  }
}

run()

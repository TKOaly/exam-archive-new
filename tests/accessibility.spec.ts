import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { createHtmlReport } from 'axe-html-reporter'

test('courselisting check', async ({ page }) => {
  await page.goto('/archive')

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  createHtmlReport({
    results: accessibilityScanResults,
    options: {
      outputDir: 'axe-reports',
      reportFileName: 'courselistingAccessiblityReport.html'
    }
  })
  expect(accessibilityScanResults.violations).toEqual([])
})

test('examlisting check', async ({ page }) => {
  await page.goto('/archive/2')

  const accessibilityScanResults = await new AxeBuilder({ page })
    .disableRules(['empty-table-header'])
    .analyze()
  createHtmlReport({
    results: accessibilityScanResults,
    options: {
      outputDir: 'axe-reports',
      reportFileName: 'examlistingAccessiblityReport.html'
    }
  })
  expect(accessibilityScanResults.violations).toEqual([])
})

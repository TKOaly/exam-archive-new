import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { createHtmlReport } from 'axe-html-reporter'

test('courselisting check', async ({ page }) => {
  await page.goto('/archive')

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  createHtmlReport({
    results: accessibilityScanResults,
    //options available to further customize reports
    options: {
      outputDir: 'axe-reports',
      reportFileName: 'courselistingAccessiblityReport.html'
    }
  })
  expect(accessibilityScanResults.violations).toEqual([])
})

// TODO: Fix accessibility - 3 violations from 2 rules
test.only('examlisting check', async ({ page }) => {
  await page.goto('/archive/2')

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  createHtmlReport({
    results: accessibilityScanResults,
    //options available to further customize reports
    options: {
      outputDir: 'axe-reports',
      reportFileName: 'examlistingAccessiblityReport.html'
    }
  })
  expect(accessibilityScanResults.violations).toEqual([])
})

import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { createHtmlReport } from 'axe-html-reporter'

// TODO: Fix accessibility - 129 violations from 2 rules
test.fixme('courselisting check', async ({ page }) => {
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

// TODO: Fix accessibility - 4 violations from 3 rules
test.fixme('examlisting check', async ({ page }) => {
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

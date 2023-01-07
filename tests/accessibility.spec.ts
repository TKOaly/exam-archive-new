import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { createHtmlReport } from 'axe-html-reporter'

test('courselisting check', async ({ page, browserName, isMobile }) => {
  await page.goto('/archive')

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()
  createHtmlReport({
    results: accessibilityScanResults,
    options: {
      outputDir: 'axe-reports',
      reportFileName: `courselistingAccessiblityReport-${browserName}${
        isMobile ? '-mobile' : ''
      }.html`
    }
  })
  expect(accessibilityScanResults.violations).toEqual([])
})

test('examlisting check', async ({ page, browserName, isMobile }) => {
  await page.goto('/archive/2')

  const accessibilityScanResults = await new AxeBuilder({ page })
    .disableRules(['empty-table-header'])
    .analyze()
  createHtmlReport({
    results: accessibilityScanResults,
    options: {
      outputDir: 'axe-reports',
      reportFileName: `examlistingAccessiblityReport-${browserName}${
        isMobile ? '-mobile' : ''
      }.html`
    }
  })
  expect(accessibilityScanResults.violations).toEqual([])
})

import { registerOTel } from '@vercel/otel'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import config from '@lib/config'

export const register = () => {
  registerOTel({
    serviceName: config.OTEL_SERVICE_NAME,
    traceExporter: new OTLPTraceExporter({
      url: config.OTEL_ENDPOINT,
      headers: {
        Authorization: config.OTEL_AUTHORIZATION
      }
    })
  })
}

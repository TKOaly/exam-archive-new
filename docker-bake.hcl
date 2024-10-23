variable "BUILDTARGET" {
  default="prod"
}

variable "NODE_VERSION" {
  default="20.15.1"
}

target "docker-metadata-action" {}

target "default" {
  inherits = ["docker-metadata-action"]
  context = "./"
  dockerfile = "Dockerfile"
  target = "${BUILDTARGET}"
  args = {
    NODE_VERSION = "${NODE_VERSION}"
  }
}
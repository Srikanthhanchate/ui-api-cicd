variable "name" {
  description = "Globally unique Azure Web App name"
  type        = string
}

variable "resource_group_name" {
  description = "Resource Group containing the Web App"
  type        = string
}

variable "location" {
  description = "Azure region for the Web App"
  type        = string
}

variable "service_plan_id" {
  description = "App Service Plan resource ID"
  type        = string
}

variable "tags" {
  description = "Tags applied to the Web App"
  type        = map(string)
  default     = {}
}

variable "runtime_stack" {
  description = "Runtime stack for the Web App"
  type        = string
  default     = null
}

variable "java_version" {
  description = "Java version for the Web App"
  type        = string
  default     = null
}

variable "java_server" {
  description = "Java server type"
  type        = string
  default     = null
}

variable "java_server_version" {
  description = "Java server version"
  type        = string
  default     = null
}